function ReservationRecord({ data }) {
  function changeRoomType(roomType) {
    switch (roomType) {
      case "FOUR_PERSON_ROOM":
        return "4";
      case "THREE_PERSON_ROOM":
        return "3";
      case "TWO_PERSON_ROOM":
        return "2";
    }
  }
  return (
    <div className="grid grid-rows-1 grid-cols-6 gap-1 border-y-2 border-black">
      <h4>{data.id}</h4>
      <h4 className="border-l-2">{data.monthNum}</h4>
      <h4 className="border-x-2 overflow-x-auto">{data.reservedBy}</h4>
      <h4 className="col-span-2 overflow-x-auto">{data.reservedDays.map((day) => day + ", ")}</h4>
      <h4 className="border-x-2">{changeRoomType(data.roomType)}</h4>
    </div>
  );
}

export default ReservationRecord;
