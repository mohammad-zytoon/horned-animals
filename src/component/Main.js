import React from 'react';
import HornedBeast from './HornedBeast';
import hornsData from './hornsData.json';
import {CardColumns} from 'react-bootstrap';


class Main extends React.Component {
  render() {
    return (
      <CardColumns>
      <div>
        {hornsData.map(item => {
          return (
            <HornedBeast
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
            />
          )
        })}

      </div>
      </CardColumns>
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