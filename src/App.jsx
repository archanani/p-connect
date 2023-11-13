import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import {slides} from "./data/carouselData.json"

function App() {
  

  return (
      <div className='app'>
        <Header/>
        <Carousel data={slides}/>
        <Footer/>
      </div>
    
  )
}

export default App
