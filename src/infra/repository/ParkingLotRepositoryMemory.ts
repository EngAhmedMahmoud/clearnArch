import ParkingLotAdapter from "../../core/adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory
  implements ParkingLotRepository
{
  parkingLot = [
    {
      code: "shopping",
      capacity: 10,
      openHour: 10,
      closeHour: 23,
    },
  ];
  parkedCars: ParkedCar[] = [];

  saveParkedCar(parkedCar: ParkedCar): Promise<ParkedCar> {
    const newParkingCar = new ParkedCar(parkedCar);
    this.parkedCars.push(newParkingCar);
    return Promise.resolve(newParkingCar);
  }
  getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLot = this.parkingLot.find((element) => element.code === code);
    const occupiedSpaces = this.parkedCars.length;
    const parkingLotCreation = ParkingLotAdapter.create({
      code,
      capacity: parkingLot?.capacity || 0,
      openHour: parkingLot?.openHour || 0,
      closeHour: parkingLot?.closeHour || 0,
      occupiedSpaces,
    });
    return Promise.resolve(parkingLotCreation);
  }
}
