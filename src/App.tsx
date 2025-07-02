import './App.css'
import Header from './components/Header/header.tsx'
import IntroSection from './components/IntroSection/IntroSection.tsx'
import FyloServices from './components/FyloServices/FyloServices.tsx'
import StayProductiveSection from './components/StayProductiveSection/StayProductiveSection.tsx'
import UserComments from './components/CommentsSection/CommentsSection.tsx'

function App() {

  return (
    <>
      <Header />
      <IntroSection />
      <FyloServices />
      <StayProductiveSection />
      <UserComments />
    </>
  )
}

export default App
