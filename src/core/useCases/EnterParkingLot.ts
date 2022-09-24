import ParkedCar from "../entity/ParkedCar";
import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export class EnterParkingLot {
  parkingLotRepository: ParkingLotRepository;
  constructor(parkingLotRepository: ParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository;
  }
  async execute(code: string, plate: string, date: Date): Promise<ParkingLot> {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code);
    if (!parkingLot.isOpen(date))
      throw new Error("Sorry this parking is closed");
    if (parkingLot.isFull()) {
      throw new Error("Parking lot is full");
    }
    const parkedCar = new ParkedCar({
      code,
      plate,
      date,
    });
    await this.parkingLotRepository.saveParkedCar(parkedCar);
    return parkingLot;
  }
}
