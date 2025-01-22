"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import RoomCard from "./components/RoomCard";
import Rooms from "./data/data";

export default function Home() {
  const [filteredRooms, setFilteredRooms] = useState(Rooms);

  {filteredRooms.map((room) => {
    if (!room.id) {
      console.error('Room object is missing id:', room);
    }
    return <RoomCard key={room.id} room={room} />
  })}

  return (

    <div>
      <Header setFilteredRooms={setFilteredRooms} />
    <div className="container mx-auto px-6 md:px-12 py-8">
      <h1 className="text-2xl font-bold mb-6">Available Rooms</h1>
      <div>
        {filteredRooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
    </div>
  );
}
