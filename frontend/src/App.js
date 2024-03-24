import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './components/Navbar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Women from './components/Women';
import Kids from './components/Kids';
import Men from './components/Men';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products';
import Summary from './components/admin/Summary';
import Orders from './components/admin/Orders';
import Users from './components/admin/Users';
import Favorite from './components/Favorite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />}/> 
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/admin" element={<Dashboard />}> 
            <Route path="products" element={<Products />}/> 
            <Route path="summary" element={<Summary />}/> 
            <Route path='orders' element={<Orders />}/>
            <Route path='users' element={<Users />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
