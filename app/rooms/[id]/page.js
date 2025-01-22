"use client";

import React from "react";
import Rooms from "@/app/data/data";
import { FaBed, FaUsers, FaCouch, FaWifi, FaPhone, FaEnvelope } from "react-icons/fa";

const RoomDetails = ({ params }) => {
  const { id } = React.use(params);

  const room = Rooms.find((r) => r.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  const { price, bedrooms, suburb, images, sharing, type, street, description } = room;

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.target.scrollLeft; // Current scroll position
    const containerWidth = event.target.offsetWidth; // Width of the scrollable area
    const imageWidth = containerWidth; // Width of each image visible

    if (containerWidth > 0 && images.length > 0) {
      // Calculate the current image index
      const newIndex = Math.round(scrollPosition / imageWidth);
      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center bg-[#E55821] text-white p-4">
        <div className="flex items-center space-x-2 mb-8">
          {/* "Roomify" Text */}
          <div className="text-2xl font-bold">Roomify</div>

          {/* ".com" Circle */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-full"
            style={{ backgroundColor: "#E55821", color: "#FFFFFF" }}
          >
            <span
              className="text-sm font-semibold"
              style={{
                color: "#E55821",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              .com
            </span>
          </div>
        </div>
      </div>

      <div>
        {/* Full width carousel */}
        <div className="overflow-x-scroll overflow-hidden flex">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${images.length * 100}%`, display: 'flex' }}
            onScroll={handleScroll}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Room in ${suburb}`}
                className="w-screen object-cover h-screen flex-shrink-0"
                style={{ width: '100vw' }}
              />
            ))}
          </div>
          <div className="absolute -mb-20 bottom-0 w-full flex justify-center">
          {/* Image Indicator */}
          <div
            className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-center font-sm"
            style={{
              zIndex: 10, /* Ensure it stays above images */
              position: 'absolute', 
              bottom: '47%',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '5px 10px',
              borderRadius: '5px',
              fontSize: '10px',
              pointerEvents: 'none',
            }}
          >
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
        </div>

        
        <div className="shadow-md ">
        <div className="md:ml-6 mt-4 ">
          <h1 className="text-3xl font-bold mb-4 text-[#E55821]">
            R{price}
          </h1>
          <p className="text-lg text-gray-700 mb-2">{bedrooms} Bedroom in {suburb}</p>
          <p className="text-lg text-[#7DA0FB] mb-6 pb-4">{street}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      </div>



    <div className="shadow-md  shadow-mt mb-6" >
      {/* Static description section */}
      <div className="mt-8 ml-4">
        <h2 className="text-1xl font-bold mb-4 text-[#424242]">Description</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae ligula et augue sodales ullamcorper. Suspendisse at erat ut lectus condimentum volutpat. Curabitur feugiat nulla at fringilla cursus. Integer facilisis urna id justo congue, at pretium libero efficitur. Nullam ut ex sit amet nisl condimentum laoreet. Duis pretium ipsum at volutpat feugiat.
            </p>
            <p className="text-gray-600 mt-4 pb-6">
              Morbi vehicula augue ut lectus gravida, at laoreet urna vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean ut est vel velit malesuada condimentum. Nullam at lorem id arcu hendrerit iaculis vitae id enim.
           </p>
      </div>
    </div>

    <div className="shadow-md  mb-6  shadow-mt">
  {/* Amenities Section */}
  <div className="mt-6 w-full max-w-3xl px-4 p-4 rounded-lg">
    <div className="items-center space-x-4 mb-4"> {/* Increased space here */}
      <div className="flex items-center space-x-2 ml-5 mb-8">
        <FaBed className="text-gray-600" />
        <span>{room.bedrooms}</span>
      </div>
      <div className="flex items-center space-x-2 mb-8">
        <FaUsers className="text-gray-600" />
        <span>{room.sharing}</span>
      </div>
      <div className="flex items-center space-x-2 mb-8">
        <FaCouch className="text-gray-600" />
        <span>{room.furnished ? "Furnished" : "Unfurnished"}</span>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <FaWifi className="text-gray-600" />
        <span>{room.wifi ? "WiFi" : "No WiFi"}</span>
      </div>
    </div>
  </div>
</div>

<div className="shadow-md  mb-6  shadow-mt">
<div className="mt-6 w-full max-w-3xl px-4 bg-white  flex justify-between items-center pb-4">
  <div className="flex space-x-4">
    <button className="flex items-center border border-[#E55821] px-4 py-2 rounded-md text-[#E55821]">
      <FaPhone className="mr-2" /> Call
    </button>
    <button className="flex items-center bg-[#E55821] text-white px-4 py-2 rounded-md">
      <FaEnvelope className="mr-2" /> Message
    </button>
  </div>
</div>
</div>


    </div>
  );
};

export default RoomDetails;




