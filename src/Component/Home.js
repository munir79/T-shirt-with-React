import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowTshirt from './ShowTshirt';
import '../Style/one.css'

const Home = () => {
    const tshrit=useLoaderData();
    return (
        <div className='orderContainer'>
           
           <div className='ts'>
           {
                tshrit.map(tshirt=><ShowTshirt key={tshirt.id} tshirt={tshirt}></ShowTshirt>)
            }
           </div>
           <div>
              <h3> this is order summary  </h3>
           </div>
        </div>
    );
};

export default Home;