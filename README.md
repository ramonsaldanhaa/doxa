# Heat Company — Funil de Análise

Funil de quiz em 9 telas (numeração exibida no máximo em 6 etapas), com a marca Heat Company.

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

O cabeçalho mostra no máximo **Etapa 6/6** — telas de relatório ficam agrupadas
com a pergunta que as originou (ver `STEP_DISPLAY_MAP` em `src/types/quiz.ts`).

| Tela | Componente | Etapa exibida |
|---|---|---|
| 1. Hero | `Step1Hero` | 1 |
| 2. Nome + perfil | `Step2Profile` | 2 |
| 3. Comparação (qual vídeo é IA) | `Step3Comparison` | 3 |
| 4. Captura de lead (WhatsApp, e-mail, Instagram, faturamento) | `Step4LeadForm` | 4 |
| 5. Objeção | `Step5Objection` | 5 |
| 6. Diagnóstico (relatório) | `Step6Diagnosis` | 5 |
| 7. Motivação | `Step7Motivation` | 6 |
| 8. Resultados (relatório) | `Step8Results` | 6 |
| 9. Confirmação final (relatório) | `Step9Final` | 6 |

O faturamento é um `<select>` dentro da tela 4, junto com WhatsApp/e-mail/Instagram
(não é uma tela própria).

## Notas de responsividade

O vídeo da Hero usa largura fixa (`vw` + `max-w`), não `dvh` — a unidade `dvh`
tem suporte instável em navegadores in-app (ex.: navegador embutido do
WhatsApp), o que causava layout quebrado em alguns celulares.

## Pendências antes de publicar

- [ ] Trocar o link de CTA final (`src/components/steps/Step6Diagnosis.tsx` e `Step8Results.tsx`) pelo WhatsApp/Calendly real
- [x] Vídeos da Hero e da Comparação (telas 1 e 3) já são reais (`public/videos/`)
- [x] As 3 imagens da tela de Diagnóstico (tela 6) usam fotos reais licenciadas (`public/diagnosis/`)
- [x] Cards de resultados (tela 8) usam os 4 cases reais da Heat Company (HR Náutica, Moodi, Core Alquimias, Marcio Escanhoela), com fotos extraídas de `Cases Heat.pdf` (licenciadas) — ver `public/testimonials/`
- [ ] Conectar o formulário de lead (tela 4, incluindo faturamento) a um webhook/CRM real
- [ ] Revisar copy final com o time antes de ativar tráfego pago
