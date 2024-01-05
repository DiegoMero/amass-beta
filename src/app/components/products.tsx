import './style/products.scss';
import React from 'react';
import { Inter } from 'next/font/google'
import productImage from '/public/pic4.png';

const inter = Inter({ subsets: ['latin'] })

export default function Products() {

  const repeticiones = Array.from({ length: 3 }, (_, index) => index + 1);

  return (
    <section id='products'>
      <h2>Productos</h2>
      
    </section>
  )
}