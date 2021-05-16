import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
    render(){
        return(
            <div>
              
              <HornedBeast title={'The First Animal'}  />
             
             <HornedBeast  imageUrl={'https://a-z-animals.com/media/2021/01/mammals-400x300.jpg' } alt={'jungle '} />
             <h3>
             <HornedBeast descreption={'animals'} />
           </h3> 
           <h2>
              <HornedBeast title={'The Second Animal'}  />
             </h2> 
            <HornedBeast  imageUrl={'https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg' } alt={'cuteee'}/>
             <h3>
             <HornedBeast descreption={'animals'} />
           </h3> 
           </div> 
        )
    }
}
export default Main;