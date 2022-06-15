export interface iMidias {
    id?: string
    nome: string
    usuario: string
    link: string
}

export interface iFotos {
    id?: string
    link: string
    descricao: string
    categoria: string
}

export interface iUser {
    id?: string
    login: string
    email: string
    telefone: string
    senha: string
    sobreMim: string
    nome: string
    sobrenome: string
    fotos?: iFotos[]
    midias?: iMidias[]
    categorias?: string[]
}