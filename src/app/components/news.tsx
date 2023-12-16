import './style/news.scss';
import React from 'react';
import { Inter } from 'next/font/google'
import newspic from '/public/pic5.jpg';

const inter = Inter({ subsets: ['latin'] })

export default function News() {

  const repeticiones = Array.from({ length: 3 }, (_, index) => index + 1);


  return (
    <section className='news'>
      <h2>Noticias</h2>
      <div className='news-container'>
        {repeticiones.map((numero) => (
          <div key={numero} className='new-card'>
            <div
              className='new-image'
              style={{
                backgroundImage: `url(${newspic.src})`,
              }}
            />
            <div className='new-info'>
              <h3>Lorem Impsun</h3>
              <p>
                Sed cursus vitae lacus maximus aliquet.
                Maecenas elementum nulla vel arcu vulputate ultricies.
                Pellentesque at luctus nibh, ut porta erat. Donec in augue sapien.
                Nullam porta leo eu nulla condimentum, nec iaculis justo ullamcorper...
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className={inter.className}>Seguir leyendo</button>
    </section>
  )
}