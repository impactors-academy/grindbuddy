import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Navbar } from './Navbar';
import { Users, Bot, Zap } from 'lucide-react';
import { useTranslation } from '../../i18n/I18nProvider';

export function BuddyChoice() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { t } = useTranslation();

  // If not authenticated or not first-time user, redirect to dashboard
  if (!user) {
    navigate('/app/dashboard');
    return null;
  }

  const handleFindBuddies = () => {
    navigate('/app/onboarding');
  };

  const handleAIBuddy = () => {
    // Navigate to dashboard with AI buddy mode
    localStorage.setItem('grindbuddy_ai_mode', 'true');
    navigate('/app/dashboard');
  };

  const handleBoth = () => {
    // Set both mode, start with onboarding then matching
    localStorage.setItem('grindbuddy_buddy_mode', 'both');
    navigate('/app/onboarding');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('buddyChoice.welcome').replace('{name}', user.name)}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('buddyChoice.subtitle')}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Find Buddies Option */}
            <div
              onClick={handleFindBuddies}
              className="p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 hover:border-[#c9885c] transition-all cursor-pointer group hover:shadow-lg hover:shadow-[#c9885c]/20"
            >
              <div className="w-14 h-14 bg-[#c9885c]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c9885c]/20 transition-colors">
                <Users className="w-7 h-7 text-[#c9885c]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('buddyChoice.findBuddiesTitle')}</h3>
              <p className="text-gray-400 mb-6">{t('buddyChoice.findBuddiesDesc')}</p>
              <div className="flex items-center gap-2 text-[#c9885c] font-medium group-hover:gap-3 transition-all">
                {t('buddyChoice.start')}
                <span>→</span>
              </div>
            </div>

            {/* AI Buddy Option */}
            <div
              onClick={handleAIBuddy}
              className="p-8 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl border border-gray-800 hover:border-[#c9885c] transition-all cursor-pointer group hover:shadow-lg hover:shadow-[#c9885c]/20"
            >
              <div className="w-14 h-14 bg-[#c9885c]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c9885c]/20 transition-colors">
                <Bot className="w-7 h-7 text-[#c9885c]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('buddyChoice.aiBuddyTitle')}</h3>
              <p className="text-gray-400 mb-6">{t('buddyChoice.aiBuddyDesc')}</p>
              <div className="flex items-center gap-2 text-[#c9885c] font-medium group-hover:gap-3 transition-all">
                {t('buddyChoice.start')}
                <span>→</span>
              </div>
            </div>

            {/* Both Option */}
            <div
              onClick={handleBoth}
              className="p-8 bg-gradient-to-br from-[#c9885c]/10 to-[#c9885c]/5 rounded-2xl border border-[#c9885c]/30 hover:border-[#c9885c] transition-all cursor-pointer group hover:shadow-lg hover:shadow-[#c9885c]/30"
            >
              <div className="w-14 h-14 bg-[#c9885c]/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#c9885c]/30 transition-colors">
                <Zap className="w-7 h-7 text-[#c9885c]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('buddyChoice.bothTitle')}</h3>
              <p className="text-gray-300 mb-6">{t('buddyChoice.bothDesc')}</p>
              <div className="flex items-center gap-2 text-[#c9885c] font-medium group-hover:gap-3 transition-all">
                {t('buddyChoice.start')}
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="p-6 bg-[#c9885c]/5 border border-[#c9885c]/20 rounded-2xl text-center">
            <p className="text-gray-300">{t('buddyChoice.subtitle')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
