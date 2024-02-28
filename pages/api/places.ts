import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/Category';
import { Place } from '@/models/Place';
import { convertISOToCustomFormat } from '@/utils/date';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function apiHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const method: string | undefined = req.method;
    await mongooseConnect();

    if (method === 'GET') {
      const placesGet = await Place.find().sort({ dateImages: -1 });
      const places = placesGet.map((place) => ({
        ...place._doc,
        dateImages: convertISOToCustomFormat(place.dateImages),
      }));
      res.json(places);
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
