import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from '@mui/material'

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  imageUrl: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth='md'>
        <Typography variant='h4' component='h2' gutterBottom align='center'>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
              <Card>
                <CardMedia
                  component='img'
                  height='200'
                  image={testimonial.imageUrl}
                  alt={testimonial.name}
                />
                <CardContent>
                  <Typography variant='body1' gutterBottom>
                    {testimonial.quote}
                  </Typography>
                  <Typography variant='subtitle1' component='p'>
                    {testimonial.name}
                  </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    {testimonial.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonials
