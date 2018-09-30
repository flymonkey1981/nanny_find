import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 'auto',
        width: '50%',
        padding: 10

    },
    form: {
        position: 'relative',
        zIndex: 1,
        background: '#FFFFFF',
        maxWidth: '360px',
        margin: "0 auto 10px",
        padding: '45px',
        textAlign: 'center',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'

    },
    formInput: {
        fontFamily: '"Roboto", sans-serif',
        outline: 0,
        background: '#f2f2f2',
        width: '100%',
        border: 0,
        margin: '0 0 15px',
        padding: '15px',
        boxSizing: 'border-box',
        fontSize: '14px'
    }
});

function Register(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.form}>
                <form className="register-form">
                    <input type="text" placeholder="name" className={classes.formInput}/>
                    <input type="password" placeholder="password" className={classes.formInput}/>
                </form>
            </div>

        </div>
    );
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
