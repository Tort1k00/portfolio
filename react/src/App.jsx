import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App