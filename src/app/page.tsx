import Navbar from "./components/navbar"
import Header from "./components/header"
import About from "./components/about"
import Services from "./components/services"
import News from "./components/news"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Services />
        <News />
      </main>
    </>
  )
}
