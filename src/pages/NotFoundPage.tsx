import { Container, Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth='sm'>
          <Typography variant='h4' component='h2' gutterBottom align='center'>
            404 - Page Not Found
          </Typography>
          <Typography variant='body1' gutterBottom align='center'>
            The page you are looking for doesn't exist or has been moved.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button component={Link} to='/' variant='contained' color='primary'>
              Go to Home
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default NotFoundPage
