import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/static/header/header';

function App() {

  const [header , setHeader] = useState({ title: "Trillo", links: [{ id: 0, label: "New Trillo" }, { id: 1, label: "my Trillos" } , { id: 2, label: "Profile" } , {id : 3 , label :"About me!"}] })

  useEffect(() => {
    console.log("Render")
  })

  return (
    <div className="App" onScroll={() => {console.log("Scrolling?")}}>
      <Header title="my header" links={header.links} />
      
    </div>
  );
}

export default App;
