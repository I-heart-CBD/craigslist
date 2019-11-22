import React from 'react';
import logo from './logo.svg';
import './App.css';
import Listing from './components/Listing';
import NavBar from './components/NavBar';
import listings from './json.json'




export default class App extends React.Component {

  constructor(props){
    super(props);
  }
  
  
  displayListings = () => {
    return listings.map((oneListing) => {
      return (
        <Listing
        {...this.props}
          theListing = {oneListing}
        />
      )
    })
  }
  render(){
    return (
      <div className="App">
      <NavBar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <div className="row">
              {this.displayListings()}
            </div>
          </div>
          <div className="col-4 map-image">
            <img src="../MAP-copy.png"/>
          </div>
        </div>
      </div>
  
      </div>
    );
  }

}

