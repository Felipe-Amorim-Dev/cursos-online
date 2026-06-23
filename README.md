# Cursos Online

Uma plataforma moderna para descobrir e explorar cursos online, construída com React, TypeScript e Vite.

## 🎯 Sobre o Projeto

Cursos Online é uma aplicação web responsiva que permite aos usuários navegar por um catálogo de cursos, com seções informativas sobre oportunidades B2B, informações sobre os cursos e uma experiência de usuário intuitiva.

## 📋 Funcionalidades

- **Homepage Interativa**: Seção hero com apresentação visual atrativa
- **Catálogo de Cursos**: Visualização e filtragem de cursos disponíveis
- **Cards de Cursos**: Componentes reutilizáveis para exibir informações de cursos
- **Seção B2B**: Informações sobre parcerias B2B
- **Navegação Intuitiva**: Topbar e sidebar para fácil navegação
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🛠️ Tecnologias Utilizadas

- **React 19**: Biblioteca para construção de interfaces
- **TypeScript**: Linguagem tipada para maior segurança
- **Vite**: Ferramenta de build rápida e moderna
- **React Router**: Roteamento da aplicação
- **React Icons**: Ícones customizáveis
- **CSS Modules**: Estilos encapsulados por componente

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── b2b-section-home/
│   ├── Curso-cards/
│   ├── Curso-section/
│   ├── Hero-section/
│   ├── Footer/
│   ├── Sidebar/
│   ├── topbar/
│   └── ...
├── Pages/               # Páginas da aplicação
│   ├── AppRoutes.tsx    # Configuração de rotas
│   ├── Home/
│   └── Catalogo/
├── Data/                # Dados e tipos
│   └── Curso.ts         # Definições de curso
├── Hooks/               # Hooks customizados
│   └── Navigations.ts
├── App.tsx              # Componente raiz
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou porta indicada no terminal).

### Build para Produção

```bash
# Compilar TypeScript e fazer build
npm run build

# Preview do build de produção
npm run preview
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Compila TypeScript e faz o build para produção
- `npm run preview` - Visualiza o build de produção localmente

## 🎨 Componentes Principais

### Home
Página inicial com seções:
- Hero Section
- Information Section
- Curso Section
- Introduction Section
- B2B Section
- Footer

### Catálogo
Página de catálogo com lista completa de cursos disponíveis.

### Componentes Reutilizáveis
- `Curso-card` - Card individual de curso
- `Hero-section` - Seção hero customizável
- `Footer` - Rodapé da aplicação
- `Sidebar` - Menu lateral de navegação
- `topbar` - Barra superior

## 📝 Notas de Desenvolvimento

- Cada componente possui seu arquivo CSS Module para isolamento de estilos
- A navegação é gerenciada através do React Router
- Dados de cursos são centralizados em `src/Data/Curso.ts`

**Última atualização**: Junho 2026
