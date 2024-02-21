import { mongooseConnect } from '@/lib/mongoose';
import { News } from '@/models/News';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function apiHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const method: string | undefined = req.method;
    await mongooseConnect();

    if (method === 'GET') {
      const news = await News.find();

      res.json(news);
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
