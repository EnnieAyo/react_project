import React from 'react'
import Header from './components/Header' ;
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  
  let info = {
    name: 'John',
    age: 23,
    gender:'Male',
    dob: new Date().toLocaleDateString()
  }
  return (
    <div className="App">
      <Header/>
      <Content/>
      {/* <h1>Name : {info.name.toUpperCase()}</h1>
      <h1>Age : {info.age}</h1>
      <h1>Gender : {info.gender}</h1>
      <h1>DOB : {info.dob}</h1> */}
      <Footer/>

    </div>
  );
}

export default App;
