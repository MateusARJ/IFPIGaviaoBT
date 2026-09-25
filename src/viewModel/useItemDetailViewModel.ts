import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { CardapioService } from "@/model/CardapioService";
import { Produto } from "@/model/Produto";

export type ItemDetailState = {
  produto: Produto | null;
  quantidade: number;
  carregando: boolean;
  erro: string | null;
};

export type ItemDetailActions = {
  incrementarQuantidade: () => void;
  decrementarQuantidade: () => void;
  voltar: () => void;
  recarregar: () => void;
};

const cardapioService = new CardapioService();

export const useItemDetailViewModel = (): [
  ItemDetailState,
  ItemDetailActions
] => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const itemId = Array.isArray(id) ? id[0] : (id ?? "");

  const [produto, setProduto] = useState<Produto | null>(null);
  const [quantidade, setQuantidade] = useState<number>(1);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregarDetalhes = async (): Promise<void> => {
    if (!itemId) {
      setCarregando(false);
      return;
    }

    try {
      setCarregando(true);
      setErro(null);
      const resultado = await cardapioService.obterProdutoPorId(itemId);
      setProduto(resultado);
    } catch (err: unknown) {
      setErro(
        err instanceof Error
          ? err.message
          : "Erro ao buscar detalhes do produto"
      );
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarDetalhes();
  }, [itemId]);

  const incrementarQuantidade = (): void => {
    setQuantidade((prev) => prev + 1);
  };

  const decrementarQuantidade = (): void => {
    if (quantidade > 1) {
      setQuantidade((prev) => prev - 1);
    }
  };

  const voltar = (): void => {
    router.back();
  };

  return [
    { produto, quantidade, carregando, erro },
    {
      incrementarQuantidade,
      decrementarQuantidade,
      voltar,
      recarregar: carregarDetalhes,
    },
  ];
};
