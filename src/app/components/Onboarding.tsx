import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

export function Onboarding() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState(50);
  const [goal, setGoal] = useState('Build MVP');
  const [projectIdea, setProjectIdea] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const skills = ['Developer', 'Designer', 'Marketing', 'AI Specialist'];
  const goals = ['Build MVP', 'Learn', 'Launch startup', 'Validate idea'];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleContinue = () => {
    if (selectedSkills.length === 0 || !projectIdea.trim()) {
      alert(t('onboarding.selectSkillError'));
      return;
    }
    navigate('/app/matching');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">{t('onboarding.title')}</h1>
          <p className="text-gray-400">{t('onboarding.subtitle')}</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">{t('onboarding.title')}</label>
            <textarea
              value={projectIdea}
              onChange={(e) => setProjectIdea(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white resize-none focus:outline-none focus:border-[#c9885c] transition-colors"
              rows={4}
              placeholder={t('onboarding.projectPlaceholder')}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-3">{t('onboarding.skillsLabel')}</label>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedSkills.includes(skill)
                      ? 'bg-[#c9885c] text-black font-medium'
                      : 'bg-zinc-900 text-white border border-zinc-800 hover:border-[#c9885c]/50'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-3">
              {t('onboarding.availability')}: <span className="text-[#c9885c] font-medium">{availability < 33 ? t('onboarding.availabilityLow') : availability < 66 ? t('onboarding.availabilityMedium') : t('onboarding.availabilityHigh')}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={availability}
              onChange={(e) => setAvailability(Number(e.target.value))}
              className="w-full h-2 bg-zinc-900 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c9885c]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">{t('onboarding.goalLabel')}</label>
            <select
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white focus:outline-none focus:border-[#c9885c] transition-colors"
            >
              {goals.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-[#c9885c] text-black py-4 rounded-xl font-semibold hover:bg-[#b67a50] transition-colors shadow-lg hover:shadow-xl"
          >
            {t('onboarding.findBuddies')}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
