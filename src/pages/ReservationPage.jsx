import "../../src/pages/ReservationPage.css";
import { useState } from "react";

function ReservationPage() {
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  function handleSendReservationForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(!name || !email){
      alert("Proszę podać imię i nazwisko oraz adres email.")
    }
    else if (!isConsentChecked) {
      alert(
        "Proszę zaznaczyć zgodę na przetwarzanie danych w celu wysłania formularza."
      );
    } else {
      console.log("Form sent");
      // Add your form submission logic here
    }
  }

  function handleConsentCheckboxChange(event) {
    setIsConsentChecked(event.target.checked); // Update consent state
  }

  return (
    <div className="reservation-form">
      <div>
        <h2>Formularz Rezerwacyjny</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Imię i nazwisko:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Numer telefonu:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="roomType">Apartament:</label>
            <select id="roomType" name="roomType">
              <option value="2_person">Studio 2 osobowe</option>
              <option value="3_person">Studio 3 osobowe</option>
              <option value="4_person">Apartament 4 osobowy</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Wiadomość:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="consent">
              Proszę wyrazić zgodę na przetwarzanie danych:
            </label>
            <div id="consent">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={isConsentChecked}
                onChange={handleConsentCheckboxChange}
              />
              <label htmlFor="consent">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                dokonania rezerwacji.
              </label>
            </div>
          </div>
          <button type="submit" onClick={handleSendReservationForm}>
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservationPage;
