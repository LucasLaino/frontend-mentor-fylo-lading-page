import Header from './components/Header/header.tsx'
import IntroSection from './components/IntroSection/IntroSection.tsx'
import FyloServices from './components/FyloServices/FyloServices.tsx'
import StayProductiveSection from './components/StayProductiveSection/StayProductiveSection.tsx'
import UserComments from './components/CommentsSection/CommentsSection.tsx'
import GetAccessSection from './components/GetAccessSection/GetAccessSection.tsx'
import Footer from './components/Footer/Footer.tsx'

function App() {

  return (
    <>
      <Header />
      <IntroSection />
      <FyloServices />
      <StayProductiveSection />
      <UserComments />
      <GetAccessSection />
      <Footer />
    </>
  )
}

export default App
