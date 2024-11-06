import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      HOME<img src={arrow_icon} alt=""/>SHOP<img src={arrow_icon} alt=""/>{product.category}<img src={arrow_icon}alt=""/>{product.name}
    
    </div>
  )
}
export default Breadcrum
// import React from 'react';
// import './Breadcrum.css';
// import arrow_icon from '../Assets/breadcrum_arrow.png';

// const Breadcrum = (props) => {
//   const { product } = props;

//   if (!product) {
//     return (
//       <div className='breadcrum'>
//         hsHOME<img src={arrow_icon} alt="arrow icon" />SHOP<img src={arrow_icon} alt="arrow icon" />Unknown Category
//       </div>
//     );
//   }

//   return (
//     <div className='breadcrum'>
//       hsHOME
//       <img src={arrow_icon} alt="arrow icon" />
//       SHOP
//       <img src={arrow_icon} alt="arrow icon" />
//       {product.category || 'Uncategorized'}
//       <img src={arrow_icon} alt="arrow icon" />
//     </div>
//   );
// };

// export default Breadcrum;
