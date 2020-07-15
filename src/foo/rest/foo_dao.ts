import { getDatabaseClient } from '../../database/db_client';
import * as AWS from 'aws-sdk';
export const FOO_TABLE = 'foo';

export interface FooObject {
  text: string;
}

export interface CreateFoo {
  text: string;
}

export class FooDao {
  public static getInstance() {
    return this._instance || (this._instance = new FooDao());
  }

  private static _instance: FooDao;

  constructor(private dbClient: AWS.DynamoDB.DocumentClient = getDatabaseClient()) {}

  async find(): Promise<FooObject> {
    return new Promise((resolve, reject) => {
      try {
        // Get Stuff from DBclient here
        const result: FooObject = {
          text: 'pong',
        };
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }

  async create(todo: CreateFoo): Promise<CreateFoo> {
    return new Promise((resolve, reject) => {
      try {
        const result: CreateFoo = {
          text: 'placeholder',
        };
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
  }
}
