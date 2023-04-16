import React from 'react'
import Ordering from './Sections/Ordering/Ordering'
import Main from './Sections/Main/Main'
import Brands from './Sections/Brands/Brands'
import Stock from './Sections/Stock/Stock'
import Products from './Sections/Products/Products'
import Info from './Sections/Info/Info'
import Popular from './Sections/Popular/Popular'
import Cloth from './Sections/Cloth/Cloth'

const HomePage = () => {
  return (
    <React.Fragment>
      <Ordering/>
      <Main/>
      <Brands/>
      <Stock/>
      <Products/>
      <Info/>
      <Popular/>
      <Cloth/>
    </React.Fragment>
  )
}

export default HomePage
