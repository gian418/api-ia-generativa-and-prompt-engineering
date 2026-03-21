# 🤖 APIs de IA Generativa e Prompt Engineering

Módulo 02 do curso de pós-graduação em Inteligência Artificial Aplicada.

Neste módulo exploramos a integração com **APIs de modelos de linguagem (LLMs)** via OpenRouter, construção de **gateways inteligentes de roteamento de modelos** e introdução ao **LangChain** para desenvolvimento de aplicações com IA generativa.

---

## 📂 Estrutura do Módulo

```
modulo_02/
├── 01-smart-model-router-gateway/   # Gateway de roteamento inteligente de modelos
└── 02-langchain-intro/              # Introdução ao LangChain
```

---

## 🗂️ Projetos

### 01 — Smart Model Router Gateway

Gateway HTTP construído com **Fastify** + **TypeScript** que roteia requisições para diferentes modelos de LLM via [OpenRouter](https://openrouter.ai/).

**Destaques:**
- Integração com múltiplos modelos via OpenRouter SDK
- Estratégias de roteamento por preço, latência ou throughput
- API REST com endpoint `/chat`
- Testes E2E com Node.js Test Runner

→ [Ver projeto](./01-smart-model-router-gateway/)

---

### 02 — LangChain Intro

Introdução ao framework **LangChain** para construção de pipelines com LLMs, chains, prompts e integrações com fontes de dados externas.

→ [Ver projeto](./02-langchain-intro/)

---

## 🚀 Como Rodar

Cada projeto tem seu próprio setup. Acesse a pasta do projeto desejado e siga as instruções do README local.

**Pré-requisitos gerais:**
- Node.js 20+
- Uma chave de API válida no [OpenRouter](https://openrouter.ai/)

```bash
# Em cada projeto:
cp .env.example .env
# Edite .env com sua chave
npm install
npm run dev
```

---

## 🔐 Variáveis de Ambiente

Os projetos usam um arquivo `.env` na raiz de cada pasta. **Nunca commite o `.env` real.** Use sempre o `.env.example` como template.

---

## 🎓 Curso

**Pós-Graduação em IA Aplicada** — Módulo 02: APIs de IA Generativa e Prompt Engineering
