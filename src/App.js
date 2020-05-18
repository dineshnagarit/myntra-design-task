import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import BrandInFocusViewPort from './components/BrandInFocusViewPort/BrandInFocusViewPort'


library.add(fas)

class App extends Component {
  render() {
    return (
     <div>
      
    
       <Header/>
       <Banner/> 

      <div className="App container-fluid">
      
        <BrandInFocusViewPort/>
      
       </div>
      </div> 
    );
  }
}

export default App;
