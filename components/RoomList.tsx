import { RoomResponse } from "@/types";
import { RoomCard } from "./RoomCard";

interface RoomListProps {
  rooms: RoomResponse[];
  selectedId: string | null;//part 5
  onSelect: (id: string) => void;//part 5
}

export function RoomList({ rooms, selectedId, onSelect }: RoomListProps) {
    if (rooms.length === 0) {
  return (
    <div className="text-center py-10">
      No conference rooms are currently available.
    </div>
    );
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {rooms.map((room) => (
        <RoomCard
          key={room.id}
          room={room}
          isSelected={room.id === selectedId}//part 5
          onSelect={onSelect}//part 5
        />
      ))}
    </div>
  );
}