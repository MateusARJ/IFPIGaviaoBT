import { ImageSourcePropType } from "react-native";

export class Categoria {
  constructor(
    private readonly _id: string,
    private readonly _nome: string,
    private readonly _corBorda: string,
    private readonly _corSeta: string,
    private readonly _imagem: ImageSourcePropType
  ) {}

  public get id(): string {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get corBorda(): string {
    return this._corBorda;
  }

  public get corSeta(): string {
    return this._corSeta;
  }

  public get imagem(): ImageSourcePropType {
    return this._imagem;
  }
}
