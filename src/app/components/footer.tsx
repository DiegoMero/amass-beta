import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black flex items-center p-3 justify-between h-20 md:h-28 md:pr-20 md:pl-20">
      <Image
          src="/logo-blanco.png"
          width={50}
          height={70}
          alt="AMASS Cia. Ltda."
        />
      <p className="text-white">All rights reserved 2024.</p>
    </footer>
  )
}