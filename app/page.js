"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import RoomCard from "./components/RoomCard";
import Rooms from "./data/data";

export default function Home() {
  const [filteredRooms, setFilteredRooms] = useState(Rooms);

  return (
    <div>
      <Header setFilteredRooms={setFilteredRooms} />
      <div className="container mx-auto px-6 md:px-12 py-8">
        <h1 className="text-2xl font-bold mb-6">Available Rooms</h1>
        <div>
          {filteredRooms.length === 0 ? (
            <p className="text-center text-gray-500">No results found</p>
          ) : (
            filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
