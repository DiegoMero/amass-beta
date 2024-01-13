import './style/products.scss';
import React from 'react';
import Image1 from '/public/products/techos/techo1.png';
import Image2 from '/public/products/techos/techo2.png';
import Image3 from '/public/products/techos/techo3.png';

import perfil1 from '/public/products/perfiles/perfil-L.png'
import perfil2 from '/public/products/perfiles/perfil-U.png'
import perfil3 from '/public/products/perfiles/Lámina-de-acero.png'

const techos = [
  { image: Image1, title: 'AMASSTecho Rojo' },
  { image: Image2, title: 'AMASSTecho Verde'},
  { image: Image3, title: 'AMASSTecho Azul' },
];

const perfiles = [
  { image: perfil1, title: 'Perfil acero galvanizado tipo L' },
  { image: perfil2, title: 'Perfil acero galvanizado tipo U' },
  { image: perfil3, title: 'Perfil de lámina galvanizada' },
]

export default function Products() {
  return (
    <section id='products'>
      <h2>Productos</h2>
      <h3>Techos</h3>
      <ul className='all-products'>
        {techos.map((techo, index) => (
          <li key={index} className='product-card'>
            <div className='product-image'
              style={{
                backgroundImage: `url(${techo.image.src})`,
              }}
            />
            <div className='product-information'>
              <h4>{techo.title}</h4>
              <ul className='product-description'>
                <li>Medidas</li>
                <li>Longitud estándar:</li>
                <li>3.6m/4.2m/5m/ 6m</li>
                <li>Otras dimensiones:</li>
                <li>Bajo pedido.</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <h3>Perfiles</h3>
      <ul className='all-products'>
        {perfiles.map((perfil, index) => (
          <li key={index} className='product-card'>
            <div className='product-image'
              style={{
                backgroundImage: `url(${perfil.image.src})`,
              }}
            />
            <div className='product-information'>
              <h4>{perfil.title}</h4>
              <ul className='product-description'>
                <li>Medidas</li>
                <li>Longitud estándar:</li>
                <li>3.6m/4.2m/5m/ 6m</li>
                <li>Otras dimensiones:</li>
                <li>Bajo pedido.</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}