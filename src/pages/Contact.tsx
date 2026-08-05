import { useState, type FormEvent } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const contacts = [
  { label: 'General', email: 'contact@nex.bio' },
  { label: 'Information', email: 'info@nex.bio' },
  { label: 'Careers', email: 'careers@nex.bio' },
  { label: 'Human Resources', email: 'hr@nex.bio' },
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build the future of identity together."
        subtitle="Whether you're modernizing a national ID system, securing enterprise access, or exploring biometric solutions, our team is here to help you design and deploy the right solution."
      />

      <section className="page-section">
        <div className="container contact-layout">
          <div className="contact-form-wrap">
            <h2>Request a demo</h2>
            <p className="page-prose">
              Tell us about your program and our solution architects will follow up.
            </p>

            {submitted ? (
              <p className="contact-success">
                Thanks — your request has been noted. For immediate contact, email{' '}
                <a href="mailto:contact@nex.bio">contact@nex.bio</a>.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Name
                    <input required type="text" name="name" autoComplete="name" />
                  </label>
                  <label>
                    Organization
                    <input type="text" name="organization" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Work email
                    <input required type="email" name="email" autoComplete="email" />
                  </label>
                  <label>
                    Use case
                    <input type="text" name="useCase" placeholder="National ID, border, banking…" />
                  </label>
                </div>
                <label className="form-full">
                  Message
                  <textarea name="message" rows={4} />
                </label>
                <button type="submit" className="btn btn-primary">
                  Submit request <ArrowRight size={16} className="btn-arrow" />
                </button>
              </form>
            )}
          </div>

          <aside className="contact-details">
            <h3>Reach us</h3>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.email}>
                  <span className="contact-detail-label">{contact.label}</span>
                  <a href={`mailto:${contact.email}`}>
                    <Mail size={15} strokeWidth={1.8} />
                    {contact.email}
                  </a>
                </li>
              ))}
            </ul>
            <div className="contact-address">
              <MapPin size={16} strokeWidth={1.8} />
              <span>
                Mantri Commercio Tower-A, Marathahalli–Sarjapur Outer Ring Rd, Kariyammana Agrahara,
                Bellandur, Bengaluru, Karnataka 560103, India
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
