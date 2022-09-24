import ParkingLot, { ParkingLotProps } from "../entity/ParkingLot";

export default class ParkingLotAdapter {
  static create({
    code,
    capacity,
    openHour,
    closeHour,
    occupiedSpaces,
  }: ParkingLotProps) {
    return new ParkingLot({
      code,
      capacity,
      openHour,
      closeHour,
      occupiedSpaces,
    });
  }
}
