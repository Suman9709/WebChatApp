import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import MainContainer from './Components/MainContainer';
import Welcome from './Components/Welcome';
import ChatArea from './Components/ChatArea';
import CreateGroup from './Components/CreateGroup';
// import Users from './Components/Users';
        
// import CreateGroup from './Components/CreateGroup'; 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='app' element={<MainContainer />}>
          <Route path='welcome' element={<Welcome/>}></Route>
          <Route path='chatarea' element={<ChatArea/>}></Route>
          {/* <Route path='user' element={<Users />}></Route> */}
          <Route path='creategroup' element={<CreateGroup/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
