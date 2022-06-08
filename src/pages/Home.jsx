// type rfc after installing https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets; Id: dsznajder.es7-react-js-snippets

// import React from 'react'

// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// type rafce for arrow function with export

import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from "../components/Categories"
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
      <Slider/>
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home