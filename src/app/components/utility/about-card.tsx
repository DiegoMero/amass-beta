import Image from "next/image"

export default function AboutCard({ title, imagen, descripcion }: { title: string; imagen: string; descripcion: string }) {
  return (
    <li className="bg-mint text-white p-2 flex flex-col gap-3">
      <Image
        src={imagen}
        width={85}
        height={85}
        alt="Valor"
      />
      <p>
        <span className="font-bold">{title} </span>
        {descripcion}
      </p>
    </li>
  )
}