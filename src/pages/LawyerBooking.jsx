import { useState } from 'react'
import StepProgress from './SetpProgress'
const lawyers = [
  { id: 1, name: 'Mr. Jan ', specialty: 'Familierecht', specialtyEn: 'Family Law' },
  { id: 2, name: 'Mr. Sophie ', specialty: 'Arbeidsrecht', specialtyEn: 'Employment Law' },
  { id: 3, name: 'Mr. Thomas ', specialty: 'Ondernemingsrecht', specialtyEn: 'Business Law' },
]
const dates = [
  '2026-10-16',
  '2026-10-17',
  '2026-10-19',
  '2026-10-20',
]
const availableTimes = {
  1: {
    '2026-10-16': ['09:00', '10:30', '14:00'],
    '2026-10-17': ['09:30', '11:00'],
    '2026-10-19': ['10:00', '13:30', '15:00'],
    '2026-10-20': ['09:00', '12:00'],
  },
  2: {
    '2026-10-16': ['10:00', '13:00'],
    '2026-10-17': ['09:00', '14:30'],
    '2026-10-19': ['11:00', '14:00'],
    '2026-10-20': ['10:30', '15:30'],
  },
  3: {
    '2026-10-16': ['11:00', '15:00'],
    '2026-10-17': ['10:00', '13:30'],
    '2026-10-19': ['09:30', '12:00'],
    '2026-10-20': ['11:30', '14:00'],
  },
}

const translations = {
  nl: {
   
    title: 'Plan je consultatie',
    description: 'Kies een advocaat, een beschikbare datum en een tijdstip.',
    chooseLawyer: '1. Kies een advocaat',
    chooseDate: '2. Kies een datum',
    chooseTime: '3. Kies een beschikbaar tijdstip',
    firstLawyer: 'Kies eerst een advocaat om verder te gaan.',
    firstDate: 'Kies eerst een datum om de beschikbare tijden te bekijken.',
    noTimes: 'Er zijn geen beschikbare tijden voor deze datum.',
    previous: 'Vorige',
    next: 'Volgende ',
    error: 'Kies eerst een advocaat, datum en tijdstip.',
  },
  en: {

    title: 'Book your consultation',
    description: 'Choose a lawyer, an available date and a time.',
    chooseLawyer: '1. Choose a lawyer',
    chooseDate: '2. Choose a date',
    chooseTime: '3. Choose an available time',
    firstLawyer: 'Please choose a lawyer first.',
    firstDate: 'Choose a date to see the available times.',
    noTimes: 'There are no available times on this date.',
    previous: '← Back',
    next: 'Next →',
    error: 'Please choose a lawyer, date and time.',
  },
  
}

function LawyerBooking({ language = 'nl', onBack, onNext }) {
  const [selectedLawyer, setSelectedLawyer] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [error, setError] = useState('')
  const text = translations[language] || translations.nl
  const times =
    selectedLawyer && selectedDate
      ? availableTimes[selectedLawyer]?.[selectedDate] || []
      : []
     
  function formatDate(date) {
    return new Date(`${date}T12:00:00`).toLocaleDateString(
      language === 'en' ? 'en-GB' : 'nl-NL',
      {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }
    )
  }
 
  function handleNext() {
    if (!selectedLawyer || !selectedDate || !selectedTime) {
      setError(text.error)
      return
    }
    const booking = {
      lawyer: lawyers.find((lawyer) => lawyer.id === selectedLawyer),
      date: selectedDate,
      time: selectedTime,
    }
    setError('')
    if (onNext) {
      onNext(booking)
    }
  }
  return (
    <main className="booking-page">
        <StepProgress
        language={language}
        currentStep={3}
        />
      <div className="booking-card">
        <p className="booking-step">{text.step}</p>
        <h1>{text.title}</h1>
        <p className="booking-description">{text.description}</p>
        <section className="booking-section">
          <h2>{text.chooseLawyer}</h2>
          <div className="lawyer-list">
            {lawyers.map((lawyer) => (
              <button
                type="button"
                key={lawyer.id}
                className={`lawyer-option ${
                  selectedLawyer === lawyer.id ? 'selected' : ''
                }`}
                onClick={() => {
                  setSelectedLawyer(lawyer.id)
                  setSelectedDate('')
                  setSelectedTime('')
                  setError('')
                }}
                aria-pressed={selectedLawyer === lawyer.id}
              >
                <span className="lawyer-avatar">
                  {lawyer.name
                    .replace('Mr. ', '')
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </span>
                <span className="lawyer-info">
                  <strong>{lawyer.name}</strong>
                  <small>
                    {language === 'en'
                      ? lawyer.specialtyEn
                      : lawyer.specialty}
                  </small>
                </span>
                <span className="lawyer-check">
                  {selectedLawyer === lawyer.id ? '✓' : ''}
                </span>
              </button>
            ))}
          </div>
        </section>
        <section className="booking-section">
          <h2>{text.chooseDate}</h2>
          {!selectedLawyer && (
            <p className="booking-hint">{text.firstLawyer}</p>
          )}
          <div className="date-list">
            {dates.map((date) => (
              <button
                type="button"
                key={date}
                className={`date-option ${
                  selectedDate === date ? 'selected' : ''
                }`}
                disabled={!selectedLawyer}
                onClick={() => {
                  setSelectedDate(date)
                  setSelectedTime('')
                  setError('')
                }}
              >
                {formatDate(date)}
              </button>
            ))}
          </div>
        </section>
        <section className="booking-section">
          <h2>{text.chooseTime}</h2>
          {!selectedDate && (
            <p className="booking-hint">{text.firstDate}</p>
          )}
          {selectedDate && times.length === 0 && (
            <p className="booking-hint">{text.noTimes}</p>
          )}
          <div className="time-list">
            {times.map((time) => (
              <button
                type="button"
                key={time}
                className={`time-option ${
                  selectedTime === time ? 'selected' : ''
                }`}
                onClick={() => {
                  setSelectedTime(time)
                  setError('')
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </section>
        {error && (
          <p className="booking-error" role="alert">
            {error}
          </p>
        )}
        <div className="booking-actions">
          <button
            type="button"
            className="booking-back"
            onClick={onBack}
          >
            {text.previous}
          </button>
          <button
            type="button"
            className="booking-next"
            onClick={handleNext}
          >
            {text.next}
          </button>
        </div>
      </div>
    </main>
  )
}
export default LawyerBooking