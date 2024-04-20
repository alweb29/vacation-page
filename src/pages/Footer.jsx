
function Footer() {
  const phoneNo = import.meta.env.VITE_PHONE;
  const email = import.meta.env.VITE_EMAIL;
  let aClasses= "mx-auto md:px-1 p-2 md:mx-2"

  return (
    <footer className="bg-gray-500 text-white justify-center ">
      <div className="flex flex-col justify-center md:flex-row md:p-2 md:max-w-[40rem] md:mx-auto">
        <a className={aClasses}>Zapraszamy do kontaktu:</a>
        <a className={aClasses} href={`mailto:${email}`}>{email}</a>
        <a className={aClasses}>Nr telefonu: {phoneNo}</a>
      </div>

      <p className="text-center p-2"> &copy; 2024 Apartamenty Turkusowe. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
