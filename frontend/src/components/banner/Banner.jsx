
import { styled, Box, Typography } from '@mui/material';

//  background: url(https://thumbor.autonomous.ai/E7jVFjgUH2c1VMl4JylbwadhdR4=/1600x900/smart/https://storage.googleapis.com/s3-autonomous-upgrade-3/static/upload/images/new_post/inspiration-and-tips-for-your-ultimate-desk-gaming-pc-setup-645.jpg) center/55% repeat-x #000;

const Image = styled(Box)`
    width: 100%;
    
    background-color: #f08080;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 200px;
    color: #000;
    text-shadow: 4px 4px #add8e6;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #f08080;
    color: #ffff;
    text-decoration: none;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Created By Varshith Alladi - For OneShot.ai</SubHeading>
        </Image>
    )
}

export default Banner;