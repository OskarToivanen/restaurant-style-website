import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from '@mui/material'

interface GalleryImage {
  id: number
  imageUrl: string
  alt: string
}

// Add this array of gallery images to your GalleryPage.tsx file
interface GalleryProps {
  images: GalleryImage[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Container maxWidth='md'>
        <Typography variant='h4' component='h2' gutterBottom align='center'>
          Gallery
        </Typography>
        <Grid container spacing={4}>
          {images.map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card>
                <CardMedia
                  component='img'
                  height='200'
                  image={image.imageUrl}
                  alt={image.alt}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Gallery
