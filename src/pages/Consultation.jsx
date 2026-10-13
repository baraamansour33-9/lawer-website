// Importeer React om de consultatiepagina te maken.
import { useState } from 'react'
// Maak de pagina voor het kiezen van een consultatie.
function Consultation({ language, onBack, onNext }) {
  // Bewaar de gekozen manier van consulteren.
  const [consultationType, setConsultationType] = useState('')
  // Toon de inhoud van de consultatiepagina.
  return (
    <div className="website">
      {/* Toon de naam van het advocatenkantoor. */}
      <header className="navbar">
        <h2 className="logo">LEX & LAW</h2>
      </header>
      {/* Toon de keuzes voor de consultatie. */}
      <main className="services">
        {/* Toon de titel in de gekozen taal. */}
        <h1>
          {language === 'nl'
            ? 'Kies uw consultatie'
            : 'Choose your consultation'}
        </h1>
        {/* Leg uit dat de bezoeker een consultatie moet kiezen. */}
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
            {language === 'nl' ? 'Terug' : 'Back'}
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