import './App.css';
import Card from './components/Card';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <div><Navbar/></div>
      <div><Card/></div>
      <div><FAQ/></div>
    </div>
  );
}

export default App;
