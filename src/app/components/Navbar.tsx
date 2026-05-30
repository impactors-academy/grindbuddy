import { useNavigate, Link } from 'react-router';
import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../../i18n/I18nProvider';
import LanguageSwitcher from './LanguageSwitcher';

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#c9885c] to-[#a0704a] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">GB</span>
            </div>
            <span>GrindBuddy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-10 lg:ml-14">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">{t('nav.features')}</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">{t('nav.howItWorks')}</a>
            <a href="#wallet" className="text-gray-300 hover:text-white transition-colors">{t('nav.wallet')}</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">{t('nav.team')}</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">{t('nav.roadmap')}</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">{t('nav.pricing')}</a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">{t('nav.faq')}</a>

            <div className="flex items-center gap-4 pl-8 border-l border-zinc-800">
              <LanguageSwitcher />
              {isAuthenticated && user ? (
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => navigate('/app/dashboard')}
                    className="px-6 py-2 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-colors font-medium"
                  >
                    {t('nav.openProduct')}
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#c9885c]/20 rounded-full flex items-center justify-center text-sm text-[#c9885c] font-semibold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-300">{user.name}</span>
                    <button
                      onClick={handleLogout}
                      className="p-2 hover:bg-zinc-900 rounded-lg transition-colors text-gray-400 hover:text-white"
                      title={t('nav.login')}
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigate('/app/dashboard')}
                    className="px-6 py-2 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-colors font-medium"
                  >
                    {t('nav.openProduct')}
                  </button>
                  <button
                    onClick={() => navigate('/login')}
                    className="px-6 py-2 text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="px-6 py-2 bg-[#c9885c]/20 text-[#c9885c] rounded-lg hover:bg-[#c9885c]/30 transition-colors font-medium border border-[#c9885c]/50"
                  >
                    {t('nav.signup')}
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-zinc-900 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a
              href="#features"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.features')}
            </a>
            <a
              href="#how-it-works"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.howItWorks')}
            </a>
            <a
              href="#wallet"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.wallet')}
            </a>
            <a
              href="#team"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.team')}
            </a>
            <a
              href="#roadmap"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.roadmap')}
            </a>
            <a
              href="#pricing"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.pricing')}
            </a>
            <a
              href="#faq"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.faq')}
            </a>
            <div className="pt-4 border-t border-zinc-800 space-y-2">
              {isAuthenticated && user ? (
                <>
                  <button
                    onClick={() => {
                      navigate('/app/dashboard');
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-colors font-medium"
                  >
                    {t('nav.openProduct')}
                  </button>
                  <div className="px-4 py-2 text-sm text-gray-300">
                    {user.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                  >
                    {t('nav.login')}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate('/app/dashboard');
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-colors font-medium"
                  >
                    {t('nav.openProduct')}
                  </button>
                  <button
                    onClick={() => {
                      navigate('/login');
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors"
                  >
                    {t('nav.login')}
                  </button>
                  <button
                    onClick={() => {
                      navigate('/signup');
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-[#c9885c]/20 text-[#c9885c] rounded-lg hover:bg-[#c9885c]/30 transition-colors font-medium border border-[#c9885c]/50"
                  >
                    {t('nav.signup')}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
