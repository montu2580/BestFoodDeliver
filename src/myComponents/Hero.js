import React from "react";

const Hero = () => {
    return (
        <div className="max-w-[1640] mx-auto p-4 ">
            {/* Overlay */}
            <div className="max-h-[500px] relative  ">
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center font-bold ">
                    <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl">The <span className="text-orange-600 ">Best</span></h1>
                    <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl"><span className="text-orange-600">Foods</span> Delivered</h1>
                </div>
            {/* <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg" alt="Error" className="w-full max-h-[500px] object-cover" /> */}
                <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Error" className="w-full max-h-[500px] object-cover shadow-xl shadow-black" />
                
            </div>
        </div>
    )
};

export default Hero;
