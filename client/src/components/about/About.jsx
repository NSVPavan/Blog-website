
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
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Text variant="h5">Welcome to our blogging platform, a space where you can share your thoughts, insights, and passions with the world! Whether you’re into sports, movies, tech, or music, our platform allows you to express yourself through engaging blogs..
                    <p></p>
                    <div>
                    With a seamless and user-friendly interface, you can:
                    </div>
                    <br />
                     Create and publish blogs in different categories.
                    <br />
                    Engage with the community through comments.
                    <br />
                    Edit or delete your own blogs as needed.
                    <br />
                </Text>
                <Text variant="h5">
                Our goal is to build a vibrant and interactive community where ideas and discussions thrive. Join us and be a part of the conversation!
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;
