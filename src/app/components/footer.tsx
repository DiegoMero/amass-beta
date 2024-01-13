import './style/footer.scss';
import logo from '/public/amass-logo2.png';
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"
})

export default function Footer() {
  return (
    <footer className={poppins.className}>
      <div
        style={{
          backgroundImage: `url(${logo.src})`,
        }}
        className='footer-logo'
      />
      <p>All rights reserved 2024.</p>
    </footer>
  )
}