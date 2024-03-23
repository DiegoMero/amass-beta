import ProductCard from "./product-card"

export default function Techos() {
  const techos = [
    {
      imagen: '/products/techos/techo1.png',
      title: 'AMASSTecho Ladrillo',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    },
    {
      imagen: '/products/techos/techo2.png',
      title: 'AMASSTecho Verde',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    },
    {
      imagen: '/products/techos/techo3.png',
      title: 'AMASSTecho Azul',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    },
    {
      imagen: '/products/techos/techo-rojo.png',
      title: 'AMASSTecho Rojo',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    },
    {
      imagen: '/products/techos/techo-blanco.png',
      title: 'AMASSTecho Blanco',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    },
    {
      imagen: '/products/techos/techo-madera.png',
      title: 'AMASSTecho Madera',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    },
    {
      imagen: '/products/techos/techo-blanco-liso.png',
      title: 'AMASSTecho Blanco Liso',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    },
    {
      imagen: '/products/techos/cumbrero.png',
      title: 'Cumbrero',
      descripciones: ['Medidas', 'Longitud estándar:', '3.6m/4.2m/5m/6m', 'Otras dimensiones:', 'Bajo pedido.']
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold pt-8 border-b border-white md:text-3xl">Techos</h3>
      <ul className="flex flex-col gap-7 pt-5 md:grid md:grid-cols-4">
        {techos.map((techo, index) => (
          <ProductCard key={index} producto={techo} />
        ))}
      </ul>
    </div>
  )
}