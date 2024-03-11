import { mongooseConnect } from '@/lib/mongoose';
import { Star } from '@/models/Stars';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function apiHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const method: string | undefined = req.method;
    await mongooseConnect();

    if (method === 'GET') {
      if (req.query?.id) {
        const star = await Star.findOne({ _id: req.query.id });
        if (star) {
          res.json(star);
        } else {
          res.status(404).json({ error: 'Places not found' });
        }
      } else {
        const stars = await Star.find();
        res.json(stars);
      }
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
