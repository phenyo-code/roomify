"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import RoomCard from "./components/RoomCard";
import Rooms from "./data/data";
import { DefaultSeo } from "next-seo";

export default function Home() {
  const [filteredRooms, setFilteredRooms] = useState(Rooms);

  {filteredRooms.map((room) => {
    if (!room.id) {
      console.error('Room object is missing id:', room);
    }
    return <RoomCard key={room.id} room={room} />
  })}

  return (
    <>
      <DefaultSeo
        title="Rent Accommodations Online | Roomify"
        description="Find your perfect stay with a wide variety of accommodations tailored to your needs. Book online now for the best deals on cozy and comfortable rooms."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://roooomify.vercel.app/",
          site_name: "Roomify",
          images: [
            {
              url: "https://images.pexels.com/photos/279607/pexels-photo-279607.jpeg",
              width: 800,
              height: 600,
              alt: "Cozy Accommodation",
            },
          ],
        }}
      />
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
    </>
  );
}
