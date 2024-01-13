import './style/about.scss';
import Innovacion from '/public/Innovación.png';
import Calidad from '/public/Calidad.png'
import Sostenibilidad from '/public/Sostenibilidad.png'

export default function About() {
  const textStyle = {
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <section id='about'>
      <h2>Nosotros</h2>
      <p>
        AMASS es una empresa comprometida con el crecimiento sostenible y
        sustentable con la fabricación de productos reciclables y reusables, para
        crear productos de construcción destinados al uso de la sociedad.
      </p>
      <h3>Valores</h3>
      <ul>
        <li>
          <div className='innovacion-icon'
            style={{
              backgroundImage: `url(${Innovacion.src})`,
            }}
          />
          <>
            <span style={textStyle}>Innovación:</span> Promover la creatividad y la búsqueda constante de nuevas soluciones y tecnologías
            para mejorar y satisfacer las necesidades del mercado.
          </>
        </li>
        <li>
          <div className='innovacion-icon'
            style={{
              backgroundImage: `url(${Calidad.src})`,
            }}
          />
          <>
            <span style={textStyle}>Calidad:</span> Compromiso con la excelencia en cada producto o servicio
            ofrecido, garantizando altos estándares de calidad en todos los aspectos.
          </>
        </li>
        <li>
          <div className='innovacion-icon'
            style={{
              backgroundImage: `url(${Sostenibilidad.src})`,
            }}
          />
          <>
            <span style={textStyle}>Sostenibilidad:</span> Responsabilidad hacia el medio ambiente y la sociedad,
            promoviendo prácticas y productos sostenibles que minimicen el impacto
            ambiental.
          </>
        </li>
      </ul>
    </section>
  )
}