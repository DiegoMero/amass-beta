import './style/products.scss';
import React from 'react';
import Image1 from '/public/products/techos/techo1.png';
import Image2 from '/public/products/techos/techo2.png';
import Image3 from '/public/products/techos/techo3.png';
import Image4 from '/public/products/techos/techo-rojo.png';
import Image5 from '/public/products/techos/techo-blanco.png';
import Image6 from '/public/products/techos/techo-madera.png';
import Image7 from '/public/products/techos/techo-blanco-liso.png';
import Image8 from '/public/products/techos/cumbrero.png';

import perfil1 from '/public/products/perfiles/perfil-L.png'
import perfil2 from '/public/products/perfiles/perfil-U.png'
import perfil3 from '/public/products/perfiles/Lámina-de-acero.png'

import perno from '/public/products/pernos/perno-autoperforante.png';

import remache from '/public/products/remaches/remache-galvanizado.png';

import panel1 from '/public/products/paneles/Panel-EPS-de-techo-rojo.png';
import panel2 from '/public/products/paneles/Panel-EPS-de-techo-verde.png';
import panel3 from '/public/products/paneles/Panel-Pared-EPS-tipo-Liso.png';
import panel4 from '/public/products/paneles/Panel-Pared-Tipo-Sanduche.png';

import otro1 from '/public/products/otros/Ventana-PVC.png';
import otro2 from '/public/products/otros/Piso-PVC-Flotante.png';
import otro3 from '/public/products/otros/Fibracemento.png';
import otro4 from '/public/products/otros/Espumaflex.png';
import otro5 from '/public/products/otros/Kiosko.png';
import otro6 from '/public/products/otros/garita.png';

const techos = [
  { image: Image1, title: 'AMASSTecho Ladrillo' },
  { image: Image2, title: 'AMASSTecho Verde' },
  { image: Image3, title: 'AMASSTecho Azul' },
  { image: Image4, title: 'AMASSTecho Rojo' },
  { image: Image5, title: 'AMASSTecho Blanco' },
  { image: Image6, title: 'AMASSTecho Madera' },
  { image: Image7, title: 'AMASSTecho Blanco Liso' },
  { image: Image8, title: 'Cumbrero' },
];

const paneles = [
  {
    image: panel1,
    title: 'Panel EPS de techo tipo sánduche aislante',
    description: ['Densidad EPS: 10±2 kg/m³', 'Ancho útil 97cm', 'Color: Rojo', 'Espesor lámina superior: 0.52mm', 'Espesor lámina inferior: 0.40mm']
  },
  {
    image: panel2,
    title: 'Panel EPS de techo tipo sánduche aislante',
    description: ['Densidad EPS: 10±2 kg/m³', 'Ancho útil 97cm', 'Color: Verde', 'Espesor lámina superior: 0.52mm', 'Espesor lámina inferior: 0.40mm']
  },
  {
    image: panel3,
    title: 'Panel EPS de pared tipo sánduche aislante liso',
    description: ['Espesor de lámina: 0.40mm', 'Espesor EPS: 5-10-15cm', 'Longitud estándar: 3m/6m', 'Ancho útil 0.95cm']
  },
  {
    image: panel4,
    title: 'Panel EPS de pared tipo sánduche aislante',
    description: ['Espesor de lámina: 0.40mm', 'Espesor EPS: 5-10-15cm', 'Longitud estándar: 3m/6m', 'Ancho útil 0.95cm']
  },
];

const perfiles = [
  {
    image: perfil1,
    title: 'Perfil acero galvanizado tipo L',
    description: ['Largo estándar: 3m', 'Medida ideal', 'Espesores: 0.8mm / 2mm / 3mm']
  },
  {
    image: perfil2,
    title: 'Perfil acero galvanizado tipo U',
    description: ['Largo estándar: 3m', 'Medida ideal', 'Espesores: 0.8mm / 2mm / 3mm']
  },
  {
    image: perfil3,
    title: 'Perfil de lámina galvanizada',
    description: ['Largo estándar: 3m', 'Medida ideal', 'Espesor de lámina: 0.40mm']
  },
]

const pernosYRemaches = [
  {
    image: perno,
    title: 'Perno Galvanizado',
    description: ['Medidas:', '19/65/125/180mm']
  },
  {
    image: remache,
    title: 'Remache Galvanizado',
    description: ['Medidas:', '5x11 - 500 unidades p/caja', '4x13 - 1000 unidades p/caja']
  },
]

const otros = [
  {
    image: otro1,
    title: 'Ventanas PVC',
    description: ['Dimensión estándar 1.40m x 1.10m', 'Otras dimensiones bajo pedido']
  },
  {
    image: otro2,
    title: 'Piso PVC Flotante Impermeable',
    description: ['Medidas: 0.18m x 1.26m', 'Caja: 6 tablas']
  },
  {
    image: otro3,
    title: 'Fibracemento',
    description: ['Espesor: 20mm', 'Placa: 1.2m x 2.4m']
  },
  {
    image: otro5,
    title: 'Kiosco Móvil',
    description: ['Dimensiones: 3m x 2m', 'Altura frontal: 2.45m', 'Caída de techo: 2.41m', 'Ventana frontal:', '2.35m x 1.04m', 'Ventana lateral:', '1.46m x 1.04m','Puerta: 1.87m x 0.80m', '100% Móviles, prácticos, reciclables y reusables']
  },
  {
    image: otro6,
    title: 'Garita Móvil',
    description: ['Dimensiones: 3m x 2m', 'Altura frontal: 2.46m', 'Caída de techo: 2.40m', 'Puerta: 1.87m x 0.80m','100% Móviles, prácticos, reciclables y reusables']
  }
]

export default function Products() {
  return (
    <section id='products'>
      <h2>Productos</h2>
      <h3>Espumaflex</h3>
      <div className='all-products'>
        <div className='product-card'>
          <div className='product-image'
            style={{
              backgroundImage: `url(${otro4.src})`,
            }}
          />
          <div className='product-information'>
            <h4>Espumaflex</h4>
            <ul className='product-description'>
              <li>Medidas:</li>
              <li>40x40x10cm</li>
              <li>40x40x15cm</li>
              <li>40x40x20cm</li>
              <li>1mx 2mx (1-15)cm</li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Paneles</h3>
      <ul className='all-products'>
        {paneles.map((panel, index) => (
          <li key={index} className='product-card'>
            <div className='product-image'
              style={{
                backgroundImage: `url(${panel.image.src})`,
              }}
            />
            <div className='product-information'>
              <h4>{panel.title}</h4>
              <ul className='product-description'>
                {panel.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
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
                {perfil.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <h3>Pernos y Remaches</h3>
      <ul className='all-products'>
        {pernosYRemaches.map((producto, index) => (
          <li key={index} className='product-card'>
            <div className='product-image'
              style={{
                backgroundImage: `url(${producto.image.src})`,
              }}
            />
            <div className='product-information'>
              <h4>{producto.title}</h4>
              <ul className='product-description'>
                {producto.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <h3>Otros</h3>
      <ul className='all-products'>
        {otros.map((producto, index) => (
          <li key={index} className='product-card'>
            <div className='product-image'
              style={{
                backgroundImage: `url(${producto.image.src})`,
              }}
            />
            <div className='product-information'>
              <h4>{producto.title}</h4>
              <ul className='product-description'>
                {producto.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}