import Calendar from "../components/Calendar";
import Login from "../components/Login";
import { useState, useEffect } from "react";
import ReservationRecord from "../components/ReservationRecord";
import CreateReservation from "../components/CreateReservation";
import DelteReservationById from "../components/DeleteReservationById";
import DeleteMonthForRoomType from "../components/DeleteMonthForRoomType";

function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [calendar, isCalendarHidden] = useState(false);
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
  const [allReservationData, setAllReservationData] = useState({
    monthNum: "",
    reservedBy: "",
    reservedDays: "",
    roomType: "",
  });

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

  function handleRefresh() {
    setRefresh(!refresh);
  }

  function handleCalendarHidden() {
    isCalendarHidden(!calendar);
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
                setReservationData={setReservationData}
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
          <div className="grid md:grid-cols-3 md:max-w-[50rem] justify-center gap-2 mx-auto">
            {/*create resrvation*/}
            <CreateReservation
              handleRefresh={handleRefresh}
              handleChange={handleChange}
              formData={formData}
            />
            {/*delete resrvation*/}
            <DelteReservationById
            handleRefresh={handleRefresh}/>
            {/*delete whole month for this roomtype*/}
            <DeleteMonthForRoomType
            handleRefresh={handleRefresh}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminPage;
