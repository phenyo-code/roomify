"use client";  // Enable client-side features

import React, { useEffect } from "react";
import { useRouter } from "next/router";  // Import the router from next/router
import Rooms from "@/app/data/data";
import { FaBed, FaUsers, FaCouch, FaWifi } from 'react-icons/fa';


export default function RoomDetails() {
  const router = useRouter();  // Using next/router for client-side routing

  useEffect(() => {
    if (!router) {
      console.error("NextRouter was not mounted.");  // Handle the case if router is not mounted
    }
  }, []);

  const id = router?.query?.id;  // Safely access the id from the query

  if (!id) {
    return <p>Loading room details...</p>;  // Show loading message if id is not found
  }

  const room = Rooms.find((room) => room.id === parseInt(id, 10));

  if (!room) {
    return <p>Room not found</p>;  // Show message if room is not found
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="text-2xl font-bold">Roomify</div>
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full"
          style={{ backgroundColor: "#E55821", color: "#FFFFFF" }}
        >
          <span className="text-sm font-semibold">.com</span>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="relative w-full max-w-3xl h-96 overflow-hidden">
        <div className="flex space-x-4 w-full">
          {room.images.map((image, index) => (
            <div key={index} className="flex-none w-full h-full">
              <img src={image} alt={`Room ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-1 px-3 rounded-full">
          {room.images.length} images
        </div>
      </div>

      {/* Price and Room Info Section */}
      <div className="mt-6 w-full max-w-3xl px-4">
        <div className="text-3xl font-bold mb-2">${room.price}</div>
        <div className="text-lg mb-2">{room.bedrooms} bedroom Residence in {room.suburb}</div>
        <div className="text-sm mb-4">{room.street}</div>
      </div>

      {/* Room Type Section */}
      <div className="mt-6 w-full max-w-3xl px-4 bg-white shadow-md p-4 rounded-lg">
        <div className="text-xl font-bold mb-2">Room Type: {room.type}</div>
      </div>

      {/* Description Section */}
      <div className="mt-6 w-full max-w-3xl px-4 bg-white shadow-md p-4 rounded-lg">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      {/* Amenities Section */}
      <div className="mt-6 w-full max-w-3xl px-4 bg-white shadow-md p-4 rounded-lg">
        <div className="flex items-center space-x-4 mb-2">
          <div className="flex items-center space-x-2">
            <FaBed className="text-gray-600" />
            <span>{room.bedrooms}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-gray-600" />
            <span>{room.sharing}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCouch className="text-gray-600" />
            <span>{room.furnished ? "Yes" : "No"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaWifi className="text-gray-600" />
            <span>{room.wifi ? "Yes" : "No"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
