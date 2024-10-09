import { useState } from 'react'
import './App.css'
import Product from './Product.jsx'
import Container from './Container.jsx'

function App() {

  const productName = "Refrigerator"
  let price = 300 /*Pay attention to line 19, Just for demonstration; others are OOP(Object-Oriented)*/

  return (


    <div>
      <Product productName="Shoe" price={50} />
      <hr />
      <Product productName="Phone" price={600} />
      <hr />
      <Product productName={productName} price={price} />

      <Container>
        <Product productName="Headphone" price={44} />
      </Container>

    </div>

  )
}

export default App
