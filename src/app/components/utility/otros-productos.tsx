import ProductCard from "./product-card"

export default function OtrosProductos() {
  const otros = [
    {
      imagen: '/products/otros/Kiosko.png',
      title: 'Kiosco Móvil',
      descripciones: ['Dimensiones: 3m x 2m', 'Altura frontal: 2.45m', 'Caída de techo: 2.41m', 'Ventana frontal:', '2.35m x 1.04m', 'Ventana lateral:', '1.46m x 1.04m','Puerta: 1.87m x 0.80m', '100% Móviles, prácticos, reciclables y reusables']
    },
    {
      imagen: '/products/otros/garita.png',
      title: 'Garita Móvil',
      descripciones: ['Dimensiones: 3m x 2m', 'Altura frontal: 2.46m', 'Caída de techo: 2.40m', 'Puerta: 1.87m x 0.80m','100% Móviles, prácticos, reciclables y reusables']
    },
    {
      imagen: '/products/otros/Ventana-PVC.png',
      title: 'Ventanas PVC',
      descripciones: ['Dimensión estándar 1.40m x 1.10m', 'Otras dimensiones bajo pedido']
    },
    {
      imagen: '/products/otros/Piso-PVC-Flotante.png',
      title: 'Piso PVC Flotante Impermeable',
      descripciones: ['Medidas: 0.18m x 1.26m', 'Caja: 6 tablas']
    },
    {
      imagen: '/products/otros/Fibracemento.png',
      title: 'Fibracemento',
      descripciones: ['Espesor: 20mm', 'Placa: 1.2m x 2.4m']
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold pt-8 border-b border-white">Otros</h3>
      <ul className="flex flex-col gap-7 pt-5">
        {otros.map((producto, index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </ul>
    </div>
  )
}