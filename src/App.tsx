import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Header } from '@/components/Header'
import { Step1Hero } from '@/components/steps/Step1Hero'
import { Step2Profile } from '@/components/steps/Step2Profile'
import { Step3Comparison } from '@/components/steps/Step3Comparison'
import { Step4LeadForm } from '@/components/steps/Step4LeadForm'
import { Step5Loading } from '@/components/steps/Step5Loading'
import { Step6Result } from '@/components/steps/Step6Result'
import { initialQuizData, type QuizData } from '@/types/quiz'

function App() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<QuizData>(initialQuizData)

  function updateData(patch: Partial<QuizData>) {
    setData((prev) => ({ ...prev, ...patch }))
  }

  function next() {
    setStep((s) => Math.min(s + 1, 6))
  }

  function back() {
    setStep((s) => Math.max(s - 1, 1))
  }

  return (
    <div className="min-h-svh bg-background">
      <Header step={step} onBack={step > 1 && step < 6 ? back : undefined} />
      <main className="flex min-h-svh flex-col justify-center pb-16 pt-28 sm:pt-32">
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
          {step === 5 && <Step5Loading key="step5" onDone={next} name={data.name} />}
          {step === 6 && <Step6Result key="step6" name={data.name} profile={data.profile} />}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
