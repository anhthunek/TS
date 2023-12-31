import React, { useState } from 'react';
import Navbar from './components/navbar';


function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home")
  return (
    <div className="App bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
