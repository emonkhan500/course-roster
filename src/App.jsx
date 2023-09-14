
import './App.css'
import Header from './components/Header/Header'
import Cart from './components/cart/Cart'
import Course from './components/course/Course'
import Courses from './components/courses/Courses'

function App() {
  

  return (
    <>
     
      
      
      <Header></Header>

      <div className='md:flex container mx-auto'>
      <Courses></Courses>
      <Cart></Cart>
     
      </div>
    </>
  )
}

export default App
