<<<<<<< HEAD
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";

=======
// run npm i express
// run npm express mongoose dotenv nodemon
// dotenv for websecurity to avoid other users from charging the stripe API
// run npm install react-router-dom or npm install react-router-dom@6
// run npm install react-redux
// run npm install styled-components
// run npm install @mui/icons-material
// run npm install @mui/material

import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
>>>>>>> 89802d6418ebb3e911be0a5b0d8436dfa3b09e12

const App = () => {
<<<<<<< HEAD
  return <Home/>; 
  // return <Cart />
  // return <Register />
  // return <Login />
  // return <Product />
  // return <ProductList/>;
  // return (
    
  // (<Router>
  //   <div>
  //     <Routes>
  //       <Route path='./pages/Home' element={<Home/>} />
  //       <Route path='./pages/Product"' element={<Product />} />
  //       <Route path='./pages/ProductList' element={<ProductList/>} />
  //       <Route path='./pages/Register' element={<Register />} />
  //       <Route path='./pages/Login' element={<Login />} />
  //       <Route path='./pages/Cart' element={<Cart />} />
  //     </Routes>
  //   </div>
  // </Router>
  // );  
=======
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
           <Product />
         </Route>
         <Route path="/cart">
           <Cart />
         </Route>
         <Route path="/success">
           <Success />
         </Route>
         <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
         <Route path="/register">
           {user ? <Redirect to="/" /> : <Register />}
         </Route>
       </Switch>
     </Router>
  );
>>>>>>> 89802d6418ebb3e911be0a5b0d8436dfa3b09e12
};

export default App;


// //  ---------------------------------------------------

// // import Product from "./pages/Product";
// import Home from "./pages/Home";
// // import ProductList from "./pages/ProductList";
// // import Register from "./pages/Register";
// // import Login from "./pages/Login";
// // import Cart from "./pages/Cart";

// // Sets home page and routing
// const App = () => {
//   // return <Cart />
//   // return <Login />
//   // return <Product />
//   // return <ProductList/>;
//   return <Home/>;
//   //   <div>Hello World!</div>;
  
// };

// export default App;