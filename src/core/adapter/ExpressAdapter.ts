export default class ExpressAdapter {
  static create(fn: any) {
    return async (req: any, res: any) => {
      const obj = await fn(req.params, req.body);
      return res.json(obj);
    };
  }
}
