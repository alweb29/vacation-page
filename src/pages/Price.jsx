function Price() {
    let descriptionClasses = " bg-cyan-200"
    let contentClass2 ="bg-gray-100 text-center"
    let contentClass3 ="bg-cyan-100 text-center"
    let contentClass4 ="bg-gray-100 text-center"
  return (
    <div className="mx-1 md:mx-auto max-w-[60rem]">
        <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, ex? Perspiciatis facere laudantium unde dignissimos, laborum neque ullam odio quod voluptates asperiores corrupti incidunt iste aliquam sapiente? In deserunt doloribus tempore corrupti minima libero? Dolor commodi ipsam doloremque ipsa? Doloribus!
        </div>
      <div className="m-1 border-black border-2 bg-black">
        <div className="grid grid-cols-4 grid-rows-6 gap-[2px]">
          <div className={"row-span-2  text-center pt-3" + descriptionClasses}>Sezon</div>
          <div className={"col-span-3 justify-center text-center" + descriptionClasses}>
            Apartament
          </div>
          <div className={contentClass2}>2</div>
          <div className={contentClass3}>3</div>
          <div className={contentClass4}>4</div>
          <div className={"text-center" +descriptionClasses}>Niski</div>
          <div className={contentClass2}>10zł</div>
          <div className={contentClass3}>10zł</div>
          <div className={contentClass4}>10zł</div>
          <div className={"text-center" +descriptionClasses}>Średni</div>
          <div className={contentClass2}>10zł</div>
          <div className={contentClass3}>10zł</div>
          <div className={contentClass4}>10zł</div>
          <div className={"text-center" +descriptionClasses}>Wysoki</div>
          <div className={contentClass2}>10zł</div>
          <div className={contentClass3}>10zł</div>
          <div className={contentClass4}>10zł</div>
          <div className={"text-center" +descriptionClasses}>Niski</div>
          <div className={contentClass2}>10zł</div>
          <div className={contentClass3}>10zł</div>
          <div className={contentClass4}>10zł</div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure optio libero maiores nisi debitis mollitia dignissimos eos fugiat, dolorum a!
      </div>
    </div>
  );
}

export default Price;
