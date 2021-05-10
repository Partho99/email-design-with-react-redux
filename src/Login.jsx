import React from 'react';
import './Login.css';
import {auth, provider} from "./firebase";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL
                    }))
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className={'login'}>
            <div className={'login__container'}>
                <img
                    src={'https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'}
                    alt={'gmail'}
                />
                <Button
                    onClick={signIn}
                    variant={'contained'}
                    color={'primary'}
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;

