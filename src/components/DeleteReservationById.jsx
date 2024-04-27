import { useState } from "react";

export default function DelteReservationById({ handleRefresh }) {
  const apiEndpoint = import.meta.env.VITE_API_EDNPOINT;
  const [idToDelte, setIdToDelte] = useState(1);

  const handleDelteChange = (e) => {
    const value = e.target.value;
    setIdToDelte(value);
  };
  const handleDelete = async (e) => {
    e.preventDefault();
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
      handleRefresh();
      // Optionally, you can handle success here (e.g., show a success message)
    } catch (error) {
      console.error("Error deleting:", error);
      // Optionally, you can handle errors here (e.g., show an error message)
    }
  };

  return (
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
  );
}
