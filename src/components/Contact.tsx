import { Box, Container, Typography, TextField, Button } from '@mui/material'

const Contact: React.FC = () => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth='sm'>
        <Typography variant='h4' component='h2' gutterBottom align='center'>
          Contact Us
        </Typography>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField label='Name' variant='outlined' />
          <TextField label='Email' variant='outlined' />
          <TextField label='Phone' variant='outlined' />
          <TextField label='Message' multiline rows={4} variant='outlined' />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant='contained' color='primary' type='submit'>
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
