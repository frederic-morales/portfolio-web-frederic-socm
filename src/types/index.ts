export interface Project {
  id: string;
  titleEs?: string;
  titleEn?: string;
  descriptionEs?: string;
  descriptionEn?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubUrl2?: string;
  corpLink?: string;
  corpName?: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
