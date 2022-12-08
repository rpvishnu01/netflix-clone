import React from 'react'
import NavBar from './Components/navBar/NavBar'
import "./App.css"
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/Rowpost';
import {originals,action,romantic,horrer,comedy,treanding,doc} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/> 
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action'  isSmall />
      <Rowpost url={romantic} title='romantic'  isSmall />
      <Rowpost url={horrer} title='horrer'  isSmall />
      <Rowpost url={comedy} title='comedy'  isSmall />
      <Rowpost url={treanding} title='treanding'  isSmall />
      <Rowpost url={doc} title='Documentaries'  isSmall />
    </div>
  );
}

export default App;
