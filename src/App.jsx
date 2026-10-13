// Importeer useState om de gekozen taal te onthouden en te wijzigen.
import { useState } from 'react'
// Importeer de pagina voor het kiezen van een consultatie.
import Consultation from './pages/Consultation'
// Importeer het CSS-bestand voor de vormgeving van de website.
import './App.css'
import logoImage from './assets/logo.jpg'
// Maak de hoofdcomponent van de website.
function App() {
  // Bewaar de huidige taal. De standaardtaal is Nederlands ('nl').
  // setLanguage wordt gebruikt om de taal te veranderen.
  const [language, setLanguage] = useState('nl')
  // Bewaar de juridische dienst die de bezoeker kiest.
const [selectedService, setSelectedService] = useState('')
// Bewaar of de bezoeker naar de volgende pagina gaat.

const [showDetails, setShowDetails] = useState(false)
// Bewaar de gekozen manier van consulteren.
const [consultationType, setConsultationType] = useState('')
// Bewaar of de bezoeker de volgende stap heeft geopend.
const [showConsultationNext, setShowConsultationNext] = useState(false)
  // Bewaar alle teksten van de website in het Nederlands en Engels.
  const content = {
    // Teksten voor de Nederlandse versie.
    nl: {
    
      home: 'Home',
      about: 'Over ons',
      services: 'Onze diensten',
      title: 'Juridische hulp waarop u kunt vertrouwen',
      description:
        'Als advocatenkantoor behandelen wij een breed scala aan juridische zaken. Ons team bestaat uit zeer ervaren en deskundige advocaten die u met raad en daad bijstaan. Neem gerust contact met ons op voor deskundige hulp.',
      button: 'Plan een gesprek',
      servicesTitle: 'Onze rechtsgebieden',
      // Bewaar de juridische diensten in het Nederlands.
servicesList: [
  'Familierecht',
  'Arbeidsrecht',
  'Ondernemingsrecht',
  'Aansprakelijkheidsrecht',
],
    },
    // Teksten voor de Engelse versie.
    en: {
      home: 'Home',
      about: 'About us',
      services: 'Our services',
     title: 'Legal support you can trust',
      description:
        'As a law firm, we handle a wide range of legal matters. Our team consists of highly experienced and skilled lawyers dedicated to assisting you. Do not hesitate to contact us for expert help.".',
      button: 'Book a consultation',
      servicesTitle: 'Our practice areas',
      // Bewaar de juridische diensten in het Engels.
servicesList: [
  'Family Law',
  'Employment Law',
  'Business Law',
  'Liability Law',
],
    },
  }
  // Kies de teksten die horen bij de huidige taal.
  const text = content[language]

// Toon de consultatiepagina als de bezoeker op Volgende klikt.
if (showDetails) {
  return (
    <Consultation
      language={language}
      onBack={() => {
        setShowDetails(false)
        setConsultationType('')
        setShowConsultationNext(false)
      }}
      onNext={(type) => {
        setConsultationType(type)
        setShowConsultationNext(true)
      }}
    />
  )
}
 // Geef de HTML-structuur van de website terug.
  return (
    // Hoofdcontainer die de volledige website bevat.
    <div className="website">
      {/* De navigatiebalk bovenaan de website. */}
      <header className="navbar">
       
        {/* Toon de naam van het advocatenkantoor. */}
        {/*<h2 className="logo">{text.name}</h2> */}
        <div className='logo-container'>
          <img src={logoImage} alt="LEX & LAW logo" className='logo-img'/>
          
        </div>
       
       
       
       
       
        {/* Navigatielinks naar verschillende onderdelen van de website. */}
        <nav>
          <a href="#home">{text.home}</a>
          <a href="#about">{text.about}</a>
          <a href="#services">{text.services}</a>
        
        </nav>
        {/* Knop om te wisselen tussen Nederlands en Engels. */}
        <button
          className="language-button"
          onClick={() =>
            // Verander Nederlands in Engels en Engels in Nederlands.
            setLanguage(language === 'nl' ? 'en' : 'nl')
          }
        >
          {/* Toon de taal waarnaar de bezoeker kan overschakelen. */}
          {language === 'nl' ? 'EN' : 'NL'}
        </button>
      </header>
      {/* Het hoofdgedeelte met de belangrijkste boodschap. */}
      <main>
        {/* De introductiesectie bovenaan de pagina. */}
        <section className="hero" id="home">
          {/* Een korte aanduiding van het advocatenkantoor. */}
          <p className="eyebrow">LEX & LAW · ADVOCATEN</p>
          {/* De belangrijkste titel van de website. */}
          <h1>{text.title}</h1>
          {/* Een korte beschrijving van de juridische dienstverlening. */}
          <p className="description">{text.description}</p>
          {/* Een knop die de bezoeker naar het contactgedeelte brengt. */}
          <a className="main-button" href="#contact">
            {text.button}
          </a>
        </section>
        {/* De sectie met de verschillende rechtsgebieden. */}
        <section className="services" id="services">
          {/* Titel van de sectie met juridische diensten. */}
          <h2>{text.servicesTitle}</h2>
         
          {/* Een container waarin de diensten als kaarten verschijnen. */}
          {/* Toon de juridische diensten waaruit de bezoeker kan kiezen. */}
<div className="services-grid">
  {text.servicesList.map((service) => (
    <button
      className={
        selectedService === service
          ? 'service-card selected'
          : 'service-card'
      }
      key={service}
      onClick={() => {
        // Bewaar de gekozen juridische dienst.
        setSelectedService(service)
        // Begin opnieuw op de dienstenpagina.
        setShowDetails(false)
      }}
    >
     
      <h3>{service}</h3>
    </button>
  ))}
</div>
{/* Toon de knop alleen als een dienst is gekozen. */}
{selectedService !== '' && (
  <button
    className="main-button"
    onClick={() => {
      // Open de volgende pagina met de gekozen dienst.
      setShowDetails(true)
    }}
  >
    Volgende
  </button>
)}
        </section>
        {/* Het contactgedeelte van de website. */}
        <section className="contact" id="contact">
          {/* Toon de contacttitel in de gekozen taal. */}
          <h2>{text.contact}</h2>
          
          <p>Contact</p>
          {/* Open het e-mailprogramma wanneer de bezoeker klikt. */}
          <a href="mailto:info@example.com">Email: info@example.com</a>
          <p>
          <a href='tel:'>Tel: 0481 - 67433333</a>
        </p>
        <p>
          Nederland, Utrecht, 3348AP ,weegbree8
        </p>
       
         
        </section>
      </main>
      {/* De voettekst met het automatisch bijgewerkte jaartal. */}
      <footer id="about">
        © {new Date().getFullYear()} LEX & LAW
      </footer>
    </div>
  )
}
// Maak de component beschikbaar voor gebruik in andere bestanden.
export default App