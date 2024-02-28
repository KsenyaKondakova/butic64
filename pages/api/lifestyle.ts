import { mongooseConnect } from '@/lib/mongoose';
import { Category } from '@/models/Category';
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
      const category = await Category.find({ parent: null });

      const lifystyleItem: any = category.filter(
        (obj) => obj.name === 'стиль жизни',
      );
      const subCategories = await Category.find({
        parent: lifystyleItem[0].id,
      });
      const categoryIds = subCategories
        .map((subCat) => subCat._id)
        .concat(lifystyleItem[0]._id);
      const establishments = await Place.find({
        category: { $in: categoryIds },
      });
      res.json({ establishments, subCategories });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
