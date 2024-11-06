// import React from 'react'
// import './item.css'
// import { Link } from 'react-router-dom'

// const item = (props) => {
//   return (
//     <div className='item'>
//         <Link to={`/product/${props.id}`}><img src={props.image} alt=''/></Link>
//         <p>{props.name}</p>
//         <div className="item-prices">
//             <div className="item-prices-new">
//                 ${props.new_price}
//             </div>
//             <div className="item-price-old">
//                 ${props.old_price}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default item
import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {  // Capitalize the component name
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onclick={window.scrollTo(0,0)} src={props.image} alt={props.name} /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-prices-new">
                ${props.new_price}
            </div>
            <div className="item-prices-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  );
};

export default Item;  // Capitalize the component name


