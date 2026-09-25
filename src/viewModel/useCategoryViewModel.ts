import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { CardapioService } from "@/model/CardapioService";
import { Produto } from "@/model/Produto";

export type CategoryState = {
  produtos: Produto[];
  nomeCategoria: string;
  carregando: boolean;
  erro: string | null;
};

export type CategoryActions = {
  voltar: () => void;
  selecionarProduto: (produtoId: string) => void;
  recarregar: () => void;
};

const cardapioService = new CardapioService();

export const useCategoryViewModel = (): [CategoryState, CategoryActions] => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const categoriaId = Array.isArray(id) ? id[0] : (id ?? "");

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  const nomeCategoria = cardapioService.obterNomeExibicaoCategoria(categoriaId);

  const carregarProdutos = async (): Promise<void> => {
    if (!categoriaId) {
      setCarregando(false);
      return;
    }

    try {
      setCarregando(true);
      setErro(null);
      const resultado = await cardapioService.obterProdutosPorCategoria(
        categoriaId
      );
      setProdutos(resultado);
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : "Erro ao carregar produtos");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, [categoriaId]);

  const voltar = (): void => {
    router.back();
  };

  const selecionarProduto = (produtoId: string): void => {
    router.push(`/item/${produtoId}` as any);
  };

  return [
    { produtos, nomeCategoria, carregando, erro },
    { voltar, selecionarProduto, recarregar: carregarProdutos },
  ];
};
