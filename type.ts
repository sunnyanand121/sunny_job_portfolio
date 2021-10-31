import { IconType } from "react-icons";

export interface IService {
  title: string
  about: string
  Icon: IconType

}

export interface ISkill {
  name: string
  level: string
  Icon: IconType
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  duration: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  company: string;
  client: string;
  category: Category[];
  key_techs: string[];
  company_Icon: IconType;
  client_Icon: IconType;
}

export type Category = 'react' | 'angular' | 'express' | 'automation' | 'mongo';