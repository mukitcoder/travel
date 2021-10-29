import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth()
    return (
        <div>
            <Button onClick={signInUsingGoogle}>Google Sign In</Button>
        </div>
    );
};

export default Login;