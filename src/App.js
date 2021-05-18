import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import hornsData from './component/hornsData.json';




class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      hornsData: hornsData,
    }
  }
  render() {
    return (
      <div>
      <Header/>
      <Main hornsData={this.state.hornsData}/>
      <Footer/>
       </div>
    )


  }
}
export default App;