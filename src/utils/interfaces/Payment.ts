export interface Payment {
  id?: number;
  name: string;
  username?: string;
  title: string;
  value: any;
  date: string;
  image?: string;
  isPayed?: boolean;
}
