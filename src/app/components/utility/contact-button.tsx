'use client'

export default function ContactButton() {
  const phoneNumber = '0983376655';

  const handleContactButtonClick = () => {
    const phoneLink = `tel:${phoneNumber}`;
    window.location.href = phoneLink;
  };

  return (
    <button onClick={handleContactButtonClick} className="relative rounded-md p-3 text-2xl text-white bg-gradient-to-r from-mint-left to-mint active:bg-mint-left">
      Contáctanos
    </button>
  )
}