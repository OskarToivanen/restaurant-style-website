import { Container, Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import hero from '../images/hero.jpg'

const LandingSection: React.FC = () => {
  const navigate = useNavigate()

  const handleButtonClick = (path: string) => {
    navigate(path)
  }

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth='sm'>
        <Typography
          variant='h2'
          component='h1'
          gutterBottom
          align='center'
          color='common.white'
        >
          Welcome to Our Restaurant
        </Typography>
        <Typography
          variant='h5'
          component='p'
          gutterBottom
          align='center'
          color='common.white'
        >
          Experience delicious cuisine and a warm, welcoming atmosphere.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <Button
            variant='contained'
            onClick={() => handleButtonClick('/menu')}
          >
            View Menu
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default LandingSection
