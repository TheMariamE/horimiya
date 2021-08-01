import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import MainBanner from './components/MainBanner';
import Synopsis from './components/Synopsis';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Synopsis />
      <Gallery />
    </>
  );
}

export default App;
