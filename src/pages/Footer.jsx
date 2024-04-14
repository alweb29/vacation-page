import "../../src/pages/Footer.css";

function Footer() {
  const phoneNo = import.meta.env.VITE_PHONE;
  const email = import.meta.env.VITE_EMAIL;

  return (
    <footer>
      <div className="contact-info">
        <a>Zapraszamy do kontaktu:</a>
        <a href={email}>{email}</a>
        <a>Nr telefonu: {phoneNo}</a>
      </div>

      <p>&copy; 2024 Apartamenty Turkusowe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
