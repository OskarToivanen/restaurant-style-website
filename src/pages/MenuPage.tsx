import {
  Container,
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material'
import Header from '../components/Header'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

interface MenuCategory {
  title: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Appetizers',
    items: [
      {
        id: 1,
        name: 'Bruschetta',
        description:
          'Grilled ciabatta, garlic, tomatoes, basil, balsamic glaze.',
        price: 8.95,
        imageUrl: '/path/to/bruschetta.jpg',
      },
    ],
  },
  {
    title: 'Entrees',
    items: [
      {
        id: 2,
        name: 'Grilled Salmon',
        description:
          'Grilled salmon, lemon herb sauce, seasonal vegetables, mashed potatoes.',
        price: 22.95,
        imageUrl: '/path/to/salmon.jpg',
      },
    ],
  },
]

const MenuPage: React.FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ marginTop: 4 }}>
        <Container maxWidth='md'>
          <Typography variant='h4' component='h2' gutterBottom align='center'>
            Menu
          </Typography>
          {menuCategories.map((category) => (
            <Box sx={{ mb: 4 }} key={category.title}>
              <Typography variant='h5' component='h3' gutterBottom>
                {category.title}
              </Typography>
              <Paper>
                <List>
                  {category.items.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemAvatar>
                        <Avatar alt={item.name} src={item.imageUrl} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.name}
                        secondary={item.description}
                      />
                      <Typography variant='body1'>
                        ${item.price.toFixed(2)}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  )
}

export default MenuPage
