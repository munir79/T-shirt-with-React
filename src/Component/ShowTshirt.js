import React from 'react';
import '../Style/two.css'
const ShowTshirt = (props) => {
    console.log(props);
    const {price,picture,name,gender}=props.tshirt;
    return (
        <div className='full'>
           <div className='pic'>
           <img src={picture} alt="" />
           </div>
        <div>
                    
        <h4> Name: {name}</h4>
            <h4>  price: {price} </h4>
            <button> Buy Now </button>
        </div>
        
        </div>
    );
};

export default ShowTshirt;