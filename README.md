# 🦅 IFPI Gavião - Cardápio Digital (Refatoração MVVM Simplificado)

> **Atividade Prática de Programação para Dispositivos Móveis (PDM) - IFPI**  
> **Professor:** Iallen Gábio de Sousa Santos
> **Aluno:** Mateus de Araujo
---

## Sobre o Projeto

O **IFPI Gavião** é um aplicativo de cardápio digital desenvolvido com **React Native**, **Expo (v57)** e **TypeScript** para a lanchonete institucional fictícia do IFPI Campus Piripiri.

O projeto original encontrava-se no padrão didático denominado **"Big Tripe"** (monolítico, com regras de negócio, dados assíncronos e navegação misturados na interface). Esta versão foi **completamente refatorada** para adotar o padrão arquitetural **MVVM Simplificado**, conforme descrito no livro didático (*Tutoriais de PDM*, Capítulo 8) e nas diretrizes da disciplina.

---

## Arquitetura MVVM Simplificada

A aplicação está dividida em camadas bem definidas e desacopladas:

```text
src/
├── app/                             # Rotas finas do Expo Router (apenas reexportações das Views)
│   ├── _layout.tsx                  # Layout raiz com configuração do Stack
│   ├── index.tsx                    # Rota raiz (/)
│   ├── category/
│   │   └── [id].tsx                 # Rota dinâmica de categoria (/category/:id)
│   └── item/
│       └── [id].tsx                 # Rota dinâmica de produto (/item/:id)
├── model/                           # Domínio e Acesso a Dados sob POO
│   ├── Categoria.ts                 # Entidade Categoria com atributos privados e getters
│   ├── Produto.ts                   # Entidade Produto com formatação e métodos de domínio
│   ├── CardapioDataSource.ts        # DataSource simulando banco assíncrono com latência (I/O)
│   └── CardapioService.ts           # Service isolando regras de negócio e orquestração
├── viewModel/                       # Lógica de Apresentação e Navegação
│   ├── useHomeViewModel.ts          # ViewModel da Tela Inicial [HomeState, HomeActions]
│   ├── useCategoryViewModel.ts      # ViewModel da Listagem de Categoria [CategoryState, CategoryActions]
│   └── useItemDetailViewModel.ts    # ViewModel dos Detalhes [ItemDetailState, ItemDetailActions]
└── view/                            # Camada de Interface (Views puras)
    ├── index.tsx                    # Tela Inicial (Grade de Categorias)
    ├── category/
    │   └── [id].tsx                 # Tela de Listagem de Itens da Categoria
    └── item/
        └── [id].tsx                 # Tela de Detalhes do Produto selecionado
```

### Padrões e Convenções Adotados

1. **Estrita Orientação a Objetos (POO)**:
   - Entidades de domínio modeladas como classes com encapsulamento (`private readonly`), construtores tipados, getters públicos e métodos de domínio (`precoFormatado`, `calcularSubtotal`).
   - `CardapioDataSource` e `CardapioService` modelados como classes que encapsulam o acesso aos dados e a lógica da aplicação.
2. **Contrato de ViewModel com Tuplas `[State, Actions]`**:
   - As ViewModels são Custom Hooks que expõem uma tupla tipada contendo os estados observáveis e as ações disponíveis para a tela.
   - Toda navegação imperativa (`router.push`, `router.back`) e leitura de parâmetros (`useLocalSearchParams`) fica centralizada na ViewModel.
3. **Views 100% Desacopladas**:
   - As telas em `src/view/` apenas consomem sua respectiva ViewModel, mantendo fidelidade total ao design e cores originais (`#501673`, verde `#248232`).
4. **Rotas Finas no Expo Router**:
   - Os arquivos de rota em `src/app/` apenas reexportam os componentes das telas de `src/view/`.
5. **Funções Anônimas (Arrow Functions)**:
   - Todos os componentes, hooks e métodos seguem a convenção de arrow functions (`const Nome = () => ...`).
6. **Imports e Exports Nomeados**:
   - Todos os módulos do projeto utilizam exportações e importações nomeadas explícitas (`export const ...`, `export class ...`, `import { ... } from "..."`).

---

## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/IFPIGaviaoBT.git
   cd IFPIGaviaoBT
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento do Expo:**
   ```bash
   npx expo start
   ```

4. **Abra o aplicativo:**
   - No celular físico usando o app **Expo Go** (leitura do QR Code).
   - No emulador Android (`a`) ou simulador iOS (`i`).
   - No navegador web (`w`).

5. **Verificação de Tipos:**
   ```bash
   npx tsc --noEmit
   ```

---

*IFPI - Campus Piripiri*  
*Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)*
