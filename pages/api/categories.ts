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
      if (req.query?.group) {
        if (req.query.group === 'lifestyle_group') {
          const category = await Category.find({ parent: null });

          const lifystyleItem: any = category.filter(
            (obj) => obj.name === 'стиль жизни',
          );
          const subCategories = await Category.find({
            parent: lifystyleItem[0].id,
          });
          res.json(subCategories);
        }
        if (req.query.group === 'beuty_group') {
          const category = await Category.find({ parent: null });

          const lifystyleItem: any = category.filter(
            (obj) => obj.name === 'BEAUTY',
          );
          const subCategories = await Category.find({
            parent: lifystyleItem[0].id,
          });
          res.json(subCategories);
        }
        if (req.query.group === 'fashion_group') {
          const category = await Category.find({ parent: null });

          const lifystyleItem: any = category.filter(
            (obj) => obj.name === 'FASHION',
          );
          const subCategories = await Category.find({
            parent: lifystyleItem[0].id,
          });
          res.json(subCategories);
        }
      }
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
