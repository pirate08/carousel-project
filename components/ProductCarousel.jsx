import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCarousel = ({ title, products }) => {
  return (
    <div className='my-8'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      {products && products.length > 0 ? (
        <Carousel>
          {products.map((product, index) => (
            <div
              key={index}
              className='p-10  bg-black text-white shadow-md rounded-lg'>
              <h3 className='text-xl font-semibold'>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Currency: {product.currency}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductCarousel;
