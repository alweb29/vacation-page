import { useState, useEffect } from "react";
import CalendarTile from "./CalendarTile";

function Calendar({ data, setReservationData }) {
  const apiEndpoint = import.meta.env.VITE_API_EDNPOINT;
  const [roomType, setRoomType] = useState(2);
  const [month, setMonth] = useState(2);
  const [monthHeaderText, setMonthHeaderText] = useState("Luty");

  useEffect(() => {
    setMonthHeaderText(changeMonthHeader());
  }, [month]);

  useEffect(() => {
    // Fetch reservation data from backend API
    fetchReservationData()
      .then((data) => setReservationData(data))
      .catch((error) =>
        console.error("Error fetching reservation data:", error)
      );
  }, [month, roomType]);

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

  function handleMonthChange(next) {
    var monthNum = month;
    console.log("Current monthNum:", monthNum);
    if (next) {
      if (monthNum >= 12) {
        console.log("%c Changing month to January", "color: blue;");
        setMonth(1);
      } else {
        monthNum++;
        console.log("%c Changing month to:" + monthNum, "color: blue;");
        setMonth(monthNum);
      }
    } else {
      if (monthNum <= 1) {
        console.log("%c Changing month to December", "color: blue;");
        setMonth(12);
      } else {
        monthNum--;
        console.log("%c Changing month to:" + monthNum, "color: blue;");
        setMonth(monthNum);
      }
    }
  }

  function changeMonthHeader() {
    switch (month) {
      case 1:
        return "Styczeń";
      case 2:
        return "Luty";
      case 3:
        return "Marzec";
      case 4:
        return "Kwiecień";
      case 5:
        return "Maj";
      case 6:
        return "Czerwiec";
      case 7:
        return "Lipiec";
      case 8:
        return "Sierpień";
      case 9:
        return "Wrzesień";
      case 10:
        return "Październik";
      case 11:
        return "Listopad";
      case 12:
        return "Grudzień";
      default:
        return "Nieznany miesiąc";
    }
  }

  let tileFree =
    "bg-gray-100 py-2 md:py-4 text-center w-12 h-12 md:h-16 md:w-16 align-middle";
  let tileBooked =
    "bg-red-400 py-2 md:py-4 text-center w-12 h-12 md:h-16 md:w-16 align-middle";
  let buttons =
    "p-2 bg-cyan-200 m-2 rounded-md w-24 hover:translate-y-1 hover:shadow-none shadow-md hover:bg-cyan-300 hover:text-cyan-100 duration-150";
  let selectedButton =
    "p-2 bg-cyan-400 m-2 rounded-md w-24 translate-y-1 hover:shadow-none hover:bg-cyan-500 hover:text-cyan-100 duration-150";

  return (
    <div className="max-w-[48rem] mx-auto flex flex-col py-10">
      <h1 className="text-center text-4xl">Kalendarz rezerwacji</h1>
      <h3 className="text-center text-2xl">Proszę wybrać pokój</h3>
      <div className="gap-4 flex flex-row justify-center">
        <button
          className={roomType === 2 ? selectedButton : buttons}
          onClick={() => setRoomType(2)}
        >
          2 osobowy
        </button>
        <button
          className={roomType === 3 ? selectedButton : buttons}
          onClick={() => setRoomType(3)}
        >
          3 osobowy
        </button>
        <button
          className={roomType === 4 ? selectedButton : buttons}
          onClick={() => setRoomType(4)}
        >
          4 osobowy
        </button>
      </div>
      <div className="flex flex-row justify-center align-bottom gap-2 my-3">
        <button className={buttons} onClick={() => handleMonthChange(false)}>
          lewo
        </button>
        <h1 className="text-3xl w-[11rem] text-center p-2">
          {monthHeaderText}
        </h1>
        <button className={buttons} onClick={() => handleMonthChange(true)}>
          prawo
        </button>
      </div>
      <section className="min-w-[20rem] grid grid-cols-7 grid-row-5 bg-gray-100 rounded-xl drop-shadow-xl mx-auto overflow-hidden">
        {data.reservedDaysFull.map((day, index) => (
          <CalendarTile
            key={index}
            text={day.dayNum}
            className={day.reserved ? tileBooked : tileFree}
          />
        ))}
      </section>
    </div>
  );
}

export default Calendar;
