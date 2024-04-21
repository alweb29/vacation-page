function Contact() {
    const phoneNo = import.meta.env.VITE_PHONE;
    const email = import.meta.env.VITE_EMAIL;
    const APIKEY = import.meta.env.VITE_APIKEY;

    const src = "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJIQlWLuZq_kYRRusRINEQ4Kw&key="+ APIKEY;
    
  return (
    <div className="flex flex-col md:flex-row md:justify-around md:max-w-[50rem] md:gap-6 md:my-3 md:mx-auto">
      <div>
        <iframe
        className="w-[90%] mt-2 mx-auto md:w-[30rem] md:h-[30rem] md:m-0"
          width="600"
          height="450"
          style={{ edge: 1 }}
          load="lazy"
          src={src}
        ></iframe>
      </div>
      <div className="flex-col text-center my-2 md:-around md:my-auto">
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
