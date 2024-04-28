import React from "react";
import { AiOutlineSearch, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdMonetizationOn } from "react-icons/md";
import { GiPathDistance } from "react-icons/gi";

//import Images =======>
import pizza from "./../../Assests/pizza.jpeg";
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'
// import pizza from './../../Assests/pizza.jpeg'

//restuarant image =====>
import food from './../../Assests/food.webp'


const Body = () => {
  return (
    <div className="bg-bodyBg h-[100%] basis-80 p-8">
      {/* Topic Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center border-b-2 pb-2 basis-1/2 gap-2">
          <AiOutlineSearch className="text-hoverColor text-[20px] cursor-pointer" />
          <input
            type="text"
            placeholder="Search Your Favaurite"
            className="border-none outline-none placeholder:text-sm"
          />
        </div>

        <div className="flex gap-4 items-center">
          <AiOutlineAppstoreAdd className="text-hoverColor cursor-pointer text-[25px] hover:text-[20px] transition-all" />
          <button className="bg-sideMenuBg cursor-pointer text-bodyBg font-semibold px-4 rounded-[5px] hover:bg-[#55545e] transition-all">
            Go Premium
          </button>
        </div>
      </div>

      {/* Title div */}
      <div className="flex items-center justify-between mt-8 ">
        <div className="title">
          <h1 className="text-[35px] text-titleColor tracking-[1px] font-black">
            Find the Best Place
          </h1>
          <span className="text-[16px] opacity-70 ">
            <strong>249 Restaurants,</strong> choose yours
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="specials px-4 text-center ">
            <h3 className="text-[20px] font-bold text-titleColor">95</h3>
            <small className="text-[16px] opacity-70">Specials</small>
          </div>

          <div className="specials px-4 text-center ">
            <h3 className="text-[20px] font-bold text-titleColor">90</h3>
            <small className="text-[16px] opacity-70">Deliveries</small>
          </div>
        </div>
      </div>

      {/* Categories Div */}
      <div className="flex mt-8 items-center gap-10">
        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <img
              src={pizza}
              alt="Pizza Image"
              className="w-[70%] flex justify-center m-auto"
            />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            Italian
          </span>
        </div>

        <div className="singleCategory grid items-center justify-between text-center">
          <div className="imgDiv h-[40px] w-[40px] bg-[#f4f5f4] rounded-full flex items-center justify-center m-auto p-1">
            <BsPlus className="text-center flex justify-center m-auto text-[25px] hover:scale-[1.5] transition-all cursor-pointer" />
          </div>
          <span className="uppercase text-[12px] font-medium opacity-50 pt-2 text-center  ">
            More
          </span>
        </div>
      </div>

      {/* restaurants section */}
      <div className="restaurant mt-8 ">
        <div className="flex items-center justify-between ">
            <div className="title">
              <h1 className="text-[26px] text-titleColor font-bold">New Restaurants</h1>
              <span className="text-[16px] opacity-70 "><strong>9 restaurants,</strong>  have been opened up in town</span>
            </div>
            <button className="flrx align-center gap-2 cursor-pointer font-semibold px-4 rounded-[5px] hover:bg-[#55545e] hover:text-bodyBg transition-all">
           View All <BsArrowRight className="text-[20px]" />
          </button>
        </div>

        <div className="restaurantContainer py-7 flex justify-center items-center">

          <div className="singleRestuarant w-[220px] bg-colorOne p-3 rounded-[10px] ">
              <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
                <img src={food} alt="" className="w-full h-full object-cover" />
              </div>
              <h1 className="restName block text-center font-bold opacity-90 pt-4">Molef Ulif</h1>
              <small className="block text-center text-[#606060] font-medium">Asian Restautant</small>

              <div className="info mt-5 flex justify-center items-center ">
                <div className="singleInfo grid px-3"> 
                   <AiFillStar className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">3.7</h4>
                </div>

                <div className="singleInfo border-x-2 grid px-3"> 
                   <MdMonetizationOn className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">30</h4>
                </div>

                <div className="singleInfo grid px-3"> 
                   <GiPathDistance className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">0.7</h4>
                </div>



              </div>
          </div>

          


          <div className="singleRestuarant w-[220px] bg-colorOne p-3 rounded-[10px] ">
              <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
                <img src={food} alt="" className="w-full h-full object-cover" />
              </div>
              <h1 className="restName block text-center font-bold opacity-90 pt-4">Molef Ulif</h1>
              <small className="block text-center text-[#606060] font-medium">Asian Restautant</small>

              <div className="info mt-5 flex justify-center items-center ">
                <div className="singleInfo grid px-3"> 
                   <AiFillStar className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">3.7</h4>
                </div>

                <div className="singleInfo border-x-2 grid px-3"> 
                   <MdMonetizationOn className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">30</h4>
                </div>

                <div className="singleInfo grid px-3"> 
                   <GiPathDistance className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">0.7</h4>
                </div>



              </div>
          </div>



          <div className="singleRestuarant w-[220px] bg-colorOne p-3 rounded-[10px] ">
              <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
                <img src={food} alt="" className="w-full h-full object-cover" />
              </div>
              <h1 className="restName block text-center font-bold opacity-90 pt-4">Molef Ulif</h1>
              <small className="block text-center text-[#606060] font-medium">Asian Restautant</small>

              <div className="info mt-5 flex justify-center items-center ">
                <div className="singleInfo grid px-3"> 
                   <AiFillStar className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">3.7</h4>
                </div>

                <div className="singleInfo border-x-2 grid px-3"> 
                   <MdMonetizationOn className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">30</h4>
                </div>

                <div className="singleInfo grid px-3"> 
                   <GiPathDistance className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">0.7</h4>
                </div>



              </div>
          </div>




          <div className="singleRestuarant w-[220px] bg-colorOne p-3 rounded-[10px] ">
              <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
                <img src={food} alt="" className="w-full h-full object-cover" />
              </div>
              <h1 className="restName block text-center font-bold opacity-90 pt-4">Molef Ulif</h1>
              <small className="block text-center text-[#606060] font-medium">Asian Restautant</small>

              <div className="info mt-5 flex justify-center items-center ">
                <div className="singleInfo grid px-3"> 
                   <AiFillStar className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">3.7</h4>
                </div>

                <div className="singleInfo border-x-2 grid px-3"> 
                   <MdMonetizationOn className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">30</h4>
                </div>

                <div className="singleInfo grid px-3"> 
                   <GiPathDistance className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">0.7</h4>
                </div>



              </div>
          </div>




          <div className="singleRestuarant w-[220px] bg-colorOne p-3 rounded-[10px] ">
              <div className="imgDiv h-[130px] w-full overflow-hidden rounded-md">
                <img src={food} alt="" className="w-full h-full object-cover" />
              </div>
              <h1 className="restName block text-center font-bold opacity-90 pt-4">Molef Ulif</h1>
              <small className="block text-center text-[#606060] font-medium">Asian Restautant</small>

              <div className="info mt-5 flex justify-center items-center ">
                <div className="singleInfo grid px-3"> 
                   <AiFillStar className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">3.7</h4>
                </div>

                <div className="singleInfo border-x-2 grid px-3"> 
                   <MdMonetizationOn className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">30</h4>
                </div>

                <div className="singleInfo grid px-3"> 
                   <GiPathDistance className="flex  mt-auto justify-center items-center" />
                   <h4 className="font-semibold text-[#4f4d58]">0.7</h4>
                </div>



              </div>
          </div>




          

        </div>

      </div>
    </div>
  );
};

export default Body;
