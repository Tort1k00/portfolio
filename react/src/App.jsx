import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MyProjects from './pages/MyProjects'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='about' element={<AboutPage />} />
        <Route path='myProjects' element={<MyProjects />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App