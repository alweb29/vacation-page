import {useState, useEffect} from "react";
import Calendar from "../components/Calendar";

function ReservationPage() {
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const apiEndpoint = import.meta.env.VITE_API_EDNPOINT;
  const [reservationData, setReservationData] = useState({
    roomType: "TWO_PERSON_ROOM",
    monthNum: 2,
    reservedDaysFull: [
      {
        dayNum: "",
        reserved: false,
      },
    ],
  });

  async function handleSendReservationForm(event) {
    event.preventDefault();

    const nameAndLastName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNo = document.getElementById("phone").value;
    const roomType = document.getElementById("roomType").value;
    const message = document.getElementById("message").value;

    if (!nameAndLastName || !email) {
      alert("Proszę podać imię i nazwisko oraz adres email.");
    } else if (!isConsentChecked) {
      alert(
        "Proszę zaznaczyć zgodę na przetwarzanie danych w celu wysłania formularza."
      );
    } else {
      const formData = {
        nameAndLastName, // from the form
        email,
        phoneNo,
        roomType: mapRoomType(roomType), // Convert roomType string to appropriate integer
        message,
      };

      try {
        const response = await fetch(`${apiEndpoint}/reservation`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Send the formData object to the backend
        });

        if (response.ok) {
          alert("Reservation sent successfully!");
        } else {
          alert("Failed to send reservation. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the reservation.");
      }
      console.log("Form sent");
    }
  }

  function mapRoomType(roomType) {
    switch (roomType) {
      case "2_person":
        return 2; // TWO_PERSON_ROOM
      case "3_person":
        return 3; // THREE_PERSON_ROOM
      case "4_person":
        return 4; // FOUR_PERSON_ROOM
      default:
        return 2; // Default to TWO_PERSON_ROOM if none is selected
    }
  }

  function handleConsentCheckboxChange(event) {
    setIsConsentChecked(event.target.checked);
  }

  var divClassName = "flex flex-col py-2";
  let labelClassName = "p-2";
  let inputClassName =
    "bg-gray-200 border-2 p-1 border-black rounded-md focus-visible:border-none";

  return (
    <>
      <Calendar
        data={reservationData}
        setReservationData={setReservationData}
      />
      <div className="reservation-form">
        <div className="flex flex-col mx-auto mb-5 justify-center">
          <h2 className="text-center mb-4">Formularz Rezerwacyjny</h2>
          <form className="bg-gray-100 mx-4 border-gray-200 rounded-xl drop-shadow-xl max-w-[48rem] md:mx-auto">
            <div className={divClassName}>
              <label className={labelClassName} htmlFor="name">
                Imię i nazwisko:
              </label>
              <input
                className={inputClassName}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
            <div className={divClassName}>
              <label className={labelClassName} htmlFor="email">
                Email:
              </label>
              <input
                className={inputClassName}
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className={divClassName}>
              <label className={labelClassName} htmlFor="phone">
                Numer telefonu:
              </label>
              <input
                className={inputClassName}
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className={divClassName}>
              <label className={labelClassName} htmlFor="roomType">
                Apartament:
              </label>
              <select className={inputClassName} id="roomType" name="roomType">
                <option value="2_person">Studio 2 osobowe</option>
                <option value="3_person">Studio 3 osobowe</option>
                <option value="4_person">Apartament 4 osobowy</option>
              </select>
            </div>
            <div className={divClassName}>
              <label className={labelClassName} htmlFor="message">
                Wiadomość:
              </label>
              <textarea
                className={inputClassName}
                id="message"
                name="message"
                rows="4"
              ></textarea>
            </div>
            <div className={divClassName}>
              <label className={labelClassName} htmlFor="consent">
                Proszę wyrazić zgodę na przetwarzanie danych:
              </label>
              <div className="p-2" id="consent">
                <input
                  className="border-cyan-300 p-2"
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={isConsentChecked}
                  onChange={handleConsentCheckboxChange}
                />
                <label className="p-2" htmlFor="consent">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                  dokonania rezerwacji.
                </label>
              </div>
            </div>
            <button
              className="p-2 bg-cyan-200 m-2 rounded-md w-20"
              type="submit"
              onClick={handleSendReservationForm}
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReservationPage;
