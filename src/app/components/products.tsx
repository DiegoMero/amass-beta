import './style/products.scss';
import React from 'react';
import Image1 from '/public/products/techos/techo1.jpeg';
import Image2 from '/public/products/techos/techo2.jpeg';
import Image3 from '/public/products/techos/techo3.jpeg';
import Image4 from '/public/products/techos/techo4.jpeg';
import Image5 from '/public/products/techos/techo5.jpeg';
import Image6 from '/public/products/techos/techo6.jpeg';
import Image7 from '/public/products/techos/techo7.jpeg';
import Image8 from '/public/products/techos/techo8.jpeg';

const productsData = [
  { image: Image1, description: ['- Espesor 0.52 mm', '- Ancho útil 1.06 m', '- Largo estándar 3.60m/4.20m/5m/6m'] },
  { image: Image2, description: ['- Espesor 0.52 mm', '- Ancho útil 1.06 m', '- Largo estándar 3.60m/4.20m/5m/6m'] },
  { image: Image3, description: ['- Espesor 0.40 mm', '- Ancho útil 0.90 m', '- Largo estándar 3.60m/4.20m/5m/6m'] },
  { image: Image4, description: ['- Espesor 0.40 mm', '- Ancho útil 1.06 m', '- Altura de onda 1.5 cm'] },
  { image: Image5, description: ['- Espesor 0.20 mm', '- Ancho útil 0.90 m', '- Largo estándar 3.60m/4.20m/5m/6m'] },
  { image: Image6, description: ['- Espesor 0.25 mm', '- Ancho útil 1.06 m', '- Largo estándar 3.60m/4.20m/5m/6m'] },
  { image: Image7, description: ['- Espesor 0.25 mm', '- Ancho útil 1.06 m', '- Largo estándar 3.60m/4.20m/5m/6m'] },
  { image: Image8, description: ['- Espesor 0.40 mm', '- Ancho útil 0.90 m', '- Altura de onda 1.5 cm'] },
];

export default function Products() {
  return (
    <section id='products'>
      <h2>Productos</h2>
      <h3>Techos</h3>
      <ul className='all-products'>
        {productsData.map((product, index) => (
          <li key={index} className='product-card'>
            <div className='product-image'
              style={{
                backgroundImage: `url(${product.image.src})`,
              }}
            />
            <ul className='product-description'>
              <li>{product.description[0]}</li>
              <li>{product.description[1]}</li>
              <li>{product.description[2]}</li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}