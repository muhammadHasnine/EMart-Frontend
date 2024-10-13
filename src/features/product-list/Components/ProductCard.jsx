// const ProductCard = ({product}) => {
  
//   return (
//     <div className="ami group relative">
//       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//         <img
//           alt={product.imageAlt}
//           src={product.imageSrc}
//           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//         />
//       </div>

//       <div className="mt-4 flex justify-between">
//         <div>
//           <h3 className="text-sm text-gray-700">
//             <a href={product.href}>
//               <span aria-hidden="true" className="absolute inset-0" />
//               {product.name}
//             </a>
//           </h3>
//           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//         </div>
//         <p className="text-sm font-medium text-gray-900">{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import PropTypes from 'prop-types'
const ProductCard = ({product}) => {
  const {imageAlt,imageSrc,href,name,color,price} = product;
  return (
    <div className="ami group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageAlt: PropTypes.string,
    imageSrc: PropTypes.string,
    price: PropTypes.string,
    color: PropTypes.string,
    href: PropTypes.string,
    name: PropTypes.string,
   
  })
};

export default ProductCard;