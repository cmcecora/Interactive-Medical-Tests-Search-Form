export interface MedicalTest {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl?: string;
  duration?: string;
  preparation?: string;
}