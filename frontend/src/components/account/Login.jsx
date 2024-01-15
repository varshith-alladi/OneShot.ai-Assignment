import React from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import { useState } from 'react';
import { API } from '../../service/api'

const Component = styled(Box)`
    width: 450px;
    margin: auto;
    box-shadow: 5px 5px 5px 5px rgb(0 0 0/ 0.3);
`;

const Image = styled('img')({
    width: 130,
    margin: 'auto',
    display: 'flex',
    padding: '40px 0 0',
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p{
        margin-top: 20px;

    }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 16px;
`;

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
};

const Login = () => {

    const imageURL = 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-450x255.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputchange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
    }

    return (
        <Component>
            <Box>
                <Image src={imageURL} alt='login' />
                {
                account === 'login' ? 
                    <Wrapper>
                        <TextField variant="filled" label="Username" />
                        <TextField variant="filled" label="Password" />
                        <Button variant="contained">Login</Button>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <Button onClick={() => toggleSignup()}>REGISTER HERE</Button>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="filled" onChange={(e) => onInputchange(e)} name='name' label="Name" />
                        <TextField variant="filled" onChange={(e) => onInputchange(e)} name='username' label="Username" />
                        <TextField variant="filled" onChange={(e) => onInputchange(e)} name='password' label="Password" />

                        <Button variant="contained" onClick={() => signupUser()}>SIGNUP</Button>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <Button onClick={() => toggleSignup()}>ALREADY HAVE AN ACCOUNT?</Button>
                    </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login