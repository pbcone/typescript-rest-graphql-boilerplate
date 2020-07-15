import AWS from 'aws-sdk';
import { getConfig } from '../config/config';

let _instance: AWS.DynamoDB.DocumentClient;

const config = getConfig();

export const getDatabaseClient = () => _instance || (_instance = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' }));
