import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
export const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
       <div className='mt-10' > <Footer/></div>
    </div>
  )
}
