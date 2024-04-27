import { useState } from "react";

export default function DeleteMonthForRoomType({
  handleRefresh
}) {
  const apiEndpoint = import.meta.env.VITE_API_EDNPOINT;
  const [roomTypeToDelte, setroomTypeToDelte] = useState(2);
  const [monthNumToDelte, setmonthNumToDelte] = useState(1);

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
      handleRefresh();
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

  return (
    <div className="max-w-56 w-60 mx-auto mb-2 bg-red-300 p-3 rounded-xl">
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
          onClick={handleRefresh}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Usuń rezerwację
        </button>
      </form>
    </div>
  );
}
