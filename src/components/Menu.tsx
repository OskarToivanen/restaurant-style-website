import { Container, Box, Typography, Grid, Paper } from '@mui/material'
import MenuItem from './MenuItem'

interface MenuSectionProps {
  title: string
  items: {
    id: number
    name: string
    description: string
    price: number
  }[]
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Container maxWidth='md'>
        <Typography variant='h4' component='h2' gutterBottom align='center'>
          {title}
        </Typography>
        <Paper elevation={2}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Box sx={{ p: 2 }}>
                  <Typography variant='h6' component='h3' gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant='body2' gutterBottom>
                    {item.description}
                  </Typography>
                  <Typography variant='subtitle1' color='text.secondary'>
                    ${item.price.toFixed(2)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default MenuSection
