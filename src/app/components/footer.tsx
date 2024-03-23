import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black flex items-center p-3 justify-between h-20">
      <Image
          src="/logo-blanco.png"
          width={40}
          height={30}
          alt="AMASS Cia. Ltda."
        />
      <p className="text-white">All rights reserved 2024.</p>
    </footer>
  )
}