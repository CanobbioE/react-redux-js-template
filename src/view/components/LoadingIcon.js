import { CircularProgress } from '@material-ui/core';
import React from 'react';



const LoadingIcon = (props) => {
    return props.isLoading ? <CircularProgress disableShrink color="primary" /> : props.else;
};
export default LoadingIcon;