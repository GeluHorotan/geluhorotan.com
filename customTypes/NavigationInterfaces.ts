export interface INavigationButton {
  name: string;
  to: string;
  id: number;
}

export interface ISocialButton extends INavigationButton {
  isSocial: boolean;
  value: string;
  identifier: string;
}
