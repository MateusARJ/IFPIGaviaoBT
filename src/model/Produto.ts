import { ImageSourcePropType } from "react-native";

export class Produto {
  constructor(
    private readonly _id: string,
    private readonly _categoriaId: string,
    private readonly _categoriaNome: string,
    private readonly _nome: string,
    private readonly _preco: number,
    private readonly _descricao: string,
    private readonly _proteinas: string,
    private readonly _carboidratos: string,
    private readonly _gorduras: string,
    private readonly _imagem: ImageSourcePropType,
    private readonly _imagemGrande?: ImageSourcePropType
  ) {}

  public get id(): string {
    return this._id;
  }

  public get categoriaId(): string {
    return this._categoriaId;
  }

  public get categoriaNome(): string {
    return this._categoriaNome;
  }

  public get nome(): string {
    return this._nome;
  }

  public get preco(): number {
    return this._preco;
  }

  public get descricao(): string {
    return this._descricao;
  }

  public get proteinas(): string {
    return this._proteinas;
  }

  public get carboidratos(): string {
    return this._carboidratos;
  }

  public get gorduras(): string {
    return this._gorduras;
  }

  public get imagem(): ImageSourcePropType {
    return this._imagem;
  }

  public get imagemGrande(): ImageSourcePropType {
    return this._imagemGrande || this._imagem;
  }

  public get precoFormatado(): string {
    return `R$ ${this._preco.toFixed(2).replace(".", ",")}`;
  }

  public calcularSubtotal = (quantidade: number): string => {
    const total = this._preco * quantidade;
    return `R$ ${total.toFixed(2).replace(".", ",")}`;
  };
}
