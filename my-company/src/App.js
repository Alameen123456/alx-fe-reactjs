 import logo from './logo.svg';
 import './App.css';
 import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
 import Home from './Home';
 import About from './About';
 import Services from './Services';
import contact from './Contact';
import Navbar from './Navbar'

 function App() {
  return (
    <Router>
      <Navbar />
      <div style={{padding: '20px'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/" element={<Contact/>} />          
        </Routes>
      </div>
    </Router>
 //    <Router>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
      
//     </div>
   );
 }

export default App;
