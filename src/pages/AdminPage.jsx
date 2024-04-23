import Calendar from "../components/Calendar";
import Login from "../components/Login";
import { useState, useEffect } from "react";
import ReservationRecord from "../components/ReservationRecord";

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [calendar, isCalendarHidden] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [allReservationData, setAllReservationData] = useState(null);
  const [roomType, setRoomType] = useState(2);
  const [month, setMonth] = useState(2);
  const [idToDelte, setIdToDelte] = useState(1);
  const [roomTypeToDelte, setroomTypeToDelte] = useState(2);
  const [monthNumToDelte, setmonthNumToDelte] = useState(1);

  const [formData, setFormData] = useState({
    monthNum: "1",
    reservedBy: "",
    reservedDays: [""],
    roomType: "2",
  });
  const apiEndpoint = import.meta.env.VITE_API_EDNPOINT;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      console.log("Form submitted successfully!");
      // Optionally, you can handle success here (e.g., show a success message)
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can handle errors here (e.g., show an error message)
    }
  };

  const handleDelteChange = (e) => {
    const value = e.target.value;
    setIdToDelte(value);
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(apiEndpoint + "/" + idToDelte, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete id: " + idToDelte);
      }
      console.log("Deleted id : " + idToDelte);
      // Optionally, you can handle success here (e.g., show a success message)
    } catch (error) {
      console.error("Error deleting:", error);
      // Optionally, you can handle errors here (e.g., show an error message)
    }
  };

  const handleDeleteMonthRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        apiEndpoint + "/" + monthNumToDelte + "/" + roomTypeToDelte,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete the reservation");
      }
      console.log("Reservation deleted successfully");
      // Optionally, you can handle success here (e.g., show a success message)
    } catch (error) {
      console.error("Error deleting reservation:", error);
      // Optionally, you can handle errors here (e.g., show an error message)
    }
  };

  const handleRoomTypeChange = (e) => {
    setroomTypeToDelte(e.target.value);
  };

  const handleMonthNumChange = (e) => {
    setmonthNumToDelte(e.target.value);
  };
  function handleRefresh() {
    setRefresh(!refresh);
  }

  function handleCalendarHidden() {
    isCalendarHidden(!calendar);
  }

  useEffect(() => {
    // Fetch reservation data from backend API
    fetchReservationData()
      .then((data) => setReservationData(data))
      .catch((error) =>
        console.error("Error fetching reservation data:", error)
      );
  }, [month, roomType, refresh]);

  async function fetchReservationData() {
    try {
      const response = await fetch(apiEndpoint + `/${month}/${roomType}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    // Fetch reservation data from backend API
    fetchAllReservationData()
      .then((data) => setAllReservationData(data))
      .catch((error) =>
        console.error("Error fetching reservation data:", error)
      );
  }, [refresh]);

  async function fetchAllReservationData() {
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const allReservationData = await response.json();
      console.log(allReservationData);
      return allReservationData;
    } catch (error) {
      throw new Error("Error fetching data:", error);
    }
  }

  return (
    <>
      {!isLoggedIn && <Login onLogin={setIsLoggedIn} />}
      {isLoggedIn && (
        <div className="flex flex-col justify-center">
          <button
            className="p-2 bg-cyan-200 rounded-md mx-auto mt-2"
            onClick={handleCalendarHidden}
          >
            Kalendarz
          </button>
          {calendar && (
            <>
              <Calendar
                data={reservationData}
                changeRoomType={setRoomType}
                changeMonth={setMonth}
                currentMonth={month}
              />
            </>
          )}
          <button
            className="p-2 bg-cyan-200 my-2 rounded-md mx-auto"
            onClick={handleRefresh}
          >
            Odśwież dane
          </button>

          {/*get all reservations*/}
          <div className="my-3 mx-1 border-x-2 border-t-2 max-w-[48rem] md:mx-auto">
            <div className="grid grid-rows-1 grid-cols-6 gap-1 mt-2">
              <h4 className="">id</h4>
              <h4 className="border-l">Miesiąc</h4>
              <h4 className="border-x-2  overflow-hidden">Zarezerwował</h4>
              <h4 className="col-span-2">Dni</h4>
              <h4 className="border-x-2 ">Rodzaj pokoju</h4>
            </div>
            {allReservationData.map((object) => (
              <ReservationRecord key={object.id} data={object} />
            ))}
          </div>
          {/*create resrvation*/}
          <div className="grid md:grid-cols-3 md:max-w-[50rem] gap-2 mx-auto">
            <div className="max-w-56 mx-auto mb-2 bg-green-300 p-3 rounded-xl">
              <h2 className="text-center text-2xl font-bold mb-4">
                Dodaj Rezerwację
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="monthNum" className="block font-semibold">
                    Numer miesiąca:
                  </label>
                  <select
                    id="monthNum"
                    name="monthNum"
                    value={formData.monthNum}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="reservedBy" className="block font-semibold">
                    Zarezerwował:
                  </label>
                  <input
                    type="text"
                    id="reservedBy"
                    name="reservedBy"
                    value={formData.reservedBy}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="reservedDays" className="block font-semibold">
                    Zarezerwowane dni:
                  </label>
                  <input
                    type="text"
                    id="reservedDays"
                    name="reservedDays"
                    value={formData.reservedDays}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="roomType" className="block font-semibold">
                    Rodzaj pokoju:
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  >
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Dodaj rezerwację
                </button>
              </form>
            </div>
            {/*delete resrvation*/}
            <div className="max-w-56 mx-auto mb-2 bg-red-300 p-3 rounded-xl">
              <form
                onSubmit={handleDelete}
                htmlFor="reservedDays"
                className="block font-semibold"
              >
                <label htmlFor="reservedDays" className="block font-semibold">
                  Podaj Id rezrwacji do usunięcia:
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={idToDelte}
                  onChange={handleDelteChange}
                  className="block w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Usuń rezerwację
                </button>
              </form>
            </div>
            {/*delete whole month for this roomtype*/}
            <div className="max-w-56 mx-auto mb-2 bg-red-300 p-3 rounded-xl">
              <form
                onSubmit={handleDeleteMonthRoom}
                htmlFor="reservedDays"
                className=" font-semibold"
              >
                <label htmlFor="roomType" className=" font-semibold">
                  Podaj pokój :
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={roomTypeToDelte}
                  onChange={handleRoomTypeChange}
                  className=" w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <label htmlFor="monthNum" className="block font-semibold">
                  Numer miesiąca:
                </label>
                <select
                  id="monthNum"
                  name="monthNum"
                  value={monthNumToDelte}
                  onChange={handleMonthNumChange}
                  className="block w-full mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  {[...Array(12).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Usuń rezerwację
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminPage;
