import Image from "next/image"

export default function ProductCard(props: any) {
  const { producto } = props;

  return (
    <li className="w-full flex flex-col gap-1 md:h-auto">
      <div className="h-64 relative bg-mint">
        <Image
          src={producto.imagen}
          fill
          alt={producto.title}
        />
      </div>
      <div className="p-3 bg-mint md:h-72">
        <h4 className="text-xl font-bold md:text-2xl">{producto.title}</h4>
        <ul>
          {producto.descripciones.map((descripcion: string, index: number) => (
            <li key={index}>{descripcion}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}