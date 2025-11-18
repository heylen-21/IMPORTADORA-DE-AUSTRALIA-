
export interface Product {
  id: number;
  name: string;
  category: string;
  price?: number;
  imageUrl: string;
}

export interface Brand {
  id: number;
  name: string;
  logoUrl: string;
  description: string;
}

export interface Ally {
    id: number;
    name: string;
    logoUrl: string;
    description: string;
}
