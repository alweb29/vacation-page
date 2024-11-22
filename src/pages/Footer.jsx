function Footer() {
  const phoneNo = import.meta.env.VITE_PHONE;
  const email = import.meta.env.VITE_EMAIL;
  const aClasses = "mx-auto md:px-1 p-2 md:mx-2";

  return (
    <footer className="bg-gray-500 text-white py-4">
      <div className="flex flex-col justify-center md:flex-row md:items-center md:p-2 md:max-w-[40rem] md:mx-auto">
        <p className={aClasses}>Zapraszamy do kontaktu:</p>
        <a className={`${aClasses} underline`} href={`mailto:${email}`}>
          {email}
        </a>
        <p className={aClasses}>Nr telefonu: {phoneNo}</p>
      </div>

      <p className="text-center p-2">
        &copy; 2024 Apartamenty Turkusowe. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
