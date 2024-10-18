import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import {Outlet} from 'react-router-dom'
// ye outlet kay karega ki layout ko as a base consider karega and & header footer ko same rakhega and bichme dymically chije change karte rahega
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
{/* //yaha ham kay chahate he ki dymically chije pass karna chahate he like home ,about pe click kiya to about aayega etc
//aagar ham outlet footer ke niche likhte then uupar header and footer aajate and niche ham outlet dymically hange kar sakte 
  */}
    <Footer/>

    </>
  )
}

export default Layout