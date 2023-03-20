import { Container, Box, Typography, Paper, Grid } from '@mui/material'
import Header from '../components/Header'

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 4 }}>
        <Container maxWidth='md'>
          <Typography variant='h4' component='h2' gutterBottom align='center'>
            About Us
          </Typography>
          <Paper elevation={2}>
            <Box sx={{ p: 4 }}>
              <Typography variant='body1' gutterBottom>
                Welcome to our restaurant! We have been serving delicious food
                to our customers since 2000. Our chefs use only the finest
                ingredients to create mouth-watering dishes that will keep you
                coming back for more.
              </Typography>
              <Typography variant='body1' gutterBottom>
                Our restaurant is designed to provide a comfortable and
                welcoming atmosphere where you can enjoy your meal with friends
                and family. We pride ourselves on our excellent customer service
                and are committed to ensuring that every guest leaves with a
                smile on their face.
              </Typography>
              <Typography variant='body1' gutterBottom>
                Whether you're in the mood for a light salad or a hearty steak,
                our diverse menu is sure to have something for everyone. We look
                forward to serving you soon!
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  )
}

export default AboutPage
