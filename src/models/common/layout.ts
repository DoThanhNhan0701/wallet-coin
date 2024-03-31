export interface MenuInterface {
  id: string | number;
  link: string;
  title: string;
}

export interface IconSocialInterface {
  id: string | number;
  link: string;
  icon: HTMLImageElement;
}

export interface MenuContactInterface {
  id: string | number;
  title?: string;
  image?: IconSocialInterface[];
}

export interface LangInterface {
  id: string | number;
  icon: any;
  lang: string;
}
