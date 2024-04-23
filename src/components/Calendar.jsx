import { useState, useEffect } from "react";
import CalendarTile from "./CalendarTile";

function Calendar({ data, changeRoomType, changeMonth, currentMonth }) {
  let buttons = "p-2 bg-cyan-200 m-2 rounded-md w-20";

  const [monthHeaderText, setMonthHeaderText] = useState("Luty");

  useEffect(() => {
    setMonthHeaderText(changeMonthHeader());
  }, [currentMonth]);

  function handleMonthChange(next) {
    var monthNum = currentMonth;
    console.log("Current monthNum:", monthNum);
    if (next) {
      if (monthNum >= 12) {
        console.log("%c Changing month to January", "color: blue;");
        changeMonth(1);
      } else {
        monthNum++;
        console.log("%c Changing month to:" + monthNum, "color: blue;");
        changeMonth(monthNum);
      }
    } else {
      if (monthNum <= 1) {
        console.log("%c Changing month to December", "color: blue;");
        changeMonth(12);
      } else {
        monthNum--;
        console.log("%c Changing month to:" + monthNum, "color: blue;");
        changeMonth(monthNum);
      }
    }
  }

  function changeMonthHeader() {
    switch (currentMonth) {
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

  return (
    <div className="max-w-[48rem] mx-auto flex flex-col py-10">
      <h1 className="text-center text-4xl">Kalendarz rezerwacji</h1>
      <h3 className="text-center text-2xl">Proszę wybrać pokój</h3>
      <div className="gap-4 flex flex-row justify-center">
        <button className={buttons} onClick={() => changeRoomType(2)}>
          2 osobowy
        </button>
        <button className={buttons} onClick={() => changeRoomType(3)}>
          3 osobowy
        </button>
        <button className={buttons} onClick={() => changeRoomType(4)}>
          4 osobowy
        </button>
      </div>
      <div className="flex flex-row justify-center align-bottom gap-2 my-3">
        <button className={buttons} onClick={() => handleMonthChange(false)}>
          lewo
        </button>
        <h1 className="text-3xl w-[11rem] text-center p-2">{monthHeaderText}</h1>
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
