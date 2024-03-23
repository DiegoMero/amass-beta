import AboutCard from "./utility/about-card";

export default function About() {
  const valoresData = [
    {
      title: 'Innovación:',
      imagen: '/innovacion.png',
      descripcion: 'Promover la creatividad y la búsqueda constante de nuevas soluciones y tecnologías para mejorar y satisfacer las necesidades del mercado.',
    },
    {
      title: 'Calidad:',
      imagen: '/calidad.png',
      descripcion: 'Compromiso con la excelencia en cada producto o servicio ofrecido, garantizando altos estándares de calidad en todos los aspectos.',
    },
    {
      title: 'Sostenibilidad:',
      imagen: '/sostenibilidad.png',
      descripcion: 'Responsabilidad hacia el medio ambiente y la sociedad, promoviendo prácticas y productos sostenibles que minimicen el impactoambiental.',
    },
  ];

  return (
    <section id="nosotros" className="flex flex-col items-center p-3 md:pr-20 md:pl-20 md:pb-28">
      <h2 className="text-mint text-3xl font-bold pt-20 md:text-4xl">Nosotros</h2>
      <p className="text-center text-xl pt-8 md:text-2xl md:pl-44 md:pr-44">
        AMASS es una empresa comprometida con el crecimiento sostenible y
        sustentable con la fabricación de productos reciclables y reusables, para
        crear productos de construcción destinados al uso de la sociedad.
      </p>
      <h3 className="text-mint text-2xl font-bold border-b border-mint w-full text-center pt-8 md:text-3xl">Valores</h3>
      <ul className="flex flex-col gap-5 pt-5 md:flex-row md:gap-12">
        {valoresData.map((valor, index) => (
          <AboutCard key={index} title={valor.title} imagen={valor.imagen} descripcion={valor.descripcion} />
        ))}
      </ul>
    </section>
  )
}