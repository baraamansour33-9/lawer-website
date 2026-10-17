function StepProgress({ language = 'nl', currentStep = 1 }) {
  const steps = {
    nl: [
      'Rechtsgebied',
      'Consultatie',
      'Advocaat en tijd',
      'Uw gegevens',
    ],
    en: [
      'Preactice area',
      'Consultation',
      'Lawyer and time',
      'Your details',
    ],
  }

  const labels = steps[language] || steps.nl

  return (
    <div className="step-progress">
      {labels.map((label, index) => {
        const stepNumber = index + 1
        const completed = stepNumber < currentStep
        const active = stepNumber === currentStep

        return (
          <div
            key={label}
            className={`progress-step ${
              active ? 'active' : ''
            } ${completed ? 'completed' : ''}`}
          >
            <div className="step-circle">
              {completed ? '✓' : stepNumber}
            </div>
            <span>{label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default StepProgress