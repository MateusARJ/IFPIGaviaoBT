import { useEffect, useState } from "react";
import { router } from "expo-router";
import { CardapioService } from "@/model/CardapioService";
import { Categoria } from "@/model/Categoria";

export type HomeState = {
  categorias: Categoria[];
  carregando: boolean;
  erro: string | null;
};

export type HomeActions = {
  selecionarCategoria: (categoriaId: string) => void;
  recarregar: () => void;
};

const cardapioService = new CardapioService();

export const useHomeViewModel = (): [HomeState, HomeActions] => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregarCategorias = async (): Promise<void> => {
    try {
      setCarregando(true);
      setErro(null);
      const resultado = await cardapioService.obterCategorias();
      setCategorias(resultado);
    } catch (err: unknown) {
      setErro(err instanceof Error ? err.message : "Erro ao carregar categorias");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarCategorias();
  }, []);

  const selecionarCategoria = (categoriaId: string): void => {
    router.push(`/category/${categoriaId}` as any);
  };

  return [
    { categorias, carregando, erro },
    { selecionarCategoria, recarregar: carregarCategorias },
  ];
};
