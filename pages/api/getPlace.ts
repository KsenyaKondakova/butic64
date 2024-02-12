import { mongooseConnect } from '@/lib/mongoose';
import { Place } from '@/models/Place';
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
        const place = await Place.findOne({ _id: req.query.id });
        if (place) {
          res.json(place);
        } else {
          res.status(404).json({ error: 'Place not found' });
        }
      }
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
