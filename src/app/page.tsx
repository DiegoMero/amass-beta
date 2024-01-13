import Navbar from "./components/navbar"
import Header from "./components/header"
import About from "./components/about"
import Products from "./components/products"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ['latin'],
  weight: "400"
})

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={poppins.className}>
        <Header />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
