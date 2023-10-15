import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('652b940f23de17696219');

export const account = new Account(client);

export default client;
