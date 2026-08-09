# Heat Company — Funil de Análise

Funil de quiz em 6 etapas para captação de leads, com a marca Heat Company.

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
5. **Loading** — simula geração da análise personalizada
6. **Resultado + oferta** — diagnóstico personalizado e CTA final

## Pendências antes de publicar

- [ ] Trocar o link de CTA final (`src/components/steps/Step6Result.tsx`) pelo WhatsApp/Calendly real
- [ ] Substituir os `VideoPlaceholder` pelos vídeos reais (hook e comparação)
- [ ] Conectar o formulário da Etapa 4 a um webhook/CRM real
- [ ] Revisar copy final com o time antes de ativar tráfego pago
