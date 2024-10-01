import Priceable from "./Priceable";
import Specifications from "./Specifications";

export default interface Product extends Priceable {
  id: number;
  name: string;
  description: string;
  model: string;
  brand: string;
  image: string;
  note: number;
  videoReview: string;
  tags: string[];
  specifications: Specifications;

  //
  basePrice: number;
  promotionalPrice?: number;
  lowestPrice: number;
  middlePrice: number;
  highestPrice: number;
}
