// Import React
import { Card, CardContent, Typography } from '@mui/material'

interface MenuItemProps {
  name: string
  description: string
  price: number
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h3'>
          {name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='h6' component='p' sx={{ marginTop: 1 }}>
          ${price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MenuItem
