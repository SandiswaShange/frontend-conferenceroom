export type BookingType =
  | "Meeting"
  | "ClientPresentation"
  | "Training"
  | "Maintenance"
  | "Conference";

export interface RoomResponse {
  id: string;
  name: string;
  floor: string;
  capacity: number;
  isAvailable: boolean;
  //type: BookingType = "Banana";
}

export interface BookingResponse {
  id: string;
  title: string;
  type: BookingType;
  roomName: string;
  floor: string;
  startTime: string;
  endTime: string;
  organizerEmail: string;
  attendeeCount: number;
  externalAttendees: string[];
}