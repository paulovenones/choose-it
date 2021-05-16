/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { VercelRequest, VercelResponse } from '@vercel/node';
import { Db, MongoClient } from 'mongodb';
import { URL } from 'url';

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const { pathname } = new URL(uri);

  const dbName = pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const { title, description, options } = req.body;

  const db = await connectToDatabase(process.env.MONGODB_URI);

  const collection = db.collection('surveys');

  const surveyOptions = options.map((option) => ({ title: option, votes: 0 }));

  const survey = await collection.insertOne({
    title,
    description,
    surveyOptions,
    totalVotes: 0,
    created_at: new Date(),
    closed_at: null,
  });

  return res.status(200).json(survey.ops[0]);
};
