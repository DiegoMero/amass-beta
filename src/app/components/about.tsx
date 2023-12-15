import './style/about.scss';

export default function About() {
  return (
    <section className='about'>
      <h2>Nosotros</h2>
      <div>
        <div className='card'>
          <h3>Misión</h3>
          <p>
            In a nunc et ante bibendum euismod. 
            Morbi quis vulputate tortor. 
            Etiam ultricies enim ac diam elementum, nec pretium quam auctor. 
            Integer eget eros quis velit rutrum sagittis. 
            Morbi nunc magna, aliquam ac orci eget, mattis aliquet purus.  
          </p>
        </div>
        <div className='card'>
          <h3>Visión</h3>
          <p>
            Duis tempor maximus efficitur. 
            Donec pharetra risus vel nunc tincidunt dictum. 
            Curabitur luctus, leo mattis faucibus mollis, nibh nulla finibus leo, sit amet aliquet sem magna nec quam.  
          </p>
        </div>
      </div>
    </section>
  )
}