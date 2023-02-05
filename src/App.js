import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import React, { usestate } from 'react';
import Alert from './components/Alert';
import About from './components/About';
// import PropTypes from 'prop-types'
import {

  BrowserRouter as Router,
  Switch,

  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //checking whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const tooglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = ' #042743';
      showalert("Dark Mode has been enabled", "success");
    }
    else {

      setmode('light');
      document.body.style.backgroundColor = '#fff';
      showalert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        {/* <Navbar />  //this will be used only if the default props are set and the values are not passed */}
        {/* <Navbar title="Textutils" abtt="About Textutils"/>  */}
        <Navbar title="Textutils" mode={mode} tooglemode={tooglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}> //exact is used whenever you need to match exactly as react uses partial match

            </Route>
            {/* <Route path="/" component={App}></Route> */}
            {/* <Route exact path="/" component = {<Textform showalert= {showalert}heading="Enter the text to analyze" mode={mode} />}> */}
            <Route exact path='/' element={<Textform showalert={showalert} heading="Enter the text to analyze" mode={mode} />}></Route>
            {/* </Route> */}
          </Routes>
          {/* <Textform showalert= {showalert}heading="Enter the text to analyze" mode={mode} /> */}
          {/* <About></About> */}

        </div>
      </Router>
    </>
  );
}

export default App;


