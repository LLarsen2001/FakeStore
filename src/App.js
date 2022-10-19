import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Containers/Header'
import ProductListing from "./Containers/ProductListing.js";
import ProductDetail from "./Containers/ProductDetail.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:prodectId" element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
