import './App.css';
import Mytext from './components/Mytext';
// import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm.js';

function App() {
  return (
    <>

     <Navbar title = "hi"/>

     {/* <div className="container my-5">
     <TextForm inside = "hi"/>
     </div> */}

     <div className="container my-5">
     <Mytext heading="My Text"/>
     </div>

     {/* <div className="container my-5">
     <About/>
     </div> */}
     
    </>
  );
}

export default App;
