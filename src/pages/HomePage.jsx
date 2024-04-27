function HomePage() {
  return (
    <div className="max-w-[60rem] md:mx-auto">
      <div className="relative max-h-60 mb-2 overflow-hidden max-w-[60rem] md:rounded-md md:m-2 md:mx-auto">
        <img
          src="../src/assets/sunset1.jpg"
          alt="sunset"
          className="scale-y-150 -translate-y-12 md:scale-1 md:-translate-y-48"
        />
        <h1 className="absolute w-screen text-center text- top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl ">
          Twój wypoczynek nad morzem
        </h1>
      </div>
      <div>
        <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora eos suscipit iste repellendus sit quia minima atque, voluptate, voluptatum nam voluptatibus, dicta facilis ut! Suscipit rerum exercitationem odit repellendus maiores!</div>
        <div className="flex flex-col justify-center md:flex-row overflow-hidden">
          <img
            src="../src/assets/locationphoto.jpg"
            alt="sunset"
            className="max-h-96 max-w-[34rem] rounded-md mx-auto my-2 md:mx-2"
          />
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
            corporis hic doloribus laboriosam porro numquam officiis fugiat
            molestias provident quidem minus vero, enim possimus asperiores iure
            voluptates nisi. Doloribus vel iure mollitia quaerat minima facilis.
            Repellat laboriosam explicabo, neque voluptate quam doloremque
            eveniet voluptatem illum provident, dolorum non corporis in!
          </h3>
        </div>
        <div className="flex flex-col-reverse justify-center overflow-hidden md:flex-row">
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
            corporis hic doloribus laboriosam porro numquam officiis fugiat
            molestias provident quidem minus vero, enim possimus asperiores iure
            voluptates nisi. Doloribus vel iure mollitia quaerat minima facilis.
            Repellat laboriosam explicabo, neque voluptate quam doloremque
            eveniet voluptatem illum provident, dolorum non corporis in!
          </h3>
          <img
            src="../src/assets/cloudysunset-1.jpg"
            alt="sunset"
            className="max-h-96 max-w-[34rem] rounded-md mx-auto my-2 md:mx-2"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
