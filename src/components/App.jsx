import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import ItemListContainer from './ItemListContainer'
import ItemDetailConatiner  from './ItemDetailContainer'
import Cart from './Cart'
import Checkout from './Checkout'
import { CartContextProvider } from '../context/CartContext'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/producto/:id' element={<ItemDetailConatiner/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}></Route>
      </Routes>
      <ToastContainer/>
      </CartContextProvider>
    </BrowserRouter>
    
    </>
  )
}

export default App