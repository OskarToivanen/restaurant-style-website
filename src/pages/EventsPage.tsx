import {
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material'
import Header from '../components/Header'
import EventCard from '../components/EventCard'

interface Event {
  id: number
  title: string
  description: string
  date: string
  imageUrl: string
}

const events: Event[] = [
  {
    id: 1,
    title: 'Wine Tasting Night',
    description: 'Join us for a night of great wines and delicious food.',
    date: '2023-04-01',
    imageUrl: '/path/to/wine-tasting.jpg',
  },
  {
    id: 2,
    title: 'Live Music Fridays',
    description: 'Enjoy live music from local artists every Friday night.',
    date: '2023-04-07',
    imageUrl: '/path/to/live-music.jpg',
  },
  // ... other events ...
]

const EventsPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 4 }}>
        <Container maxWidth='md'>
          <Typography variant='h4' component='h2' gutterBottom align='center'>
            Upcoming Events
          </Typography>
          <Grid container spacing={4}>
            {events.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event.id}>
                <EventCard event={event} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default EventsPage
