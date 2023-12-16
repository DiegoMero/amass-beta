import Navbar from "./components/navbar"
import Header from "./components/header"
import About from "./components/about"
import Services from "./components/service"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Services />
      </main>
    </>
  )
}
