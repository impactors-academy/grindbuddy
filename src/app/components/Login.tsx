import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Loader } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

export function Login() {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setError('');

    if (!email || !password) {
      setError(t('auth.login.missingFields'));
      return;
    }

    try {
      await login(email, password);
      setTimeout(() => navigate('/app/dashboard'), 500);
    } catch (err) {
      setError(t('auth.login.error'));
      console.error('Login error:', err);
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
            <h1 className="text-3xl font-bold mb-2">{t('auth.login.title')}</h1>
            <p className="text-gray-400">{t('auth.login.subtitle')}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{t('auth.login.emailLabel')}</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder={t('auth.login.emailPlaceholder')}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9885c] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">{t('auth.login.passwordLabel')}</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder={t('auth.login.passwordPlaceholder')}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9885c] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  {t('auth.login.loading')}
                </>
              ) : (
                <>
                  {t('auth.login.loginBtn')}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-zinc-800"></div>
            <span className="text-sm text-gray-500">{t('auth.login.or')}</span>
            <div className="flex-1 h-px bg-zinc-800"></div>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3 mb-8">
            <button className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg hover:bg-zinc-800 transition-colors font-medium">{t('auth.login.continueWithGoogle')}</button>
            <button className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 text-white rounded-lg hover:bg-zinc-800 transition-colors font-medium">{t('auth.login.continueWithGithub')}</button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-400">{t('auth.login.or')}{' '}
              <button onClick={() => navigate('/signup')} className="text-[#c9885c] hover:text-[#e5b896] transition-colors font-medium">{t('auth.signup.title')}</button>
            </p>
          </div>

          {/* Demo Notice */}
          <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-300 text-xs text-center">
            {t('auth.login.demoNotice')}
          </div>
        </div>
      </div>
    </div>
  );
}
