import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Loader } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

export function Signup() {
  const navigate = useNavigate();
  const { signup, isLoading } = useAuth();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    role: 'founder'
  });
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setError('');

    if (!formData.email || !formData.password || !formData.name) {
      setError(t('auth.signup.missingFields'));
      return;
    }

    if (formData.password.length < 6) {
      setError(t('auth.signup.passwordShort'));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(t('auth.signup.passwordMismatch'));
      return;
    }

    try {
      await signup(formData.email, formData.password, formData.name, formData.role);
      setTimeout(() => navigate('/app/buddy-choice'), 500);
    } catch (err) {
      setError(t('auth.signup.error'));
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#c9885c] to-[#a0704a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GB</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">{t('auth.signup.title')}</h1>
            <p className="text-gray-400">{t('auth.signup.subtitle')}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{t('auth.signup.namePlaceholder')}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('auth.signup.namePlaceholder')}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9885c] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t('auth.signup.emailLabel')}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('auth.signup.emailPlaceholder')}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9885c] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                {t('auth.signup.roleLabel')}
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-[#c9885c] transition-colors"
              >
                <option value="founder">{t('auth.signup.roleFounder')}</option>
                <option value="incubator">{t('auth.signup.roleIncubator')}</option>
                <option value="investor">{t('auth.signup.roleInvestor')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">{t('auth.signup.passwordLabel')}</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={t('auth.signup.passwordPlaceholder')}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9885c] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">{t('auth.signup.confirmPasswordLabel')}</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={t('auth.signup.confirmPasswordPlaceholder')}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9885c] transition-colors"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 w-4 h-4 accent-[#c9885c]"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                {t('auth.signup.termsPrefix')}{' '}
                <a href="#" className="text-[#c9885c] hover:text-[#e5b896] transition-colors">
                  {t('auth.signup.terms')}
                </a>{' '}
                {t('auth.signup.termsAnd')}{' '}
                <a href="#" className="text-[#c9885c] hover:text-[#e5b896] transition-colors">
                  {t('auth.signup.privacy')}
                </a>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  {t('auth.signup.loading')}
                </>
              ) : (
                <>
                  {t('auth.signup.createBtn')}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-zinc-800"></div>
            <span className="text-sm text-gray-500">ou</span>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-8">
            <button className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg hover:bg-zinc-800 transition-colors font-medium">
              {t('auth.signup.googleBtn')}
            </button>
            <button className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg hover:bg-zinc-800 transition-colors font-medium">
              {t('auth.signup.githubBtn')}
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-400">
              {t('auth.signup.alreadyAccount')}{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-[#c9885c] hover:text-[#e5b896] transition-colors font-medium"
              >
                {t('auth.signup.loginLink')}
              </button>
            </p>
          </div>

          {/* Demo Notice */}
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-xs text-center">
            {t('auth.signup.demoNotice')}
          </div>
        </div>
      </div>
    </div>
  );
}
