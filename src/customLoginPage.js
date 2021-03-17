import React from 'react';
import { Login } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    main: { 
        background: '#bbb' 
    },
    avatar: {
        background: 'url(https://freepngimg.com/thumb/welcome/26767-4-welcome-picture.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: 80,
    },
    card: {
        backgroundColor: '#ddd',
        marginTop: '150px',
        padding: '50px',
        borderRadius: '10px'
    },
    icon: { 
        display: 'none' 
    },
});

const CustomLoginPage = props => (
    <Login {...props} />
);

export default withStyles(styles)(CustomLoginPage);