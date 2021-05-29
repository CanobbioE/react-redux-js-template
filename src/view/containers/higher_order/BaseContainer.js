import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import ErrorDialog from '../../../view/components/ErrorDialog';
import LoadingIcon from '../../../view/components/LoadingIcon';
import * as ErrorAction from '../../../stores/errors/ErrorAction';
import LoadingSelector from '../../../selectors/LoadingSelector';
import ErrorSelector from '../../../selectors/ErrorSelector';

const useStyles = makeStyles({
    title: {
        marginTop: '28px',
        marginBottom: '15px',
    },
});

const mapStateToProps = (state) => ({
    isLoading: LoadingSelector.selectIsLoading(state),
    error: ErrorSelector.selectError(state)
});


const BASE_CONTAINER = {
    IT: {
        ERROR: {
            TITLE: 'Oh no, si è verificato un errore!',
            MESSAGE: 'Messaggio',
            CODE: 'Codice',
        }
    }
};

const language = 'IT';

const BaseContainer = (props) => {
    const { title, error, children, description, isLoading, overrideLoadingFx } = props;

    const classes = useStyles();

    const renderErrorMsg = () => (
        <Typography component={'div'} align='left' varian='body2' color='error'>
            <b>{BASE_CONTAINER[language].ERROR.MESSAGE}:</b> {error.message.split('\n').map(l => <p key={l}>{l}</p>)}
            <br />
            <b>{BASE_CONTAINER[language].ERROR.CODE}:</b> <p>{error.code}</p>
        </Typography>
    );

    const renderError = () => (
        <ErrorDialog
            open={Boolean(error)}
            onClose={() => props.dispatch(ErrorAction.clear())}
            title={BASE_CONTAINER[language].ERROR.TITLE}
            message={renderErrorMsg()} />
    );


    const renderLoading = () => overrideLoadingFx ? overrideLoadingFx() : (<LoadingIcon isLoading={isLoading} />);

    const renderDescription = () => description ? (<Typography variant='subtitle1'>{description}</Typography>) : null;

    const renderTitle = () => title ? (<Typography variant="h4" className={classes.title}>{title}</Typography>) : null;

    const handleContent = () => isLoading ? renderLoading() : children;

    return (
        <Grid container justify='center'>
            <Grid item xs={10}>
                {renderTitle()}
                {renderDescription()}
                <br />
            </Grid>

            <Grid item container xs={10} justify={isLoading ? 'center' : null}>
                {error ? renderError() : null}
                {handleContent()}
            </Grid>
        </Grid>
    );
};

export default connect(mapStateToProps)(BaseContainer);