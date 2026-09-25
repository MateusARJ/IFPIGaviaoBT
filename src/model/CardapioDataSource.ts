import { Categoria } from "@/model/Categoria";
import { Produto } from "@/model/Produto";

const DELAY_MS = 600;

export class CardapioDataSource {
  private readonly _categorias: Categoria[];
  private readonly _produtos: Produto[];

  constructor() {
    this._categorias = [
      new Categoria(
        "comidas",
        "Comidas",
        "#501673",
        "#501673",
        require("../../assets/images/menu/categoria-comidas.png")
      ),
      new Categoria(
        "bebidas",
        "Bebidas",
        "#1b873f",
        "#1b873f",
        require("../../assets/images/menu/categoria-bebidas.png")
      ),
    ];

    this._produtos = [
      new Produto(
        "pastel-de-carne",
        "comidas",
        "Comida",
        "Pastel de Carne",
        6.0,
        "Pastel frito na hora bem crocante e sequinho, com recheio farto de carne moída selecionada, temperada com cheiro verde e azeitonas.",
        "14g",
        "32g",
        "18g",
        require("../../assets/images/menu/pastel-de-carne.png"),
        require("../../assets/images/menu/pastel-de-carne.png")
      ),
      new Produto(
        "coxinha-de-frango",
        "comidas",
        "Comida",
        "Coxinha de Frango",
        7.0,
        "Clássica coxinha de frango com massa macia de batata, empanada crocante dourada por fora e recheio de peito de frango desfiado com requeijão.",
        "18g",
        "38g",
        "15g",
        require("../../assets/images/menu/coxinha-de-frango.png"),
        require("../../assets/images/menu/coxinha-de-frango.png")
      ),
      new Produto(
        "cuscuz-com-ovo",
        "comidas",
        "Comida",
        "Cuscuz com Ovo",
        8.0,
        "Tradicional cuscuz nordestino de milho flocado feito no vapor, servido quentinho com ovo frito na manteiga da terra e uma pitada de sal.",
        "12g",
        "40g",
        "9g",
        require("../../assets/images/menu/cuscuz-com-ovo.png"),
        require("../../assets/images/menu/cuscuz-com-ovo.png")
      ),
      new Produto(
        "arrumadinho-completo",
        "comidas",
        "Comida",
        "Arrumadinho Completo",
        14.0,
        "Carne de sol desfiada, arroz branco soltinho e creme de galinha caseiro.",
        "22g",
        "45g",
        "12g",
        require("../../assets/images/menu/arrumadinho-completo.png"),
        require("../../assets/images/menu/arrumadinho-completo-large.png")
      ),
      new Produto(
        "suco-de-laranja",
        "bebidas",
        "Bebida",
        "Suco de Laranja",
        7.0,
        "Suco 100% natural de laranjas frescas espremidas na hora, sem conservantes, servido com gelo bem refrescante.",
        "2g",
        "26g",
        "0g",
        require("../../assets/images/menu/suco-de-laranja.png"),
        require("../../assets/images/menu/suco-de-laranja.png")
      ),
      new Produto(
        "refrigerante-lata",
        "bebidas",
        "Bebida",
        "Refrigerante Lata",
        5.0,
        "Refrigerante geladíssimo em lata 350ml. Escolha entre Coca-Cola tradicional, Coca-Cola Zero ou Guaraná Antarctica.",
        "0g",
        "37g",
        "0g",
        require("../../assets/images/menu/refrigerante.png"),
        require("../../assets/images/menu/refrigerante.png")
      ),
      new Produto(
        "cafe-expresso",
        "bebidas",
        "Bebida",
        "Café Expresso",
        4.0,
        "Café expresso curto encorpado e aromático, feito com grãos especiais moídos na hora, com crema espessa e sabor marcante.",
        "0g",
        "1g",
        "0g",
        require("../../assets/images/menu/cafe-expresso.png"),
        require("../../assets/images/menu/cafe-expresso.png")
      ),
      new Produto(
        "suco-acerola",
        "bebidas",
        "Bebida",
        "Suco de Acerola",
        6.5,
        "Suco de acerola com polpa pura, fonte concentrada de vitamina C e antioxidantes, servido com pedras de gelo.",
        "1g",
        "15g",
        "0g",
        require("../../assets/images/menu/suco-acerola.png"),
        require("../../assets/images/menu/suco-acerola.png")
      ),
    ];
  }

  private aguardarDelay = async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, DELAY_MS));
  };

  public buscarCategorias = async (): Promise<Categoria[]> => {
    await this.aguardarDelay();
    return [...this._categorias];
  };

  public buscarProdutosPorCategoria = async (
    categoriaId: string
  ): Promise<Produto[]> => {
    await this.aguardarDelay();
    return this._produtos.filter(
      (produto) => produto.categoriaId === categoriaId
    );
  };

  public buscarProdutoPorId = async (
    produtoId: string
  ): Promise<Produto | null> => {
    await this.aguardarDelay();
    const produtoEncontrado = this._produtos.find((p) => p.id === produtoId);
    return produtoEncontrado ?? null;
  };
}
