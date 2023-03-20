import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
} from '@mui/material'
import Header from '../components/Header'

interface GalleryImage {
  id: number
  title: string
  imageUrl: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Image 1',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    id: 2,
    title: 'Image 2',
    imageUrl: '/path/to/image2.jpg',
  },
  // ... other images ...
]

const GalleryPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 4 }}>
        <Container maxWidth='md'>
          <Typography variant='h4' component='h2' gutterBottom align='center'>
            Gallery
          </Typography>
          <Grid container spacing={4}>
            {galleryImages.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Card>
                  <CardMedia
                    component='img'
                    height='240'
                    image={image.imageUrl}
                    alt={image.title}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default GalleryPage
