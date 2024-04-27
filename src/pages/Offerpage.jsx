import { useState } from "react";

export default function OfferPage() {
  const [roomType, setRoomType] = useState(2);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Define photo URLs for each room type
  const photoUrls = {
    2: [
      "../src/assets/roomphotos/2room.jpg",
      "../src/assets/roomphotos/2room2.jpg",
      "../src/assets/roomphotos/2balcony.jpg",
    ],
    3: ["../src/assets/roomphotos/3balcony.jpg"],
    4: [
      "../src/assets/roomphotos/4room.jpg",
      "../src/assets/roomphotos/4balcony.jpg",
      "../src/assets/roomphotos/4bathroom.jpg",
      "../src/assets/roomphotos/4bathroom2.jpg",
    ],
  };

  // Function to handle previous photo
  const handlePrevPhoto = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photoUrls[roomType].length - 1 : prevIndex - 1
    );
  };

  // Function to handle next photo
  const handleNextPhoto = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === photoUrls[roomType].length - 1 ? 0 : prevIndex + 1
    );
  };

  let buttons =
    "p-2 bg-cyan-200 m-2 rounded-md w-24 hover:translate-y-1 hover:shadow-none shadow-md hover:bg-cyan-300 hover:text-cyan-100 duration-150";
  let selectedButton =
    "p-2 bg-cyan-400 m-2 rounded-md w-24 translate-y-1 hover:shadow-none hover:bg-cyan-500 hover:text-cyan-100 duration-150";

  return (
    <div className="max-w-[60rem] mx-auto">
      <h1 className="text-center text-4xl">Oferta</h1>
      <h3 className="text-center text-2xl">Proszę wybrać apartament</h3>
      <div className="gap-4 flex flex-row justify-center">
        <button
          className={roomType === 2 ? selectedButton : buttons}
          onClick={() => {
            setRoomType(2);
            setPhotoIndex(0);
          }}
        >
          2 osobowy
        </button>
        <button
          className={roomType === 3 ? selectedButton : buttons}
          onClick={() => {
            setRoomType(3);
            setPhotoIndex(0);
          }}
        >
          3 osobowy
        </button>
        <button
          className={roomType === 4 ? selectedButton : buttons}
          onClick={() => {
            setRoomType(4);
            setPhotoIndex(0);
          }}
        >
          4 osobowy
        </button>
      </div>

      <div>
        {/* Display the current photo */}
        <div className="flex justify-center bg-gray-100 mt-4 h-[20rem] md:h-[40rem] m-1 overflow-hidden">
          <img
            src={photoUrls[roomType][photoIndex]}
            alt={`Room ${roomType}`}
            className="max-w-full max-h-[40rem]"
          />
        </div>

        {/* Arrows for navigation */}
        <div className="flex flex-row justify-center align-bottom gap-2 my-3">
          <button onClick={handlePrevPhoto} className={"mr-2 " + buttons}>
            {"<---"}
          </button>
          <button onClick={handleNextPhoto} className={buttons}>
            {"-->"}
          </button>
        </div>
      </div>
      {roomType === 2 && <div>Teskst do pokoju 2</div>}
      {roomType === 3 && <div>Teskst do pokoju 3</div>}
      {roomType === 4 && <div>Teskst do pokoju 4</div>}
      <div className="m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, expedita
        voluptate eos obcaecati eveniet asperiores ipsa deleniti ducimus rerum
        enim nam ab quo aliquid quis tempora veniam. Distinctio totam repellat
        deserunt quasi corporis quam veritatis magnam placeat maxime, saepe
        earum cum laboriosam fugit officiis sapiente ut, ex, dignissimos eum
        aut?
      </div>
    </div>
  );
}
