import { StaticImageData } from 'next/image';

export interface IPlaceList {
  _id: number | null;
  title: string;
  description: string;
  images?: string[];
  category: string;
  news: NewsList[];
  afisha?: string[];
}

export interface IPlaceState {
  places: IPlaceList[];
  images: string[][];
  afisha: string[];
  news: NewsList[];
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
  parent: number | string | null;
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

export interface INewsState {
  newsList: NewsList[];
  newsInfo: NewsList;
}
export interface NewNewsForm {
  newsName: string;
  newsText: string;
}
export interface AfishaList {
  _id: number | string | null;
  image: string;
}
export interface IAfishaState {
  afishaList: AfishaList[];
  afishaInfo: AfishaList;
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
  afisha: string[];
}
export interface NewsProps {
  news: NewsList[];
}
export interface CardsProps {
  data: IPlaceList[];
}

export interface IPlacePageState {
  places: IPlaceList[];
  placeInfo: IPlaceList;
}

export interface IStarsState {
  stars: StarList[];
  starInfo: StarList;
}
