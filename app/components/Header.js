"use client";

import React, { useState } from "react";
import Rooms from "../data/data";

const Header = ({ setFilteredRooms }) => {
  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(null); // Track which dropdown is open
  const [selectedFilters, setSelectedFilters] = useState({
    nsfas: "All",
    sharing: "All Sharing",
    price: "Price",
  }); // Track selected filters

  const filters = {
    nsfas: ["All", "NSFAS", "Private"],
    sharing: ["All Sharing", "Sharing", "No Sharing"],
    price: ["Price", "Low to High", "High to Low"],
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    const filtered = Rooms.filter(
      (room) =>
        room.city.toLowerCase().includes(value) ||
        room.suburb.toLowerCase().includes(value) ||
        room.street.toLowerCase().includes(value)
    );

    setFilteredRooms(filtered);
  };

  const handleFilterSelection = (filterType, selectedOption) => {
    setSelectedFilters((prev) => ({ ...prev, [filterType]: selectedOption }));
    setOpenFilter(null);
  
    let filtered = Rooms;
  
    // Apply NSFAS filter
    if (selectedFilters.nsfas !== "All" || filterType === "nsfas") {
      const nsfasOption =
        filterType === "nsfas" ? selectedOption : selectedFilters.nsfas;
      if (nsfasOption !== "All") {
        filtered = filtered.filter((room) => room.type === nsfasOption);
      }
    }
  
    // Apply Sharing filter
    if (selectedFilters.sharing !== "All Sharing" || filterType === "sharing") {
      const sharingOption =
        filterType === "sharing" ? selectedOption : selectedFilters.sharing;
      if (sharingOption !== "All Sharing") {
        filtered = filtered.filter((room) => room.sharing === sharingOption);
      }
    }
  
    // Apply Price filter
    if (selectedFilters.price !== "Price" || filterType === "price") {
      const priceOption =
        filterType === "price" ? selectedOption : selectedFilters.price;
      if (priceOption === "Low to High") {
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
      } else if (priceOption === "High to Low") {
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
      }
    }
  
    setFilteredRooms(filtered);
  };
  

  return (
    <header className="bg-[#E55821] text-white p-4">
      <div className="flex flex-col items-center">
      <div className="flex items-center space-x-2 mb-8">
  {/* "Roomify" Text */}
  <div className="text-2xl font-bold">Roomify</div>

  {/* ".com" Circle */}
  <div
    className="flex items-center justify-center w-10 h-10 rounded-full"
    style={{ backgroundColor: "#E55821", color: "#FFFFFF" }}
  >
    <span className="text-sm font-semibold" style={{ color: "#E55821", backgroundColor: "#FFFFFF", borderRadius: "50%", padding: "10px" }}>.com</span>
  </div>
</div>

        {/* Search Input */}
        <div className="relative w-full max-w-lg mb-5">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search For Cities, Suburbs, or Streets"
            className="w-full h-[77px] px-10 bg-white text-black placeholder-gray-500 rounded"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FF8600] w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mt-4 relative mb-5">
        {/* NSFAS or Private */}
        <div className="relative">
          <button
            className="bg-transparent border border-white text-white px-4 py-2 rounded flex items-center"
            onClick={() =>
              setOpenFilter(openFilter === "nsfas" ? null : "nsfas")
            }
          >
            {selectedFilters.nsfas}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-2 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openFilter === "nsfas" && (
            <ul className="absolute bg-white text-black bg-opacity-90 mt-2 rounded shadow">
              {filters.nsfas.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFilterSelection("nsfas", option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sharing or No Sharing */}
        <div className="relative">
          <button
            className="bg-transparent border border-white text-white px-4 py-2 rounded flex items-center"
            onClick={() =>
              setOpenFilter(openFilter === "sharing" ? null : "sharing")
            }
          >
            {selectedFilters.sharing}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-2 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openFilter === "sharing" && (
            <ul className="absolute bg-white text-black bg-opacity-90 mt-2 rounded shadow">
              {filters.sharing.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFilterSelection("sharing", option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price */}
        <div className="relative">
          <button
            className="bg-transparent border border-white text-white px-4 py-2 rounded flex items-center"
            onClick={() => setOpenFilter(openFilter === "price" ? null : "price")}
          >
            {selectedFilters.price}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="ml-2 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openFilter === "price" && (
            <ul className="absolute bg-white text-black bg-opacity-90 mt-2 rounded shadow">
              {filters.price.map((option, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleFilterSelection("price", option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
