import './style/header.scss';
import backgroundImage from '/public/pic1.png';

export default function Header() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer porttitor est sit amet pharetra blandit. 
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Pellentesque vestibulum vitae ipsum sed malesuada. 
        Donec feugiat magna odio, ac finibus libero sagittis eu. 
        Nulla nec risus iaculis tellus maximus volutpat at sit amet mi. 
        Integer ac justo et lorem gravida malesuada et vel velit. 
        Vivamus varius lacus nec risus tincidunt, in fringilla velit aliquam. 
        Vestibulum fringilla, dolor id hendrerit ultrices, lectus turpis gravida risus, et vestibulum ante massa nec orci. 
        Vestibulum id blandit magna, et sagittis erat. 
        Pellentesque a sem ultrices, dapibus enim nec, consectetur justo. 
        Nunc condimentum nisl et augue euismod, nec ultricies eros volutpat. 
        Vivamus in eros libero. Nunc pharetra leo et lacus sodales, eget sodales ligula facilisis. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        Nam tristique metus at pretium fermentum. 
        Sed quis quam non est consectetur hendrerit.
      </p>
    </section>
  )
}