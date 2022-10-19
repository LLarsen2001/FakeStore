import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Containers/Header'
import ProductListing from './Containers/ProductListing';
import ProductDetail from './Containers/ProductDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:prodectId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
