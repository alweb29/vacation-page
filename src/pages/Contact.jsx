import "../../src/pages/Contact.css";

function Contact() {
    const phoneNo = import.meta.env.VITE_PHONE;
    const email = import.meta.env.VITE_EMAIL;
    const APIKEY = import.meta.env.VITE_APIKEY;

    const src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQlWLuZq_kYRRusRINEQ4Kw&key="+ APIKEY;
    
  return (
    <div className="ContactMain">
      <div>
        <iframe
          width="600"
          height="450"
          style={{ edge: 1 }}
          load="lazy"
          src={src}
        ></iframe>
      </div>
      <div className="ContactContent">
        <h1>Kontakt</h1>
        <h3>Adres: ul. Plażowa 5, Rowy</h3>
        <h3>Tel.: {phoneNo} </h3>
        <h3>
          Email:<a href={email}>{email}</a>
        </h3>
        <h3>Zapraszamy do kontaktu!</h3>
      </div>
    </div>
  );
}

export default Contact;
