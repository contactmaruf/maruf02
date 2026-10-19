export type ProjectCategory = 
  | 'All'
  | 'Interactive Website'
  | 'AI Creative Experiment'
  | 'Motion Graphics Project'
  | 'Digital Brand Experience';

export interface Project {
  id: string;
  title: string;
  category: 'Interactive Website' | 'AI Creative Experiment' | 'Motion Graphics Project' | 'Digital Brand Experience';
  badge: 'Concept Project' | 'Demo' | 'Experimental';
  shortDescription: string;
  fullDescription: string;
  image: string;
  aspectRatio?: string;
  technologies: string[];
  deliverables: string[];
  features: string[];
  year: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'layout' | 'cpu' | 'play' | 'palette';
  deliverables: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
