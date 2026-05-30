import { useNavigate } from 'react-router';
import { ArrowLeft, TrendingUp, Users, Target } from 'lucide-react';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

export function Dashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const milestones = [
    { title: 'Launch beta version', date: 'May 15, 2026', progress: 65 },
    { title: 'User testing', date: 'May 20, 2026', progress: 30 },
    { title: 'Production release', date: 'June 1, 2026', progress: 10 }
  ];

  const teamActivity = [
    { user: 'Alex', action: 'completed "Build auth system"', time: '2h ago', avatar: '👨‍💻' },
    { user: 'Sarah', action: 'added "Design landing page"', time: '4h ago', avatar: '👩‍🎨' },
    { user: 'Mike', action: 'started "AI integration"', time: '6h ago', avatar: '🤖' }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate('/app/workspace')} className="p-2 hover:bg-zinc-900 rounded-lg transition-colors"><ArrowLeft className="w-6 h-6" /></button>
          <h1 className="text-3xl font-bold">{t('dashboard.title')}</h1>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#c9885c]/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-[#c9885c]" />
              </div>
              <div>
                <h3 className="font-bold">{t('dashboard.overallProgress')}</h3>
                <p className="text-sm text-gray-400">{t('dashboard.projectCompletion')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-zinc-800 rounded-full h-4 overflow-hidden">
                <div className="bg-[#c9885c] h-full transition-all" style={{ width: '65%' }}></div>
              </div>
              <span className="text-3xl font-bold">65%</span>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#c9885c]/20 rounded-xl">
                <Users className="w-6 h-6 text-[#c9885c]" />
              </div>
              <h3 className="font-bold">{t('dashboard.teamActivity')}</h3>
            </div>
            <div className="space-y-4">
              {teamActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-zinc-800 rounded-xl">
                  <div className="text-2xl">{activity.avatar}</div>
                  <div className="flex-1">
                    <p>
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-gray-400">{activity.action}</span>
                    </p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-[#c9885c]/20 rounded-xl"><Target className="w-6 h-6 text-[#c9885c]" /></div>
              <h3 className="font-bold">{t('dashboard.nextMilestones')}</h3>
            </div>
            <div className="space-y-4">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className="p-4 bg-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-700 transition-colors"
                  onClick={() => navigate('/app/workspace')}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium">{milestone.title}</h4>
                      <p className="text-sm text-gray-400">{t('dashboard.target')}: {milestone.date}</p>
                    </div>
                    <span className="text-[#c9885c] font-bold">{milestone.progress}%</span>
                  </div>
                  <div className="bg-zinc-900 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#c9885c] h-full transition-all"
                      style={{ width: `${milestone.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
