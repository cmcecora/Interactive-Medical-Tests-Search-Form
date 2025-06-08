import { MedicalTest } from './types';
export const mockMedicalTests: MedicalTest[] = [{
  id: '1',
  name: 'Complete Blood Count (CBC)',
  category: 'Blood Test',
  description: 'Measures red and white blood cells, platelets, hemoglobin, and hematocrit levels.',
  imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  duration: '5-10 minutes',
  preparation: 'No special preparation needed'
}, {
  id: '2',
  name: 'Magnetic Resonance Imaging (MRI)',
  category: 'Imaging',
  description: 'Uses magnetic fields and radio waves to create detailed images of organs and tissues.',
  imageUrl: 'https://images.unsplash.com/photo-1516069677022-d20ef84d4220?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  duration: '30-60 minutes',
  preparation: 'Remove metal objects'
}, {
  id: '3',
  name: 'Electrocardiogram (ECG/EKG)',
  category: 'Cardiac',
  description: 'Records electrical signals in your heart to check for various heart conditions.',
  imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  duration: '5-10 minutes',
  preparation: 'No special preparation needed'
}, {
  id: '4',
  name: 'Comprehensive Metabolic Panel (CMP)',
  category: 'Laboratory',
  description: 'Measures glucose, electrolytes, fluid balance, and kidney and liver function.',
  duration: '5 minutes',
  preparation: 'Fasting for 8-12 hours may be required'
}, {
  id: '5',
  name: 'X-Ray',
  category: 'Imaging',
  description: 'Uses radiation to produce images of structures inside the body, especially bones.',
  imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  duration: '10-15 minutes',
  preparation: 'Remove metal objects and jewelry'
}, {
  id: '6',
  name: 'Biopsy',
  category: 'Pathology',
  description: 'Removal of tissue sample for examination to determine presence of disease.',
  duration: '15-30 minutes',
  preparation: 'Varies depending on biopsy type'
}, {
  id: '7',
  name: 'Colonoscopy',
  category: 'Procedure',
  description: 'Examination of the large intestine using a flexible camera to detect abnormalities.',
  imageUrl: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  duration: '30-60 minutes',
  preparation: 'Bowel preparation required'
}, {
  id: '8',
  name: 'Thyroid Function Tests',
  category: 'Blood Test',
  description: 'Measures thyroid hormone levels to evaluate thyroid gland function.',
  duration: '5 minutes',
  preparation: 'May require fasting'
}, {
  id: '9',
  name: 'Computed Tomography (CT) Scan',
  category: 'Imaging',
  description: 'Uses X-rays and computer processing to create detailed images of the body.',
  imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  duration: '10-30 minutes',
  preparation: 'Contrast dye may be used'
}, {
  id: '10',
  name: 'Blood Pressure Measurement',
  category: 'Vital Signs',
  description: 'Measures the force of blood against artery walls to assess cardiovascular health.',
  duration: '1-2 minutes',
  preparation: 'Rest for 5 minutes before test'
}];