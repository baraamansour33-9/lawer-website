import { useState } from 'react'
import StepProgress from './SetpProgress'

function Consultation({ language, setLanguage, onBack, onNext }) {
  // Bewaar de gekozen manier van consulteren.
  const [consultationType, setConsultationType] = useState('')
  // Toon de inhoud van de consultatiepagina.
  return (
    <div className="website">
       <StepProgress
        language={language}
        currentStep={2}
        />
     
      {/* Toon de keuzes voor de consultatie. */}
      <main className="services">
        {/* Toon de titel in de gekozen taal. */}
        
        
        <p>
          {language === 'nl'
                
            ? 'Hoe wilt u juridisch advies ontvangen?'
            : 'How would you like to receive legal advice?'}
        </p>
        {/* Laat de bezoeker een online consultatie kiezen. */}
        <button
          className={
            consultationType === 'online'
              ? 'service-card selected'
              : 'service-card'
          }
          onClick={() => setConsultationType('online')}
        >
          <h3>
            {language === 'nl'
              ? 'Online consultatie'
              : 'Online consultation'}
          </h3>
          
        </button>
        {/* Laat de bezoeker een consultatie op kantoor kiezen. */}
        <button
          className={
            consultationType === 'office'
              ? 'service-card selected'
              : 'service-card'
          }
          onClick={() => setConsultationType('office')}
        >
          <h3>
            {language === 'nl'
              ? 'Consultatie op kantoor'
              : 'In-office consultation'}
          </h3>
         
        </button>
        {/* Toon de knoppen om terug te gaan of verder te gaan. */}
        <div className="consultation-buttons">
          {/* Ga terug naar de vorige pagina. */}
          <button
            className="back-button"
            onClick={onBack}
          >
            {language === 'nl' ? 'Vorige' : 'Back'}
          </button>
          {/* Ga verder als een consultatie is gekozen. */}
          <button
            className="main-button"
            disabled={consultationType === ''}
            onClick={() => onNext(consultationType)}
          >
            {language === 'nl' ? 'Volgende' : 'Next'}
          </button>
        </div>
      </main>
    </div>
  )
}
// Maak deze pagina beschikbaar voor gebruik in andere bestanden.
export default Consultation