import React, { Component } from 'react';
import './Login.css';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 'auto',
        width: '50%',
        padding: 10,
        width: '360px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 1,
        background: '#FFFFFF',
        maxWidth: '360px',
        margin: "0 auto 10px",
        padding: '45px',
        textAlign: 'center',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
       // width: 200,
        width: '100%',
        boxSizing: 'border-box',

    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Login extends Component {

    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };



    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="standard-name"
                        label="Username"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </form>
            </div>



        );
    }
}

export default withStyles(styles)(Login);