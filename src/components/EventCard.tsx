import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material'

interface Event {
  id: number
  title: string
  date: string
  description: string
  imageUrl: string
}

interface EventCardProps {
  event: Event
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card>
      <CardMedia
        component='img'
        height='200'
        image={event.imageUrl}
        alt={event.title}
      />
      <CardContent>
        <Typography variant='h5' component='h2'>
          {event.title}
        </Typography>
        <Typography color='textSecondary' gutterBottom>
          {event.date}
        </Typography>
        <Typography variant='body2' component='p'>
          {event.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default EventCard
