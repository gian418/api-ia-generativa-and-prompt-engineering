console.assert(
    process.env.OPENROUTER_API_KEY,
    'OPENROUTER_API_KEY is not set in env variables'
)

export type ModelConfig = {
    apiKey: string;
    httpReferer: string;
    xTitle: string;
    port: 3000;
    models: string[];
    temperature: number;
    maxTokens: number;
    systemPrompt: string;

    provider: {
        sort: {
            by: string,
            partition: string
        }
    }
}

export const config: ModelConfig = {
    apiKey: process.env.OPEROUTER_API_KEY!,
    httpReferer: 'https//pos-ia.com',
    xTitle: 'SmartModelRouterGateway',
    port: 3000,
    models: [
        'nvidia/nemotron-3-nano-30b-a3b:free',
        'arcee-ai/trinity-large-preview:free'
    ],
    temperature: 0.2,
    maxTokens: 100,
    systemPrompt: 'You are a helpful assistant.',
    provider: {
        sort: {
            // by: 'price',
            // by: 'latency',
            by: 'throughput',
            partition: 'none'
        }
    }
}