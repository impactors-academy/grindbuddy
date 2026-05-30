import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from '../../i18n/I18nProvider';

export function Demo() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    const initializeDemo = async () => {
      try {
        // Auto-login with demo account
        await signup(
          'demo@grindbuddy.app',
          'demo123456',
          'Demo User',
          'founder'
        );
        
        // Set demo mode flag
        localStorage.setItem('grindbuddy_demo_mode', 'true');
        
        // Redirect to dashboard after a brief delay for auth setup
        setTimeout(() => {
          navigate('/app/dashboard');
        }, 1000);
      } catch (error) {
        console.error('Demo initialization error:', error);
        navigate('/');
      }
    };

    initializeDemo();
  }, [signup, navigate]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-950 flex items-center justify-center text-white">
      <div className="text-center">
        <div className="w-16 h-16 bg-[#c9885c]/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <div className="w-12 h-12 bg-gradient-to-br from-[#c9885c] to-[#a0704a] rounded-lg"></div>
        </div>
        <h1 className="text-3xl font-bold mb-2">{t('demo.loading')}</h1>
        <p className="text-gray-400">{t('demo.subtitle')}</p>
      </div>
    </div>
  );
}
