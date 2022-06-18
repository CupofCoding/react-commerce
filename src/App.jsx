// run npm i express
// run npm express mongoose dotenv nodemon
// dotenv for websecurity to avoid other users from charging the stripe API
// run npm install react-router-dom or npm install react-router-dom@6
// run npm install react-redux
// run npm install styled-components
// run npm install @mui/icons-material
// run npm install @mui/material

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";

import { BrowserRouter,
  Routes, 
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {
  // return <Home/>; 
  // return <Cart />;
  // return <Register />;
  // return <Login />;
  // return <Product />;
  // return <ProductList/>;    


// const Home = () => {
return (

<BrowserRouter>
      <Routes>
        {/* <Switch> */}
        <Route path='/' element={<Home/>} />
        <Route path='./pages/Product"' element={<Product />} />
        <Route path='./pages/ProductList' element={<ProductList/>} />
        <Route path='./pages/Register' element={<Register />} />
        <Route path='./pages/Login' element={<Login />} />
        <Route path='./pages/Cart' element={<Cart />} />
        {/* <Redirect to="/"> */}
        {/* </Switch> */}
      </Routes>
    </BrowserRouter>
)

//     <>
//       <Router>
//         <Switch>
//           <Route path='./pages/Home' element={<Home/>} />
//           <Route path='./pages/Product"' element={<Product />} />
//           <Route path='./pages/ProductList' element={<ProductList/>} />
//           <Route path='./pages/Register' element={<Register />} />
//           <Route path='./pages/Login' element={<Login />} />
//           <Route path='./pages/Cart' element={<Cart />} />
//           <Redirect to="/">
//         </Switch>
//       </Router>
//     </>
//     );  
};

export default App;