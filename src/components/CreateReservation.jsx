export default function CreateReservation({
  handleRefresh,
  handleChange,
  formData,
}) {
  const apiEndpoint = import.meta.env.VITE_API_EDNPOINT;

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
    handleRefresh();
  };

  return (
    <div className="max-w-56 mx-auto mb-2 bg-green-300 p-3 rounded-xl">
      <h2 className="text-center text-2xl font-bold mb-4">Dodaj Rezerwację</h2>
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
  );
}
