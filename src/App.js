import './App.css';
import Navbar from './component/navbar';
import News from './component/News';
import {Routes, Route} from "react-router-dom";
function App() {
  let pageSize=15;
  return (
    <div className="App"> 
      <Navbar />
        <Routes>
          <Route exact  path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route exact  path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact  path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact  path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact  path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact  path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          <Route exact  path="/" element={<News key="general" pageSize={pageSize} country="in" category="general"/>}/>
        </Routes>
    </div>
  );
}

export default App;
