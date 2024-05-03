import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/create" element= {<Create/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
