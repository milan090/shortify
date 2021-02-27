import { Navbar } from 'components/navbar.component'
import { HeroSection } from 'layouts/hero-section.layout'
import { ShrinkUrls } from 'layouts/shrink-urls.layout'

const HomePage = () => (
  <main>
    <Navbar />
    <HeroSection />
    <div className="bg-gray-100 flex justify-center mt-16  pb-10">
      <div className="flex justify-between items-center w-11/12 max-w-6xl">
        <ShrinkUrls />
      </div>
    </div>
  </main>
)

export default HomePage;
