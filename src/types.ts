export interface TestimonialReel {
  id: number;
  studentName: string;
  businessName: string;
  instagramHandle: string;
  driveId: string;
  thumbnailUrl?: string;
}

export interface CheckoutFormData {
  fullName: string;
  whatsapp: string;
  businessName: string;
  instagram: string;
  paymentMethod: 'credit_card' | 'pix';
  installments: number;
}
