import React from 'react';
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #8E8E8E ;
    font-size: 14px;
    font-weight: 700;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 700
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;



const post = ({post}) => {
    const url = post.picture ? post.picture : 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-450x255.png';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="post" style={{height: 350, marginTop: 10}} />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 15)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default post