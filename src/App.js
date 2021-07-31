import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import MainBanner from './components/MainBanner';
import Synopsis from './components/Synopsis';

function App() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Synopsis />
    </>
  );
}

export default App;
