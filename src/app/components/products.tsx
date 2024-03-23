import Espumaflex from "./utility/espumaflex"
import Paneles from "./utility/paneles"
import Techos from "./utility/techos"
import Perfiles from "./utility/perfiles"
import PernosYRemaches from "./utility/pernos-y-remaches"
import OtrosProductos from "./utility/otros-productos"

export default function Products() {
  return (
    <section id='productos' className="bg-prussian-blue text-white p-3 pb-20 md:pr-20 md:pl-20">
      <h2 className="text-3xl text-center font-bold pt-20 md:text-4xl">Productos</h2>
      <Espumaflex />
      <Paneles />
      <Techos />
      <Perfiles />
      <PernosYRemaches />
      <OtrosProductos /> 
    </section>
  )
}