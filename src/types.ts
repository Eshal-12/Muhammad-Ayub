export type PortfolioCategory =
  | 'All'
  | 'Field Monitoring'
  | 'Training & Seminars'
  | 'Country Engagement Working Group (CEWG)'
  | 'Inland Events'
  | 'Foreign Visits';

export interface PortfolioItem {
  id: string;
  title: string;
  date: string;
  category: Exclude<PortfolioCategory, 'All'>;
  location: string;
  description: string;
  fullNarrative?: string;
  outcomes?: string[];
  imageUrl: string;
  galleryImages?: string[];
  isFeatured?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  nameUrdu: string;
  percentage: number;
  description: string;
  keyAchivements: string[];
  iconName: string;
}

export interface DistrictFacility {
  id: string;
  name: string;
  type: 'Basic Health Unit (BHU)' | 'Community Health Center (CHC)' | 'Rural Health Center (RHC)' | 'Dispensary';
  location: string;
  timing: string;
  services: string[];
  phone: string;
  status: 'Fully Operational' | 'Inspection Completed' | 'Upgraded Facilities';
  lastInspected?: string;
}

export interface ResourceDocument {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'Policy & Strategy' | 'IEC Material' | 'Clinical Guidelines' | 'Annual Report';
  fileSize: string;
  format: 'PDF' | 'DOCX';
  date: string;
  downloads: number;
}

export interface MeetingRequest {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  purpose: string;
  preferredDate: string;
  message: string;
  referenceId?: string;
  submittedAt?: string;
}

export type Language = 'en' | 'ur';

export type TabType = 'home' | 'about' | 'portfolio' | 'skills' | 'outlets' | 'resources' | 'contact';
