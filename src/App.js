import './App.css';
import { PublicRoute } from './Page/Routes/PublicRoute';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Page/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
        <Routes>
        
          {
          PublicRoute.map(({path, Component}, index)=>(
            <Route key={index} path={path} element={<Component/>} />
            ))
          }
        </Routes>
    </div>
  );
}

export default App;
