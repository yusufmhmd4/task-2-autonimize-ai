import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import './App.css';
import ProductItem from "./components/ProductItem";
import ProductItemDetails from "./components/ProductItemDetails"

const App = () => (
  <div className="app-container">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<ProductItemDetails/>}/>
      </Routes>
    </Router>
  </div>
)


export default App
