export interface IContactFormParams {
  [x: string]: any;
  full_name: string;
  phone: number;
  message: string;
  email: string;
  subject: string;
}

export interface IMessage {
  full_name: string;
  phone: number;
  message: string;
  email: string;
  subject: string;
}
