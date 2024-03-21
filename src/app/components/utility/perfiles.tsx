import ProductCard from "./product-card"

export default function Perfiles() {
  const perfiles = [
    {
      imagen: '/products/perfiles/perfil-L.png',
      title: 'Perfil acero galvanizado tipo L',
      descripciones: ['Largo estándar: 3m', 'Medida ideal', 'Espesores: 0.8mm/2mm/3mm']
    },
    {
      imagen: '/products/perfiles/perfil-U.png',
      title: 'Perfil acero galvanizado tipo U',
      descripciones: ['Largo estándar: 3m', 'Medida ideal', 'Espesores: 0.8mm/2mm/3mm']
    },
    {
      imagen: '/products/perfiles/Lámina-de-acero.png',
      title: 'Perfil de lámina galvanizada',
      descripciones: ['Largo estándar: 3m', 'Medida ideal', 'Espesor de lámina: 0.40mm']
    },
  ]

  return (
    <div>
      <h3 className="text-2xl font-semibold pt-8 border-b border-white">Perfiles</h3>
      <ul className="flex flex-col gap-7 pt-5">
        {perfiles.map((perfil, index) => (
          <ProductCard key={index} producto={perfil} />
        ))}
      </ul>
    </div>
  )
}