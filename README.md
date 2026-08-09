# Heat Company — Funil de Análise

Funil de quiz em 10 telas (numeração exibida no máximo em 6 etapas), com a marca Heat Company.

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

O cabeçalho mostra no máximo **Etapa 6/6** — telas de relatório e de qualificação
complementar ficam agrupadas com a etapa anterior (ver `STEP_DISPLAY_MAP` em
`src/types/quiz.ts`).

| Tela | Componente | Etapa exibida |
|---|---|---|
| 1. Hero | `Step1Hero` | 1 |
| 2. Nome + perfil | `Step2Profile` | 2 |
| 3. Faturamento | `Step2bRevenue` | 2 |
| 4. Comparação (qual vídeo é IA) | `Step3Comparison` | 3 |
| 5. Captura de lead | `Step4LeadForm` | 4 |
| 6. Objeção | `Step5Objection` | 5 |
| 7. Diagnóstico (relatório) | `Step6Diagnosis` | 5 |
| 8. Motivação | `Step7Motivation` | 6 |
| 9. Resultados (relatório) | `Step8Results` | 6 |
| 10. Confirmação final (relatório) | `Step9Final` | 6 |

## Pendências antes de publicar

- [ ] Trocar o link de CTA final (`src/components/steps/Step6Diagnosis.tsx` e `Step8Results.tsx`) pelo WhatsApp/Calendly real
- [x] Vídeos da Hero e da Comparação (telas 1 e 4) já são reais (`public/videos/`)
- [x] As 3 imagens da tela de Diagnóstico (tela 7) usam fotos reais licenciadas (`public/diagnosis/`)
- [x] Cards de resultados (tela 9) usam os 4 cases reais da Heat Company (HR Náutica, Moodi, Core Alquimias, Marcio Escanhoela), com fotos extraídas de `Cases Heat.pdf` (licenciadas) — ver `public/testimonials/`
- [ ] Conectar o formulário de lead (tela 5) e a nova pergunta de faturamento (tela 3) a um webhook/CRM real
- [ ] Revisar copy final com o time antes de ativar tráfego pago
