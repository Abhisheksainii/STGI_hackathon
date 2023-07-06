import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './components/firstPage';
import Realtime from './components/realtime';
import Contact from './components/contact';
import Signup from './components/signup';
import Login from './components/Login';
import Sign from './components/Signupp';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Sign />} />
          <Route path="/realtime" element={<Realtime />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Home" element={<FirstPage />}> </Route>
          {/* <Route exact path="/Signup" element={<Signup />}> </Route> */}
          <Route exact path="/Login" element={<Login />}/>


        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
