import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Register from './Pages/Register'
import TodoPage from './Pages/TodoPage'
import Login from './Pages/Login'
import Privateroute from './components/PrivateRoute.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Register></Register>}></Route>
        <Route element={<Privateroute></Privateroute>}>
          <Route path='/todo' element={<TodoPage></TodoPage>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App