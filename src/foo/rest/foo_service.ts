import { FooDao } from './foo_dao';

export class FooService {
  public static getInstance() {
    return this._instance || (this._instance = new FooService());
  }

  private static _instance: FooService;

  constructor(private fooDAO: FooDao = FooDao.getInstance()) {}

  async ping(): Promise<string> {
    const { text: result } = await this.fooDAO.find();

    return result;
  }
}
