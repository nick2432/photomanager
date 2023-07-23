import logo from './logo.svg';
import './App.css';
import Search from './component/Search';
import Result from './component/Result'; 
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [image,setimage] = useState('All');
  return (
    <div className="App">
      <div className='Homepage'>
       <p className='txt'>Homepage</p>
       <div style={{display:'flex',gap:'10px'}}>
       <p className='txt'>Login</p>
       <p className='txt'>Creat Account</p>
       </div>
      </div>
      <BrowserRouter>
       <Routes>
            <Route path='/' element={<Search  setimage={setimage}/>}/>
            <Route path='/result' element={<Result image={image} setimage={setimage}/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
