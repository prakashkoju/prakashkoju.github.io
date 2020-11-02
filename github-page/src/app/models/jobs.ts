export interface Job {
  company: string;
  location: string;
  direct: boolean;
  client?: string;
  role: string;
  tasks: string[];
  technologies: string[];
  from: string;
  to: string;
}
