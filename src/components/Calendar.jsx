import CalendarTile from "./CalendarTile";

function Calendar() {
  let buttons = "p-2 bg-cyan-200 m-2 rounded-md w-20";

  class Day {
    constructor(number, isReserved) {
      this.number = number;
      this.isReserved = isReserved;
    }
  }

  var days = [new Day(1, false), new Day(2, false), new Day(3, false), new Day(4, false), new Day(5, false), new Day(6, false), new Day(7,false),
    new Day(8, false), new Day(9, false), new Day(10, false), new Day(11, false), new Day(12, false), new Day(13, false), new Day(14,false),
    new Day(15, true), new Day(16, true), new Day(17, true), new Day(18, true), new Day(19, true), new Day(20, true), new Day(21,false),
    new Day(22, false), new Day(23, true), new Day(24, true), new Day(25, true), new Day(26, true), new Day(27, true), new Day(28,true),
    new Day(29, false), new Day(30, false), new Day(31, false)
  ];

  let tileFree = "bg-blue-400 py-2 md:py-4 text-center w-12 h-12 md:h-16 md:w-16 align-middle";
  let tileBooked ="bg-red-400 py-2 md:py-4 text-center w-12 h-12 md:h-16 md:w-16 align-middle";
  

  return (
    <div className="max-w-[48rem] mx-auto flex flex-col py-10">
      <h1 className="text-center text-4xl">Kalendarz rezerwacji</h1>
      <div className="flex flex-row justify-center align-bottom gap-4 my-3">
        <button className={buttons}>lewo</button>
        <h1 className="text-3xl p-2">Maj</h1>
        <button className={buttons}>prawo</button>
      </div>
      <section className="min-w-[20rem] grid grid-cols-7 grid-row-5 bg-gray-100 rounded-xl drop-shadow-xl mx-auto overflow-hidden">
      {days.map((day, index) => (
          <CalendarTile
            key={index}
            text={day.number}
            className={day.isReserved ? tileBooked : tileFree}
          />
        ))}
      </section>
    </div>
  );
}

export default Calendar;
