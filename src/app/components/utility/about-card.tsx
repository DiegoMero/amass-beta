import Image from "next/image"

export default function AboutCard({ title, imagen, descripcion }: any) {
  return (
    <li className="bg-mint text-white p-2 flex flex-col gap-3 md:p-10">
      <Image
        src={imagen}
        width={85}
        height={85}
        alt="Valor"
      />
      <p className="md:text-xl">
        <span className="font-bold">{title} </span>
        {descripcion}
      </p>
    </li>
  )
}