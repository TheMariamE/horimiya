import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import MainBanner from './components/MainBanner';
import Synopsis from './components/Synopsis';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Synopsis />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
