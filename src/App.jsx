import { useState } from 'react'
import Consultation from './pages/Consultation'
import LawyerBooking from './pages/LawyerBooking'
import PersonalDetails from './pages/PersonalDetails'
import './App.css'
import logoImage from './assets/logo.jpg'
import StepProgress from './pages/SetpProgress'
function App() {
  const [language, setLanguage] = useState('nl')
  const [selectedService, setSelectedService] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const [showLawyerBooking, setShowLawyerBooking] = useState(false)
  const [consultationType, setConsultationType] = useState('')
  const [showConsultationNext, setShowConsultationNext] = useState(false)
  const [showPersonalDetails, setShowPersonalDetails] = useState(false)
  const[bookingData, setBookingData] = useState(null)
  const content = {
    nl: {
      home: 'Home',
      about: 'Over ons',
      services: 'Onze diensten',
      title: 'LEX & LAW · ADVOCATEN',
      description:
        'Als advocatenkantoor behandelen wij verschillende juridische zaken. Ons team helpt u graag met deskundig advies en persoonlijke begeleiding.',
      button: 'Plan een gesprek',
      servicesTitle: 'Onze rechtsgebieden',
      contact: 'Contact',
      servicesList: [
        'Familierecht',
        'Arbeidsrecht',
        'Ondernemingsrecht',
        'Aansprakelijkheidsrecht',
      ],
    },
    en: {
      home: 'Home',
      about: 'About us',
      services: 'Our services',
      title: 'LEX & LAW · Lawyers',
      description:
        'Our law firm handles a wide range of legal matters. Our team is happy to provide professional advice and personal support.',
      button: 'Book a consultation',
      servicesTitle: 'Our practice areas',
      contact: 'Contact',
      servicesList: [
        'Family Law',
        'Employment Law',
        'Business Law',
        'Liability Law',
      ],
    },
  }
  const text = content[language]
  if (showPersonalDetails) {
  return (
    <PersonalDetails
      language={language}
      booking={bookingData}
      onBack={() => {
        setShowPersonalDetails(false)
        setShowLawyerBooking(true)
      }}
      onSubmit={(formData) => {
        console.log('Aanvraag:', formData)
        alert(
          language === 'nl'
            ? 'Je aanvraag is succesvol verzonden!'
            : 'Your request has been submitted successfully!'
        )
      }}
    />
  )
}

if (showLawyerBooking) {
  return (
    <LawyerBooking
      language={language}
      onBack={() => {
        setShowLawyerBooking(false)
        setShowDetails(true)
      }}
      onNext={(booking) => {
        setBookingData(booking)
        setShowPersonalDetails(true)
      }}
    />
  )
}
  if (showDetails) {

    return (
      
      
      
      <Consultation
        language={language}
        setLanguage={setLanguage}
        onBack={() => {
          setShowDetails(false)
          setConsultationType('')
          setShowConsultationNext(false)
        }}
        onNext={(type) => {
          setConsultationType(type)
          setShowConsultationNext(true)
          setShowLawyerBooking(true)
        }}
      />
    
    )
  }
  return (
    <div className="website">
     
      <header className="navbar">
        <div className="logo-container">
          <img
            src={logoImage}
            alt="LEX & LAW logo"
            className="logo-img"
          />
        </div>
        <nav>
          <a href="#home">{text.home}</a>
          <a href="#about">{text.about}</a>
          <a href="#services">{text.services}</a>
        </nav>
        
      <button
          className="language-button"
          onClick={() => setLanguage(language === 'nl' ? 'en' : 'nl')}
        >
          {language === 'nl' ? 'EN' : 'NL'}
        </button>
      </header>
       <StepProgress
      language={language}
      currentStep={1}
      />
      <main>
     
       
        <section className="hero" id="home">
           
         {/* <p className="eyebrow">LEX & LAW · ADVOCATEN</p> */}
          <h1>{text.title}</h1>
          <p className="description">{text.description}</p>
          <a className="main-button" href="#services">
            {text.button}
          </a>
        </section>
        <section className="services" id="services">
         
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
                  setSelectedService(service)
                  setShowDetails(false)
                }}
              >
                <h3>{service}</h3>
              </button>
            ))}
          </div>
          {selectedService !== '' && ( 
            <button
              className="main-button"
           
              onClick={() => 
            
                setShowDetails(true)}
              
            >
              {language === 'nl' ? 'Volgende' : 'Next'}
            </button>
       )} 
        </section>
       <section className="contact" id="contact">
  <h2>{text.contact}</h2>
  <p className="contact-intro">
    {language === 'nl'
      ? 'Neem gerust contact met ons op.'
      : 'Feel free to get in touch with us.'}
  </p>

  <div className="contact-grid">
    <a className="contact-item" href="tel:+31123456789">
      <span className="contact-icon">☎</span>
      <span>
        <strong>{language === 'nl' ? 'Telefoon' : 'Phone'}</strong>
        <small>+31 12 345 6789</small>
      </span>
    </a>

    <a className="contact-item" href="mailto:info@example.com">
      <span className="contact-icon">✉</span>
      <span>
        <strong>Email</strong>
        <small>info@example.com</small>
      </span>
    </a>

    <div className="contact-item">
      <span className="contact-icon">⌖</span>
      <span>
        <strong>{language === 'nl' ? 'Adres' : 'Address'}</strong>
        <small>Weegbree 8, 3348 AP, Nederland</small>
      </span>
    </div>
  </div>

  <div className="contact-socials">
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreferrer"
    >
      Instagram
    </a>
  </div>
</section>
      </main>
      <footer id="about">
        © {new Date().getFullYear()} LEX & LAW
      </footer>
    </div>
  )
}
export default App