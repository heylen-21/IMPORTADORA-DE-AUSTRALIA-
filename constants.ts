
import { Product, Brand, Ally } from './types';

export const products: Product[] = [
  { id: 1, name: "Vino Australiano Premium", category: "Bebidas", price: 75, imageUrl: "https://picsum.photos/seed/wine/400/300" },
  { id: 2, name: "Miel de Manuka Orgánica", category: "Alimentos", price: 120, imageUrl: "https://picsum.photos/seed/honey/400/300" },
  { id: 3, name: "Cosmética Natural Eucalipto", category: "Cuidado Personal", imageUrl: "https://picsum.photos/seed/cosmetics/400/300" },
  { id: 4, name: "Artesanía de Madera Local", category: "Hogar", price: 250, imageUrl: "https://picsum.photos/seed/crafts/400/300" },
  { id: 5, name: "Snacks Saludables de Macadamia", category: "Alimentos", price: 35, imageUrl: "https://picsum.photos/seed/snacks/400/300" },
  { id: 6, name: "Aceite Esencial de Tea Tree", category: "Bienestar", imageUrl: "https://picsum.photos/seed/oil/400/300" },
  { id: 7, name: "Ropa de Lana Merino", category: "Moda", price: 450, imageUrl: "https://picsum.photos/seed/wool/400/300" },
  { id: 8, name: "Café de Especialidad de Byron Bay", category: "Bebidas", price: 55, imageUrl: "https://picsum.photos/seed/coffee/400/300" },
  { id: 9, name: "Protector Solar Mineral SPF 50+", category: "Cuidado Personal", price: 45, imageUrl: "https://picsum.photos/seed/sunscreen/400/300" },
  { id: 10, name: "Salsa BBQ Ahumada Outback", category: "Alimentos", price: 25, imageUrl: "https://picsum.photos/seed/bbq/400/300" },
  { id: 11, name: "Joyería de Ópalo Australiano", category: "Accesorios", imageUrl: "https://picsum.photos/seed/opal/400/300" },
  { id: 12, name: "Cuadernos de Arte Indígena", category: "Papelería", price: 60, imageUrl: "https://picsum.photos/seed/artbook/400/300" },
  { id: 13, name: "Botas de Cuero UGG Auténticas", category: "Moda", price: 220, imageUrl: "https://picsum.photos/seed/ugg/400/300" },
  { id: 14, name: "Infusión de Hierbas del Bush", category: "Bebidas", price: 30, imageUrl: "https://picsum.photos/seed/tea/400/300" },
  { id: 15, name: "Boomerang Decorativo Hecho a Mano", category: "Hogar", imageUrl: "https://picsum.photos/seed/boomerang/400/300" },
  { id: 16, name: "Chocolate con Nueces de Macadamia", category: "Alimentos", price: 28, imageUrl: "https://picsum.photos/seed/chocolate/400/300" },
];

export const brands: Brand[] = [
  { id: 1, name: "Outback Organics", logoUrl: "https://picsum.photos/seed/logo1/200/100", description: "Líderes en productos orgánicos del interior." },
  { id: 2, name: "Sydney Spirits", logoUrl: "https://picsum.photos/seed/logo2/200/100", description: "Destilería artesanal con sabores únicos." },
  { id: 3, name: "Merino Finest", logoUrl: "https://picsum.photos/seed/logo3/200/100", description: "La lana más suave y sostenible." },
  { id: 4, name: "Coastal Health", logoUrl: "https://picsum.photos/seed/logo4/200/100", description: "Bienestar inspirado en la costa australiana." },
  { id: 5, name: "Bush Tucker Treats", logoUrl: "https://picsum.photos/seed/logo5/200/100", description: "Sabores auténticos de la tierra." },
  { id: 6, name: "Great Barrier Skincare", logoUrl: "https://picsum.photos/seed/logo6/200/100", description: "Protección y cuidado natural para tu piel." },
];

export const allies: Ally[] = [
    { id: 1, name: "Global Logistics AU", logoUrl: "https://picsum.photos/seed/ally1/200/100", description: "Nuestro socio logístico para entregas eficientes." },
    { id: 2, name: "Port of Melbourne", logoUrl: "https://picsum.photos/seed/ally2/200/100", description: "Facilitando la importación a través del principal puerto." },
    { id: 3, name: "Aussie Customs Clear", logoUrl: "https://picsum.photos/seed/ally3/200/100", description: "Expertos en aduanas para un proceso sin contratiempos." },
];
