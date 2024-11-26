import React, { useState, ReactNode } from 'react';
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';

// Types
interface AlertProps {
  children: ReactNode;
  variant?: 'success' | 'error';
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// Alert Component
const Alert: React.FC<AlertProps> = ({ children, variant = 'success' }) => {
  const styles = {
    success: 'bg-green-500/10 border-green-500/20 text-green-400',
    error: 'bg-red-500/10 border-red-500/20 text-red-400'
  };

  return (
    <div className={`flex items-center gap-2 p-4 rounded-lg border ${styles[variant]}`}>
      {variant === 'success' ? (
        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 flex-shrink-0" />
      )}
      <p>{children}</p>
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar formulário');
      }

      setStatus({ loading: false, success: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: error instanceof Error ? error.message : 'Erro ao enviar o formulário. Por favor, tente novamente.'
      });
    }
  };

  const inputClasses = `
    w-full bg-gray-800/50 border border-gray-700 text-white 
    rounded-lg px-4 py-3 focus:outline-none focus:ring-2 
    focus:ring-purple-500/50 focus:border-purple-500
    placeholder:text-gray-500 transition-all duration-200
  `;

  return (
    <div className="p-8 bg-gray-900 rounded-2xl border border-gray-800" id="contact">
      <div className="max-w-md mx-auto">
        {/* Form Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Vamos Conversar?</h3>
          <p className="text-gray-400">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24h
          </p>
        </div>

        {/* Status Messages */}
        {status.success && (
          <div className="mb-6">
            <Alert variant="success">
              Mensagem enviada com sucesso! Entraremos em contato em breve.
            </Alert>
          </div>
        )}

        {status.error && (
          <div className="mb-6">
            <Alert variant="error">
              {status.error}
            </Alert>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nome completo *"
                required
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail corporativo *"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Telefone *"
                required
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                placeholder="Empresa *"
                required
                value={formData.company}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Como podemos ajudar? *"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className={`
              w-full bg-gradient-to-r from-purple-600 to-indigo-600 
              hover:from-purple-700 hover:to-indigo-700
              text-white px-6 py-4 rounded-lg font-semibold
              transform transition-all duration-200
              flex items-center justify-center gap-2
              disabled:opacity-50 disabled:cursor-not-allowed
              ${!status.loading ? 'hover:scale-102 hover:shadow-lg' : ''}
            `}
          >
            {status.loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Ao enviar este formulário, você concorda com nossa{' '}
            <a href="/privacidade" className="text-purple-400 hover:text-purple-300">
              Política de Privacidade
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;