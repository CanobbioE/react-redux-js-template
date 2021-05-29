import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Routes from '../../constants/Routes';
import AuthSelector from '../../../selectors/AuthSelector';

const mapStateToProps = (state) => ({
    isAuthenticated: AuthSelector.selectIsAuthenticated(state)
});

const shouldNavigateAway = ({ isAuthenticated, history }) => {
    if (!isAuthenticated) {
        history.push(Routes.home);
    }
};

const RequireAuth = (ChildComponent) => {
    const ComposedComponent = props => {
        useEffect(() => { shouldNavigateAway(props); }, []);

        return <ChildComponent {...props} />;
    };

    return connect(mapStateToProps)(ComposedComponent);
};

export default RequireAuth;
