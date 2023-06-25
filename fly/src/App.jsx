import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Support from './Components/Support/Support'
import Lounge from './Components/Lounge/Lounge'
import Footer from './Components/Footer/Footer'
import Info from './Components/Info/Info'
import Subscribe from './Components/Subscribers/Subscribe'
import Travelers from './Components/Travelers/Travelers'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      <Travelers/>
      <Subscribe/>
      <Footer/> 
    </div>
  )
}

export default App