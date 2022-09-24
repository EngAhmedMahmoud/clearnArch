import { GetParkingLot } from "../core/useCases/GetParkingLot";
import ParkingLotRepositoryMemory from "../infra/repository/ParkingLotRepositoryMemory";

export default class ParkingLotController {
  static async getParkingLot(params: any) {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const parkingLot = new GetParkingLot(parkingLotRepositoryMemory);
    const data = await parkingLot.execute(params.code);
    return data;
  }
}
