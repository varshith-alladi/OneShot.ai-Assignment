import React from 'react'
import { Box, TextField, Button, styled, Typography } from '@mui/material'
import { useState, useContext } from 'react';
import { API } from '../../service/api'
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

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

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
}

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
};

const Login = ({isUserAuthenticated}) => {

    const imageURL = 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-450x255.png';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');

    const {setAccount} = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputchange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async () => {

        try{
            let response = await API.userSignup(signup);
            if(response.isSuccess){
                setSignup(signupInitialValues);
                toggleAccount('login');
            }
            else{
                setError('Something went wrong! please try again later');
            }
        }
        catch(error){
            console.log(error.message);
        }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        try{

            let response = await API.userLogin(login);
            if (response.isSuccess) {
                setError('');

                sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
                sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

                setAccount({username: response.data.username, name: response.data.name});
                // console.log("succesfull login")

                isUserAuthenticated(true);
                console.log("hiiii")
                navigate('/');
            }       
            else{
                setError('Something went wrong! please try again later');
            }
        }
        catch(error){
            console.log(error.message);
        }
    }



    return (
        <Component>
            <Box>
                <Image src={imageURL} alt='login' />
                {
                account === 'login' ? 
                    <Wrapper>
                        <TextField variant="filled" value={login.username} onChange={(e) => onValueChange(e)} name='username' label="Username" />
                        <TextField variant="filled" value={login.password} onChange={(e) => onValueChange(e)} name='password' label="Password" />

                        { error && <Error>{error}</Error> }

                        <Button variant="contained" onClick={() => loginUser()}>Login</Button>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <Button onClick={() => toggleSignup()}>REGISTER HERE</Button>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="filled" onChange={(e) => onInputchange(e)} name='name' label="Name" />
                        <TextField variant="filled" onChange={(e) => onInputchange(e)} name='username' label="Username" />
                        <TextField variant="filled" onChange={(e) => onInputchange(e)} name='password' label="Password" />

                        { error && <Error>{error}</Error> }

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