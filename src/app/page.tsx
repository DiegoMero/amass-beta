import Navbar from "./components/navbar"
import Header from "./components/header"
import About from "./components/about"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
      </main>
    </>
  )
}
