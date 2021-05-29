import React from 'react';
import BaseContainer from './higher_order/BaseContainer';
import { HOME } from '../../constants/i18n';
import LanguageSelector from '../../selectors/LanguageSelector';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    language: LanguageSelector.selectLanguage(state),
});

const Home = ((props) => {

    const { language } = props;

    const description = (
        <em>
            {HOME[language].DESCRIPTION}
        </em>
    );

    return (
        <BaseContainer props={props} title='Bio Parco' description={description}>
        </BaseContainer>
    );
});

export default connect(mapStateToProps)(Home);