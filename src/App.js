import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import About from './About.js';
import Episodes from './Episodes.js';
import Author from './Author.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


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
