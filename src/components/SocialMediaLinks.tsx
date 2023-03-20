import { Box, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const SocialMediaLinks: React.FC = () => {
  return (
    <Box>
      <IconButton
        color='primary'
        href='https://www.facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Facebook'
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        color='primary'
        href='https://www.twitter.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter'
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        color='primary'
        href='https://www.instagram.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        color='primary'
        href='https://www.linkedin.com'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
      >
        <LinkedInIcon />
      </IconButton>
    </Box>
  )
}

export default SocialMediaLinks
