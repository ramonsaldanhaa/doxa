import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Step1Hero } from '@/components/steps/Step1Hero'
import { Step2Profile } from '@/components/steps/Step2Profile'
import { Step3Comparison } from '@/components/steps/Step3Comparison'
import { Step4LeadForm } from '@/components/steps/Step4LeadForm'
import { Step5Objection } from '@/components/steps/Step5Objection'
import { Step6Diagnosis } from '@/components/steps/Step6Diagnosis'
import { Step7Motivation } from '@/components/steps/Step7Motivation'
import { Step8Results } from '@/components/steps/Step8Results'
import { Step9Final } from '@/components/steps/Step9Final'
import { TOTAL_STEPS, initialQuizData, type QuizData } from '@/types/quiz'

function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<QuizData>(initialQuizData)

  function updateData(patch: Partial<QuizData>) {
    setData((prev) => ({ ...prev, ...patch }))
  }

  function next() {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1))
  }

  function selectAndAdvance(patch: Partial<QuizData>) {
    updateData(patch)
    setTimeout(next, 250)
  }

  const hasBack = step > 1 && step < TOTAL_STEPS

  return (
    <div className="min-h-svh bg-background">
      <Header step={step} onBack={hasBack ? back : undefined} />
      <main
        className={cn(
          'flex flex-col pb-16 sm:min-h-svh sm:justify-center sm:pt-32',
          hasBack ? 'pt-28' : 'pt-20',
        )}
      >
        <AnimatePresence mode="wait">
          {step === 1 && <Step1Hero key="step1" onNext={next} />}
          {step === 2 && (
            <Step2Profile key="step2" data={data} onUpdate={updateData} onNext={next} />
          )}
          {step === 3 && (
            <Step3Comparison
              key="step3"
              data={data}
              onUpdate={updateData}
              onNext={next}
              name={data.name}
            />
          )}
          {step === 4 && (
            <Step4LeadForm
              key="step4"
              data={data}
              onUpdate={updateData}
              onNext={next}
              name={data.name}
            />
          )}
          {step === 5 && (
            <Step5Objection
              key="step5"
              onSelect={(objection) => selectAndAdvance({ objection })}
            />
          )}
          {step === 6 && <Step6Diagnosis key="step6" onNext={next} />}
          {step === 7 && (
            <Step7Motivation
              key="step7"
              onSelect={(motivation) => selectAndAdvance({ motivation })}
            />
          )}
          {step === 8 && <Step8Results key="step8" onNext={next} />}
          {step === 9 && <Step9Final key="step9" name={data.name} />}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
