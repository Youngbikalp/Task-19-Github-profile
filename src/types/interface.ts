export interface IProfile {
  name: string;
  avatar_url: string;
  html_url: string;
  created_at: string;
  public_repos: number;
}

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
}

export interface IProfileCard {
  profile: IProfile | null;
}

export interface IReposArrayProps {
  repos: IRepo[];
}
