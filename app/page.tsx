"use client";
import { useState } from "react"; //import state
//Part 3 import { RoomCard } from "@/components/RoomCard";
import { RoomList } from "@/components/RoomList";
import { RoomResponse } from "@/types";

const rooms: RoomResponse[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Board Room",
    floor: "Level 1",
    capacity: 12,
    isAvailable: true,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    name: "Meeting Room A",
    floor: "Ground Floor",
    capacity: 6,
    isAvailable: false,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    name: "Meeting Room B",
    floor: "Ground Floor",
    capacity: 8,
    isAvailable: true,
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    name: "Training Room",
    floor: "Level 2",
    capacity: 20,
    isAvailable: true,
  },
];
//Part 3
//const room: RoomResponse = {
//  id: "550e8400-e29b-41d4-a716-446655440000",
//  name: "Boardroom A",
//  floor: 1,
//  capacity: 12,
//  isAvailable: true,
//};

export default function Home() {
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const selectedRoom = rooms.find((room) => room.id === selectedRoomId) ?? null;
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        ConferenceHub
      </h1>
        {selectedRoom && (//part 5
    <div className="border rounded p-4 mb-6 bg-gray-100">
      <h2 className="font-bold text-lg">
        Selected Room
      </h2>

      <p>{selectedRoom.name}</p>
      <p>Floor: {selectedRoom.floor}</p>
      <p>Capacity: {selectedRoom.capacity}</p>
    </div>
  )}
      <RoomList rooms={rooms} selectedId={selectedRoomId} onSelect={setSelectedRoomId}/>
      
    </main>
    
    
  );
}
