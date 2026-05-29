import { useState } from 'react';
import '../styles/Contact.css';

const INITIAL = { name: '', lastName: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! Em breve entro em contato.');
    setForm(INITIAL);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-container">

        <hgroup className="section-title" id="contact-title">
          <span>Con</span><span className="accent">tato</span>
        </hgroup>

        <p className="contact-subtitle">
          Gostou do que viu e deseja entrar em contato?
        </p>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="name">Nome</label>
              <input
                id="name" name="name" type="text"
                placeholder="Seu nome"
                value={form.name} onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastName">Sobrenome</label>
              <input
                id="lastName" name="lastName" type="text"
                placeholder="Seu sobrenome"
                value={form.lastName} onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email"
                placeholder="seu@email.com"
                value={form.email} onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Numero telefone</label>
              <input
                id="phone" name="phone" type="tel"
                placeholder="+55 11 9 6148-1000"
                value={form.phone} onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-field full-width">
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              placeholder="Escreva sua mensagem..."
              value={form.message} onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              Enviar mensagem
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}