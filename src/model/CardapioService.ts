import { CardapioDataSource } from "@/model/CardapioDataSource";
import { Categoria } from "@/model/Categoria";
import { Produto } from "@/model/Produto";

export class CardapioService {
  constructor(
    private readonly _dataSource: CardapioDataSource = new CardapioDataSource()
  ) {}

  public obterCategorias = async (): Promise<Categoria[]> => {
    return this._dataSource.buscarCategorias();
  };

  public obterProdutosPorCategoria = async (
    categoriaId: string
  ): Promise<Produto[]> => {
    if (!categoriaId) {
      return [];
    }
    return this._dataSource.buscarProdutosPorCategoria(categoriaId);
  };

  public obterProdutoPorId = async (
    produtoId: string
  ): Promise<Produto | null> => {
    if (!produtoId) {
      return null;
    }
    return this._dataSource.buscarProdutoPorId(produtoId);
  };

  public obterNomeExibicaoCategoria = (categoriaId: string): string => {
    switch (categoriaId) {
      case "comidas":
        return "Comidas";
      case "bebidas":
        return "Bebidas";
      default:
        return "Cardápio";
    }
  };
}
