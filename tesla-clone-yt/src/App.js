import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter  as Router ,Route ,Routes} from 'react-router-dom'; 

function App() {

  const [ismenuopen,setismenuopen] = useState(false);

  return (
    <Router>
         <div className="App">
         <Header ismenuopen = {ismenuopen}  setismenuopen = {setismenuopen} />
    </div>
    </Router>
    
  );
}

export default App;
