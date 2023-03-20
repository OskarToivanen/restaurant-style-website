import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from '@mui/material'
import Header from '../components/Header'

const ContactPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 4 }}>
        <Container maxWidth='md'>
          <Typography variant='h4' component='h2' gutterBottom align='center'>
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant='h6' component='h3' gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Restaurant Name
                </Typography>
                <Typography variant='body1' gutterBottom>
                  123 Main St, City, State, 12345
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Phone: (555) 555-5555
                </Typography>
                <Typography variant='body1' gutterBottom>
                  Email: info@restaurant.com
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant='h6' component='h3' gutterBottom>
                  Send us a Message
                </Typography>
                <form noValidate autoComplete='off'>
                  <TextField
                    fullWidth
                    label='Name'
                    variant='outlined'
                    margin='normal'
                  />
                  <TextField
                    fullWidth
                    label='Email'
                    variant='outlined'
                    margin='normal'
                  />
                  <TextField
                    fullWidth
                    label='Message'
                    variant='outlined'
                    margin='normal'
                    multiline
                    rows={4}
                  />
                  <Box sx={{ mt: 2 }}>
                    <Button variant='contained' color='primary' type='submit'>
                      Send Message
                    </Button>
                  </Box>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ContactPage
