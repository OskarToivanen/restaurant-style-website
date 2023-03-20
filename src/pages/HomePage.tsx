import React from 'react'
import LandingSection from '../components/LandingSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import EventCard from '../components/EventCard'

const HomePage: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Bruschetta',
      description: 'Toasted bread topped with tomatoes, garlic, and basil.',
      price: 7.95,
    },
    {
      id: 2,
      name: 'Mozzarella Sticks',
      description: 'Crispy breaded mozzarella served with marinara sauce.',
      price: 8.95,
    },
    {
      id: 3,
      name: 'Buffalo Wings',
      description:
        'Spicy buffalo wings served with celery and blue cheese dressing.',
      price: 10.95,
    },
    {
      id: 4,
      name: 'Grilled Salmon',
      description:
        'Grilled salmon fillet served with a lemon butter sauce, steamed vegetables, and mashed potatoes.',
      price: 21.95,
    },
    {
      id: 5,
      name: 'Chicken Alfredo',
      description:
        'Grilled chicken breast served over fettuccine pasta, tossed in a creamy Alfredo sauce.',
      price: 18.95,
    },
    {
      id: 6,
      name: 'Vegetarian Stir Fry',
      description:
        'Seasonal vegetables stir-fried in a savory sauce, served over steamed jasmine rice.',
      price: 16.95,
    },
    {
      id: 7,
      name: 'Chocolate Lava Cake',
      description:
        'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
      price: 7.95,
    },
    {
      id: 8,
      name: 'Tiramisu',
      description:
        'Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cheese.',
      price: 8.95,
    },
    {
      id: 9,
      name: 'Apple Pie',
      description:
        'Homemade apple pie served warm with a scoop of vanilla ice cream.',
      price: 6.95,
    },
  ]

  interface Testimonial {
    id: number
    name: string
    role: string
    quote: string
    imageUrl: string
  }

  // Add this array of testimonials to your HomePage.tsx file
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Customer',
      quote:
        'The food here is absolutely amazing! I highly recommend this restaurant.',
      imageUrl: '/path/to/john-doe.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Food Blogger',
      quote:
        'The ambiance and service are top-notch. A must-visit spot for foodies!',
      imageUrl: '/path/to/jane-smith.jpg',
    },
    {
      id: 2,
      name: 'Donald Duck',
      role: 'Food Critic',
      quote:
        'Wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.',
      imageUrl: '/path/to/jane-smith.jpg',
    },
  ]

  const galleryImages = [
    {
      id: 1,
      imageUrl: '/path/to/image1.jpg',
      alt: 'Image 1 description',
    },
    {
      id: 2,
      imageUrl: '/path/to/image2.jpg',
      alt: 'Image 2 description',
    },
    // ... other images ...
  ]

  return (
    <div>
      <Header />

      <main>
        <section>
          <LandingSection />
        </section>

        <section>
          <Menu title='Main Courses' items={menuItems} />
        </section>

        <section>
          <Testimonials testimonials={testimonials} />
        </section>

        <section>
          <Gallery images={galleryImages} />
        </section>

        {/* Add contact form section */}
        <section>
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
