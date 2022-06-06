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

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar/>
    </div>
  )
}

export default Home