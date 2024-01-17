import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Alladi Varshith</Typography>
                <Text variant="h5">Innovative and enthusiastic computer science undergraduate student 
                    with a passion for critical thinking/problem-solving and sharing a love for technology. 
                    Possess experience with 5+ programming languages,particularly skilled in C++, Python, Java, React.js and NodeJs.<br />
                    If you are interested, you can view some of my favorite projects here -
                    <Box component="span" style={{ marginLeft: 15}}>
                        <Link href="https://github.com/varshith-alladi" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>

                <Text variant="h5">
                    Education : 
                    Indian Institue of Information Technology, Sri City
                    B.Tech in CSE - 8.07 CGPA
                </Text>
                <Text variant="h5">
                    Higher Secondary Education - 98.2% - 
                    Narayana Junior College, Kothapet
                </Text>

                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on - 
                    <Box component="span" style={{ marginLeft: 10, marginRight:20 }}>
                        <Link href="https://www.instagram.com/_varshith_2024/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        , or send me an Email 
                        <Link href="mailto:varshith.alladi20@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email style={{marginLeft: 15}} />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;