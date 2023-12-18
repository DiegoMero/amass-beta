import Navbar from "./components/navbar"
import Header from "./components/header"
import About from "./components/about"
import Services from "./components/services"
import News from "./components/news"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Services />
        <News />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
