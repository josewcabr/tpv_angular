export interface CompraRes {
  amount: number;
  cliente: {
    id: number,
    name: string,
    lastName: string,
    phone: string
  };
  date: string;
  id: number;
  producto: {
    id: number,
    name: string,
    price: number
  };
}
