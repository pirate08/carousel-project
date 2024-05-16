'use client';

import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/api';
import ProductCarousel from '../components/ProductCarousel';

export default function Home() {
  const [hotDeals, setHotDeals] = useState([]);
  const [bestPrice, setBestPrice] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        console.log('Fetched Data:', data);
        setHotDeals(data.data.hot_deals || []);
        setBestPrice(data.data.best_price || []);
        setNewArrivals(data.data.new_arrivals || []);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container mx-auto px-4 py-8 bg-sky-300'>
      {error && <p className='text-red-500'>{error}</p>}

      <ProductCarousel title='Hot Deals' products={hotDeals} />
      <ProductCarousel title='Best Price' products={bestPrice} />
      <ProductCarousel title='New Arrivals' products={newArrivals} />
    </div>
  );
}
