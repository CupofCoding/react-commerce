import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

// Sets home page and routing
// const App = () => {
//   return <Home/>;
  // return <Cart />
  // return <Register />
  // return <Login />
  // return <Product />
  // return <ProductList/>;
  //   <div>Hello World!</div>;  
// };

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>        
        <Route path="/products/:category" element={<ProductList />}>
          {/* <ProductList /> */}
        </Route>
        <Route path="/product/:id" element={<Product />}>
          {/* <Product /> */}
        </Route>
        <Route path="/cart" element={<Cart />}>
          {/* <Cart /> */}
        </Route>        
        <Route path="/login" element={<Login />}>
          {/* <Login /> */}
        </Route>
        <Route path="/register" element={<Register />}>
          {/* <Register /> */}
        </Route>
      </Routes>    
  );
};

export default App;