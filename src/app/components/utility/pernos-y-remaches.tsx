import ProductCard from "./product-card"

export default function PernosYRemaches() {
  const pernosYRemaches = [
    {
      imagen: '/products/pernos/perno-autoperforante.png',
      title: 'Perno Galvanizado',
      descripciones: ['Medidas:', '19/65/125/180mm']
    },
    {
      imagen: '/products/remaches/remache-galvanizado.png',
      title: 'Remache Galvanizado',
      descripciones: ['Medidas:', '5x11 - 500 unidades p/caja', '4x13 - 1000 unidades p/caja']
    },
  ]

  return (
    <div>
      <h3 className="text-2xl font-semibold pt-8 border-b border-white md:text-3xl">Pernos y Remaches</h3>
      <ul className="flex flex-col gap-7 pt-5 md:grid md:grid-cols-4">
        {pernosYRemaches.map((producto, index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </ul>
    </div>
  )
}