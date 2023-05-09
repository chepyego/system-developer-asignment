import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Users from './components/Users'
import NewUser from './components/NewUser';
import Home from './components/Home';

import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new_user' element={<NewUser/>}/>
          <Route path='/users' element={<Users/>}/>


        </Routes>
      </main>
    </Router>
  );
}

export default App;
