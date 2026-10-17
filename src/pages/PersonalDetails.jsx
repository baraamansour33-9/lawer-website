import { useState } from 'react'
import StepProgress from './SetpProgress'
const translations = {
  nl: {
   
    title: 'Vertel ons wie je bent',
    description: 'Vul je gegevens in om je aanvraag af te ronden.',
    gender: 'Geslacht',
    selectGender: 'Kies je geslacht',
    female: 'Vrouw',
    male: 'Man',
    other: 'Anders',
    preferNot: 'Zeg ik liever niet',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    email: 'E-mailadres',
    phone: 'Telefoonnummer',
    comment: 'Opmerking (optioneel)',
    commentPlaceholder: 'Schrijf hier eventueel je opmerking...',
    privacy:
      'Je ontvangt een bevestiging via je e-mailadres en telefoonnummer.',
    back: ' Vorige',
    submit: 'Versturen ',
    error: 'Vul alle verplichte velden correct in.',
  },
  en: {
    
    title: 'Tell us about yourself',
    description: 'Enter your details to complete your request.',
    gender: 'Gender',
    selectGender: 'Select your gender',
    female: 'Female',
    male: 'Male',
    other: 'Other',
    preferNot: 'Prefer not to say',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email address',
    phone: 'Phone number',
    comment: 'Comment (optional)',
    commentPlaceholder: 'Add a comment if you wish...',
    privacy:
      'You will receive a confirmation by email and phone.',
    back: '← Back',
    submit: 'Submit →',
    error: 'Please complete all required fields correctly.',
  },
}
function PersonalDetails({
  language = 'nl',
  booking,
  onBack,
  onSubmit,
}) {
  const [form, setForm] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comment: '',
  })
  const [error, setError] = useState('')
  const text = translations[language] || translations.nl
  function handleChange(event) {
    const { name, value } = event.target
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))
  }
  function handleSubmit(event) {
    event.preventDefault()
    if (
      !form.gender ||
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !event.currentTarget.checkValidity()
    ) {
      setError(text.error)
      return
    }
    setError('')
    onSubmit({
      ...form,
      booking,
    })
  }
  return (
    <main className="booking-page">
        <StepProgress
      language={language}
      currentStep={4}
      />
      <div className="booking-card">
        <p className="booking-step">{text.step}</p>
        <h1>{text.title}</h1>
        <p className="booking-description">{text.description}</p>
        <form onSubmit={handleSubmit}>
          <div className="personal-form">
            <div className="form-field">
              <label htmlFor="gender">{text.gender}</label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">{text.selectGender}</option>
                <option value="female">{text.female}</option>
                <option value="male">{text.male}</option>
                <option value="other">{text.other}</option>
                <option value="prefer-not">{text.preferNot}</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="firstName">{text.firstName}</label>
              <input
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">{text.lastName}</label>
              <input
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">{text.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">{text.phone}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="comment">{text.comment}</label>
              <textarea
                id="comment"
                name="comment"
                value={form.comment}
                onChange={handleChange}
                placeholder={text.commentPlaceholder}
                rows={4}
              />
            </div>
          </div>
          <p className="booking-hint">{text.privacy}</p>
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
              {text.back}
            </button>
            <button type="submit" className="booking-next">
              {text.submit}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
export default PersonalDetails