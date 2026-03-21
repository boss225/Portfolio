export interface Skill {
  name: string;
  years: string;
  lastUsed: string;
  isCurrent?: boolean;
}

export interface Tool {
  name: string;
  icon: string;
  color: string;
}

export interface Education {
  period: string;
  school: string;
  degree: string;
}

export interface Language {
  name: string;
  level: 'basic' | 'intermediate' | 'advanced';
}

export interface Experience {
  period: string;
  company: string;
  type: string;
  role: string;
  tasks: string[];
  isCurrent?: boolean;
}

export interface Project {
  period: string;
  name: string;
  tag: string;
  color: 'primary' | 'secondary' | 'tertiary';
  description: string;
  stack: string;
  team: string;
  tasks: string;
  link?: string;
  linkLabel?: string;
  linkIcon?: string;
  status?: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href?: string;
}
