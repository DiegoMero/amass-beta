import './style/footer.scss';
import logo from '/public/amass-logo2.png';

export default function Footer() {
  return (
    <footer>
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