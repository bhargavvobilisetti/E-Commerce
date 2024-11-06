import React,{useContext} from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.jsx';
//here we are used the to products to cart page separtedly..
const Product = () => {
  const {all_product}=useContext(ShopContext);
  console.log(all_product);
  const {productId}=useParams();
  const product =all_product.find((e)=> e.id === Number(productId));
  
  return (
    <div> 
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
// const Product = () => {
//   const { all_product } = useContext(ShopContext);
//   const { productId } = useParams();
//   const product = all_product.find((e) => e.id === Number(productId));

//   console.log('Product ID:', productId);
//   console.log('Found Product:', product);

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div>
//       <Breadcrum product={product} />
//       <img src={product.image} alt={product.name} />
//     </div>
//   );
// };

export default Product