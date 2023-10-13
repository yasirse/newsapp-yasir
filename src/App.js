import './App.css';
import Navbar from './component/navbar';
import News from './component/News';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <News pageSize={5} country="in" category="science"/>
    </div>
  );
}

export default App;
