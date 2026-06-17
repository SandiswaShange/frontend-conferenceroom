import { RoomResponse } from "@/types";

interface RoomCardProps {
  room: RoomResponse;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function RoomCard({room, isSelected, onSelect}: RoomCardProps) {
  return (
    <div className="border p-4 rounded" onClick={() => onSelect(room.id)}>
      <h2 className="text-xl font-semibold">
        {room.name}
      </h2>

      <p>
        Floor {room.floor} · Capacity {room.capacity} 
        ${!room.isAvailable && (<p className="text-sm text-gray-500 mt-2"> Next slot: 2:00 PM</p>
    )}  
      </p>

      <span
  className={`px-2 py-1 rounded text-sm
  ${
    room.isAvailable ? "bg-green-100 text-green-700": "bg-red-100 text-red-700"}`}>
  { room.isAvailable ? "Available": "Booked"}
    </span>

    </div>
  );
}//RoomCard function