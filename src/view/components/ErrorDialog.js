import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import React, { useState } from 'react';

const ErrorDialog = props => {

    const { title, message, open, onClose } = props;
    const [innerOpen, setOpen] = useState(open);
    const handleClose = () => {
        setOpen(false);
        onClose();
    }; 

    return (
        <Dialog fullWidth open={innerOpen} onClose={handleClose}>
            <DialogTitle > {title} </DialogTitle>
            <DialogContent dividers> {message} </DialogContent>
            <DialogActions><Button onClick={handleClose}>Ok</Button></DialogActions>
        </Dialog>
    );
};

export default ErrorDialog;