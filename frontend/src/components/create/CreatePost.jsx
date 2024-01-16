import React from 'react'
import { useState, useEffect, useContext } from 'react';

import { Box, styled, FormControl, InputBase, Button, TextareaAutosize } from '@mui/material'
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';


const Container = styled(Box)`
    margin: 50px 100px;
`

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: 1px solid black;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}


const CreatePost = () => {

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);


    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const location = useLocation();

    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])



    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Image src={url} alt='Banner' />

            <StyledFormControl>
                <label htmlFor='fileInput'>
                    <Add fontSize="large" color="action" />
                </label>
                <input 
                    type='file'
                    id='fileInput'
                    style={{display:'none'}}
                    onChange={(e) => setFile(e.target.files[0])} 
                />

                <InputTextField placeholder='Title' onChange={(e) => handleChange(e)} name='title' />
                <Button variant='contained'>Publish</Button>

            </StyledFormControl>

            <Textarea
                rowsMin={5}
                placeholder="Please write your description here..."
                name='description'
                // onChange={(e) => handleChange(e)}
            />
        </Container>
    )
}

export default CreatePost