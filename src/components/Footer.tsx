import SocialMediaLinks from './SocialMediaLinks'
import { Box, Container, Typography, Grid, Link } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f7', mt: 4, pt: 4, pb: 4 }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Restaurant Name
            </Typography>
            <Typography variant='body2'>
              1234 Street Address
              <br />
              City, State ZIP
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Contact
            </Typography>
            <Typography variant='body2'>
              Phone: (555) 123-4567
              <br />
              Email: info@restaurant.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h6' gutterBottom>
              Links
            </Typography>
            <Link href='/' color='inherit'>
              Home
            </Link>
            <br />
            <Link href='/menu' color='inherit'>
              Menu
            </Link>
            <br />
            <Link href='/events' color='inherit'>
              Events
            </Link>
            <br />
            <Link href='/about' color='inherit'>
              About
            </Link>
            <br />
            <Link href='/contact' color='inherit'>
              Contact
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant='body2' color='text.secondary' align='center'>
            © {new Date().getFullYear()} Restaurant Name. All rights reserved.
          </Typography>
          <SocialMediaLinks />
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
