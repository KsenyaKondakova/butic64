import { StaticImageData } from 'next/image';

export interface IPlaceList {
  _id: number | null;
  title: string;
  description: string;
  images?: string[];
  category: string;
  news: NewsList[];
  afisha?: string[];
  dateImages?: string;
  logo?: string[];
}

export interface IPlaceState {
  places: IPlaceList[];
  images: string[][];
  afisha: IAfishaWithParent[];
  news: NewsList[];
  isLoading: boolean;
}
export interface ICategorList {
  _id: number | string | null;
  name: string;
  parent: ICategorList | string | null;
}
export interface ICategoryState {
  categoryList: ICategorList[];
  parentCategory: ICategorList | string | null;
  editedCategory: ICategorList | null | string;
}
export interface NewsList {
  _id: number | string | null;
  newsName: string;
  newsText: string;
  parent?: number | string | null;
  date: string;
}
export interface NewPlaceForm {
  placeName: string;
  descriptionPlace: string;
  images: string[];
  category: string;
  news: NewsList[];
}
export interface NewCategoryForm {
  categoryName: string;
}

export interface NewNewsForm {
  newsName: string;
  newsText: string;
}
export interface AfishaList {
  _id?: number | string | null;
  image: string;
  parent?: number | string | null;
}

export interface NewAfishaForm {
  image: string;
}
export interface StarList {
  _id: number | null;
  name: string;
  secondName: string;
  description: string;
  subdescription: string;
  images?: string[];
}

export type DoubleStringArray = string[][];

export interface MainCardProps {
  title: string;
  text: string;
  image: StaticImageData;
  gridClass: string;
  link: string;
}

export interface AfishaProps {
  afisha: AfishaList[];
  title: string;
}
export interface NewsProps {
  news: NewsList[];
  title: string;
}
export interface CardsProps {
  data: IPlaceList[];
  categories: ICategorList[];
}

export interface IPlacePageState {
  places: IPlaceList[];
  placeInfo: IPlaceList;
  categories: ICategorList[];
}

export interface IStarsState {
  stars: StarList[];
  starInfo: StarList;
}
export interface INewsState {
  news: NewsList[];
  mergeNews: NewsList[];
}
export interface IAfishaWithParent {
  image: string;
  parent?: number | string | null;
}

export interface IAfishaState {
  afisha: AfishaList[];
  mergeAfisha: AfishaList[];
}
