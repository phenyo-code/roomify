import React from "react";
import { FaBed, FaUsers, FaCheckCircle } from "react-icons/fa";
import Link from 'next/link';

const RoomCard = ({ room }) => {
  const { id, price, bedrooms, suburb, images, sharing, type } = room;

  return (
    <div className="flex flex-col border rounded-lg shadow-md overflow-hidden mb-5 relative">
      {/* Room Image */}
      <Link href={`/rooms/${id}`} passHref>
        <div className="relative cursor-pointer">
          <img
            src={images[0]}
            alt={`Room in ${suburb}`}
            className="w-full object-cover"
            style={{ height: "260px" }}
          />

          {/* NSFAS/Private Box */}
          <div
            className="absolute right-2 bottom-0 px-4 py-2 text-white text-sm font-semibold flex flex-col items-center"
            style={{ backgroundColor: type === "NSFAS" ? "#E55821" : "#7DA0FB" }}
          >
            <span>{type}</span>
            <FaCheckCircle className="mt-1 text-white" />
          </div>
        </div>
      </Link>

      {/* Room Details */}
      <div className="p-4">
        {/* Price and Description */}
        <div className="flex items-center mb-2">
          <span className="text-[#E55821] text-lg font-bold mr-4">
            R{price}
          </span>
          <span className="text-gray-700 text-md">
            {bedrooms} Bedroom Residence in {suburb}
          </span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-1">
            <FaBed />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUsers />
            <span>{sharing}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
