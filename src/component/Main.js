import React from 'react';
import HornedBeast from './HornedBeast';
import { CardColumns } from 'react-bootstrap';
import Formbos from './Form'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredArr: this.props.hornsData
    }
  }
  filteredHorns = (value) => {
    let result = [];
    if (value !== 'all') {
      result = this.props.hornsData.filter((item) => {
        if (item.horns == value) 
          return item;
        
      })
    } else {

      result = this.props.hornsData;
    }
    this.setState({
      filteredArr: result,
    })
  }
  render() {
    return (
      <div>
      <Formbos
      filteredHorns={this.filteredHorns}
  />
      <CardColumns>
        
          {this.state.filteredArr.map((item,index)=> {
            return (
              <HornedBeast
              key={index}
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
              />
            )
          })}

       
      </CardColumns>
      </div>
    )
  }
}
export default Main;

// {/* <HornedBeast title={'UniWhal'}  />

//              <HornedBeast  imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' } alt={'jungle '} />
//              <h3>
//              <HornedBeast descreption={'A unicorn and a narwhal nuzzling their horns'} />
//            </h3> 
//            <h2>
//               <HornedBeast title={'Rhino Family'}  />
//              </h2> 
//             <HornedBeast  imageUrl={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80' } alt={'cuteee'}/>
//              <h3>
//              <HornedBeast descreption={'Mother (or father) rhino with two babies'} />
//            </h3>  */}