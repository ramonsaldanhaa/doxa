# Heat Company — Funil de Análise

Funil de quiz em 9 etapas para captação de leads, com a marca Heat Company.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion

## Rodando localmente

```bash
npm install
npm run dev
```

## Estrutura do funil

1. **Hero** — hook + prova social (views/curtidas/comentários)
2. **Nome + perfil** — captura nome e segmento do lead, revela dado de mercado
3. **Comparação** — desafio "qual vídeo foi feito por IA" com reveal
4. **Captura de lead** — WhatsApp, e-mail e Instagram
5. **Objeção** — pergunta de qualificação (o que impede o lead de se posicionar)
6. **Diagnóstico** — comparação "o que você faz vs. o que a Heat Company faz" + prova social
7. **Motivação** — pergunta de qualificação (o que mudaria com mais posicionamento)
8. **Resultados** — benefícios + cases de clientes (placeholders)
9. **Confirmação final** — "aplicação recebida" + indicador de potencial de resultado

## Pendências antes de publicar

- [ ] Trocar o link de CTA final (`src/components/steps/Step6Diagnosis.tsx` e `Step8Results.tsx`) pelo WhatsApp/Calendly real
- [x] Vídeos da Hero e da Comparação (Etapas 1 e 3) já são reais (`public/videos/`)
- [ ] Substituir os 3 `VideoPlaceholder` da Etapa 6 (diagnóstico) pelos vídeos reais de clientes
- [ ] Substituir os `TestimonialCard` em `Step8Results.tsx` por clientes reais da Heat Company (nome, foto e métricas, **com autorização deles**) — hoje são placeholders genéricos de propósito
- [ ] Conectar o formulário da Etapa 4 a um webhook/CRM real
- [ ] Revisar copy final com o time antes de ativar tráfego pago
