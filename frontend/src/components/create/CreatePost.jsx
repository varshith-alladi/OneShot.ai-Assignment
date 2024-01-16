import React from 'react'
import { Box, styled, FormControl } from '@mui/material'
import { AddCircle as Add } from '@mui/icons-material';


const Container = styled(Box)`
    margin: 50px 100px;
`

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});


const CreatePost = () => {

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';


    return (
        <Container>
            <Image src={url} alt='Banner' />

            <FormControl>
                <label htmlFor='fileInput'>
                    <Add fontSize="large" color="action" />
                </label>
                <input 
                    type='file'
                    id='fileInput'
                    style={{display:'none'}} />
            </FormControl>

        </Container>
    )
}

export default CreatePost