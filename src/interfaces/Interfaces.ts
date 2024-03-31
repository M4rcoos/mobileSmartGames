export interface Subtitle {
  style: {
    color: string;
  };
}

export interface ModalStyles {
  content: React.CSSProperties;
  overlay: React.CSSProperties;
}

export interface IPlatform {
  idPlatform: number;
  namePlatform: string;
}

export interface IStore {
  adress: string;
  sales_quantity: number;
  name: string;
  linkMap: string;
  idStore: number;
}

export interface IGame {
  idGame: number;
  nameGame: string;
  description: string;
  linkImage: string;
  price: number;
  discount:number ,
  platforms: IPlatform[];
  stores: IStore[];
}