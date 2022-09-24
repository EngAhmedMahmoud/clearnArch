export type ParkedCarProps = {
  code: string;
  date: Date;
  plate: string;
};
export default class ParkedCar {
  public readonly code: string;
  public readonly date: Date;
  public readonly plate: string;
  constructor({ code, date, plate }: ParkedCarProps) {
    if (!/[A-Z]{3}-[0-9]{4}/.test(plate))
      throw new Error("Invalid plate number");
    this.code = code;
    this.date = date;
    this.plate = plate;
  }
}
