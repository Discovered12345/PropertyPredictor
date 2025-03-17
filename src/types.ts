export interface HousingData {
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  yearBuilt: number;
  price: number;
}

export interface PredictionInput {
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  yearBuilt: number;
  address?: string;
  placeId?: string;
}

export interface PropertyDetails {
  address: string;
  placeId: string;
  imageUrl?: string;
  streetView?: string;
  location: google.maps.LatLngLiteral;
}