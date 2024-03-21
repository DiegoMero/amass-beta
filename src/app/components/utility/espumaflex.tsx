import ProductCard from "./product-card"

export default function Espumaflex() {
  const espumaflex = {
    imagen: '/products/otros/Espumaflex.png',
    title: 'Espumaflex',
    descripciones: ['Medidas:', '40x40x10cm', '40x40x15cm', '40x40x20cm', '1mx 2mx (1-15)cm']
  }

  return (
    <div>
      <h3 className="text-2xl font-semibold pt-8 border-b border-white">Espumaflex</h3>
      <ul className="pt-5">
        <ProductCard  producto={espumaflex} />
      </ul>
    </div>
  )
}