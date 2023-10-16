import './App.css';
import Navbar from './component/navbar';
import News from './component/News';
import state from 'react'
import {Routes, Route} from "react-router-dom";

function App() {
  let pageSize=15;
  //const apiKey =process.env.REACT_APP_NEWS_API;
  const apiKey ="3069fed3f959421aa13d57bb0e642321";
 

  return (
    <div className="App"> 
      <Navbar />      
        <Routes>
          <Route  exact   path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
          <Route  exact   path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route  exact   path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route  exact   path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route  exact   path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route  exact   path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          <Route  exact   path="/" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
        </Routes>
    </div>
  );
}
 
export default App;
