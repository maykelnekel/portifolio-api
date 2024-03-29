export interface iMidias {
  _id?: string;
  nome: string;
  usuario: string;
  link: string;
}

export interface iFotos {
  _id?: string;
  link: string;
  descricao: string;
  categoria: string;
}

export interface iCategorias {
  _id?: string;
  categoria: string;
}

export interface iUser {
  _id?: string;
  email: string;
  telefone: string;
  senha: string;
  sobreMim: string;
  nome: string;
  sobrenome: string;
  fotos?: iFotos[];
  midias?: iMidias[];
  categorias?: iCategorias[];
}

export interface iUserResponse {
  _id?: string;
  email: string;
  telefone: string;
  sobreMim: string;
  nome: string;
  sobrenome: string;
  fotos: string;
  midias: string;
  categorias: string;
}
