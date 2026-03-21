# 01 — Smart Model Router Gateway

Gateway HTTP que roteia requisições de chat para diferentes modelos de LLM via **OpenRouter**, com estratégias configuráveis de seleção de modelo (preço, latência, throughput).

## 🛠️ Stack

- **Runtime:** Node.js 20+ (ESM nativo)
- **Framework HTTP:** Fastify
- **Linguagem:** TypeScript
- **SDK:** @openrouter/sdk
- **Modelos testados:** `nvidia/nemotron-3-nano-30b-a3b:free`, `arcee-ai/trinity-large-preview:free`

## 📁 Estrutura

```
src/
├── index.ts              # Entry point
├── server.ts             # Servidor Fastify com rota /chat
├── openrouterService.ts  # Integração com OpenRouter SDK
└── config.ts             # Configuração de modelos e parâmetros
```

## ⚡ Como rodar

```bash
# 1. Clone e instale dependências
npm install

# 2. Configure o .env
cp .env.example .env
# Edite .env e adicione sua OPENROUTER_API_KEY

# 3. Rode em modo desenvolvimento
npm run dev
```

## 🔌 API

### `POST /chat`

Envia uma pergunta para o modelo configurado.

**Body:**
```json
{
  "question": "O que é um LLM?"
}
```

**Resposta:**
```json
{
  "content": "Um LLM (Large Language Model) é..."
}
```

## ⚙️ Configuração de Roteamento

Em `src/config.ts`, ajuste a estratégia de seleção de modelo:

```typescript
provider: {
  sort: {
    by: 'throughput',  // 'price' | 'latency' | 'throughput'
    partition: 'none'
  }
}
```

## 🔐 Variáveis de Ambiente

| Variável             | Descrição                          |
|----------------------|------------------------------------|
| `OPENROUTER_API_KEY` | Chave de API do OpenRouter         |

Copie `.env.example` para `.env` e preencha os valores.
