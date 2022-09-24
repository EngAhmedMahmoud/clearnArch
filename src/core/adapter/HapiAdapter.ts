export default class HapiAdapter {
  static create(func: any) {
    return async (req: any, res: any, next: any) => {
      const obj = await func(req.params, req.payload);
      return obj;
    };
  }
}
