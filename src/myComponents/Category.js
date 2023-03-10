// import React from 'react';
// import { categories } from '../data/data.js';

// const Category = () => {
//   console.log(categories);
//   return (
//     <div className='max-w-[1640px] m-auto px-4 py-12'>
//       <h1 className='text-orange-600 font-bold text-4xl text-center'>
//         Top Rated Menu Items
//       </h1>
//       {/* Categories */}
//       <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'
//           >
//             <h2 className='font-bold sm:text-xl'>{item.name}</h2>
//             <img src={item.image} alt={item.name} className='w-20' />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

import React from "react";
import { categories } from '../data/data.js';
const Category = () => {
    console.log(categories);
  return (
    <div className="max-w-[1640px] px-4 py-">
      <h1 className="text-4xl font-bold text-orange-600 text-center underline decoration-orange-600  decoration-double">Top Rated Menu Item</h1>
      <div className="categories grid grid-cols-2 md:grid-cols-4 gap-6 py-12 ">
        {categories.map((item,index) => (
          <div key={index} className="bg-gray-100 p-2 rounded-lg justify-between items-center flex shadow-lg hover:scale-105 duration-300">
            <h2 className="font-bold text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className=" w-30" />
          </div>
        ))};
      </div>
    </div>
  );
};

export default Category;
