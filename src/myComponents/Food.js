import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);//map se iske data ko acces kr lenge

  // Filter Type burgers/pizza/etc.
  const filterType = (category) => {
    // console.log("Work");
    setFoods(
      data.filter((item) => {
        return item.category === category;
        // return console.log("khfhnnfjnjew");
      })
    );
  };


  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    )
  }

  return (
    <div className="max-w-[1640] m-auto px-4 py-12 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center underline decoration-orange-600  decoration-double pb-4 ">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* Filter Type */}
        <div>
          <p className="font-extrabold text-gray-800">Filter Type</p>
          <div  className=" flex justify-between flex-wrap w-[500px]">
            <button onClick={()=>setFoods(data)} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 rounded-xl">
              All
            </button>
            <button onClick={()=> filterType("burger")} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 rounded-xl">
              Burgers
            </button>
            <button onClick={()=> filterType('pizza')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 rounded-xl">
              Pizza
            </button>
            <button onClick={()=> filterType('salad')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 rounded-xl">
              Salads
            </button>
            <button onClick={()=> filterType('chicken')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 rounded-xl">
              Chicken
            </button>
            <button onClick={()=> filterType('biryani')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 rounded-xl">
            Biryani
            </button>
          </div>
        </div>
        {/* Filter Price  */}

        <div>
          <p className="font-extrabold text-gray-800">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={() => filterPrice('$')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  px-4 rounded-xl">
              $
            </button>
            <button onClick={() => filterPrice('$$')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  px-4 rounded-xl">
              $$
            </button>
            <button onClick={() => filterPrice('$$$')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  px-4 rounded-xl">
              $$$
            </button>
            <button onClick={() => filterPrice('$$$$')} className="m-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  px-4 rounded-xl">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {foods.map((item, index) => (
          <div
            key={index}
            className="card border shadow-lg hover:scale-105 duration-300 rounded-lg "
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[300px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between py-4 mx-1">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-600 text-white p-1 rounded-full hover:cursor-pointer">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
