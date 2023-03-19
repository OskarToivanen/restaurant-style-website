import Header from '../components/Header'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  return (
    <div>
      <Header />

      <main>
        <section>
          <h1>About Our Restaurant</h1>
          <p>
            Our restaurant's history, mission, and team information goes here.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage
