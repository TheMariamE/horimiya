import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Episodes from './pages/Episodes.js';
import Author from './pages/Author.js';
import Contact from './pages/Contact.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/episodes" component={Episodes} />
      <Route exact path="/author" component={Author} />
      <Route exact path="/contact" component={Contact} />
    </div>
    </Router>
  ); 
}

export default App;
