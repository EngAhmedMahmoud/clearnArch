import { EnterParkingLot } from "../src/core/useCases/EnterParkingLot";
import { GetParkingLot } from "../src/core/useCases/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";

test("Should enter parking slot", async () => {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
  const parkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  const parkingLotBeforeEnter = parkingLot.execute("shopping");
  expect((await parkingLotBeforeEnter).occupiedSpaces).toBe(0);
  await enterParkingLot.execute("shopping", "MAX-9098", new Date());
  await enterParkingLot.execute("shopping", "MAX-9098", new Date());
  expect((await parkingLotBeforeEnter).occupiedSpaces).toBe(1);
});
