export default interface Priceable {
  basePrice: number;
  promotionalPrice?: number;
  lowestPrice: number;
  middlePrice: number;
  highestPrice: number;
}
