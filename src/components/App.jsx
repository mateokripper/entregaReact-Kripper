import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import ItemDetailConatiner  from './ItemDetailContainer'
import Cart from './Cart'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/producto/:id' element={<ItemDetailConatiner/>}/>
      <Route path='/carrito' element={<Cart/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App