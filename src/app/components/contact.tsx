import Social from "./utility/social"

export default function Contact() {

  return (
    <section id='contacto' className="p-3 mb-10">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold pt-10">Contacto</h2>
        <p className="text-xl">¿Necesitas más información? Llena este formulario y uno de nuestros asesores se pondra en contacto contigo.</p>
        <form className="flex flex-col">
          <label className="text-xl">Nombre:</label>
          <input type="text" className="border-black border rounded"></input>
          <label className="text-xl">Correo:</label>
          <input type="text" className="border-black border rounded"></input>
          <label className="text-xl">Mensaje: (Opcional)</label>
          <textarea className="border-black border rounded"></textarea>
          <button type='submit' className="text-center text-xl rounded-lg bg-mint text-white w-40 mt-3 p-3 active:bg-mint-left">Enviar</button>
        </form>
        <h3 className="text-2xl font-bold">Conecta con nosotros:</h3>
        <Social />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold pt-10">Ubicación</h2>
        <p className="text-xl">Encuentra nuestro local más cercano:</p>
        <iframe className="border-black border" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15956.994839586909!2d-80.6355898!3d-0.968178!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902be7002767e46b%3A0x8d6bee26ac9d3ba!2sAmass%20Cia.%20Ltda.!5e0!3m2!1sen!2sec!4v1706037222643!5m2!1sen!2sec" width="100%" height="500" loading="lazy"></iframe>
      </div>
    </section>
  )
}