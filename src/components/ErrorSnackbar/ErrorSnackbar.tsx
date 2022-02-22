import React, {useEffect} from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import {useAppSelector} from "../../app/store";
import {useDispatch} from "react-redux";
import {SetErrorAC} from "../../app/app-reducer";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ErrorSnackbar() {
    let dispatch = useDispatch()
    let openStatus = useAppSelector<null | string>(state => state.app.error)
    // const [open, setOpen] = useState(openStatus != null );


    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(SetErrorAC(null))
    };

    return (
        <Snackbar open={!!openStatus} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{width: '100%'}}>
                {openStatus}
            </Alert>
        </Snackbar>
    );
}
