export interface IProduct {
  id: string;
  image: string;
  images: string[];
  name: string;
  price: number;
  sizes: number[];
  description: string;
}
export type RootStackParamList = {
  Products: undefined;
  ProductsDetails: undefined;
  Cart: undefined;
};