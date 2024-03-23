import ProductCard from "./product-card"

export default function Paneles() {
  const paneles = [
    {
      imagen: '/products/paneles/Panel-EPS-de-techo-rojo.png',
      title: 'Panel EPS de techo tipo sánduche aislante',
      descripciones: ['Densidad EPS: 10±2 kg/m³', 'Ancho útil 97cm', 'Color: Rojo', 'Espesor lámina superior: 0.52mm', 'Espesor lámina inferior: 0.40mm']
    },
    {
      imagen: '/products/paneles/Panel-EPS-de-techo-verde.png',
      title: 'Panel EPS de techo tipo sánduche aislante',
      descripciones: ['Densidad EPS: 10±2 kg/m³', 'Ancho útil 97cm', 'Color: Verde', 'Espesor lámina superior: 0.52mm', 'Espesor lámina inferior: 0.40mm']
    },
    {
      imagen: '/products/paneles/Panel-Pared-EPS-tipo-Liso.png',
      title: 'Panel EPS de pared tipo sánduche aislante liso',
      descripciones: ['Espesor de lámina: 0.40mm', 'Espesor EPS: 5-10-15cm', 'Longitud estándar: 3m/6m', 'Ancho útil 0.95cm']
    },
    {
      imagen: '/products/paneles/Panel-Pared-Tipo-Sanduche.png',
      title: 'Panel EPS de pared tipo sánduche aislante',
      descripciones: ['Espesor de lámina: 0.40mm', 'Espesor EPS: 5-10-15cm', 'Longitud estándar: 3m/6m', 'Ancho útil 0.95cm']
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold pt-8 border-b border-white md:text-3xl">Paneles</h3>
      <ul className="flex flex-col gap-7 pt-5 md:grid md:grid-cols-4">
        {paneles.map((panel, index) => (
          <ProductCard key={index} producto={panel} />
        ))}
      </ul>
    </div>
  )
}