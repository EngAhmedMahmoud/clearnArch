import Express from "express";
import ParkingLotController from "../../controller/ParkingLotController";
import ExpressAdapter from "../../core/adapter/ExpressAdapter";

const app = Express();
app.get(
  "/parkingLot/:code",
  ExpressAdapter.create(ParkingLotController.getParkingLot)
);

app.listen(3000);
