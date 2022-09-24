export type ParkingLotProps = {
  code: string;
  capacity: number;
  openHour: number;
  closeHour: number;
  occupiedSpaces: number;
};
export default class ParkingLot {
  public readonly code: string;
  public readonly capacity: number;
  occupiedSpaces: number;
  public readonly openHour: number;
  public readonly closeHour: number;
  constructor({
    code,
    capacity,
    openHour,
    closeHour,
    occupiedSpaces,
  }: ParkingLotProps) {
    this.capacity = capacity;
    this.code = code;
    this.openHour = openHour;
    this.closeHour = closeHour;
    this.occupiedSpaces = occupiedSpaces;
  }
  isOpen(date: Date) {
    const hour = date.getHours();
    return hour >= this.openHour && hour <= this.closeHour;
  }
  isFull() {
    return this.capacity === this.occupiedSpaces;
  }
}
