import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Header: React.FC = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1 }}>
            Restaurant Name
          </Typography>
          <Button color='inherit' href='/'>
            Home
          </Button>
          <Button color='inherit' href='/about'>
            About
          </Button>
          <Button color='inherit' href='/menu'>
            Menu
          </Button>
          <Button color='inherit' href='/events'>
            Events
          </Button>
          <Button color='inherit' href='/gallery'>
            Gallery
          </Button>
          <Button color='inherit' href='/contact'>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
