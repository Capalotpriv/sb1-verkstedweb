import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { initEmailJS, sendEmail } from '../config/emailjs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'VerkstedWeb'
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setErrorMessage('Kunne ikke sende meldingen. Vennligst prøv igjen senere.');
    }
  };

  const isSubmitting = status === 'loading';
  const showSuccess = status === 'success';
  const showError = status === 'error';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      {showSuccess && (
        <div className="p-4 bg-green-500/10 border border-green-500 rounded-md text-green-500">
          Melding sendt! Vi vil kontakte deg snart.
        </div>
      )}

      {showError && (
        <div className="p-4 bg-red-500/10 border border-red-500 rounded-md text-red-500">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Navn
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          E-post
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          disabled={isSubmitting}
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Melding
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
          ${isSubmitting 
            ? 'bg-blue-600/50 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
      >
        <Send className={`w-4 h-4 mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
        {isSubmitting ? 'Sender...' : 'Send melding'}
      </button>
    </form>
  );
};

export default ContactForm;