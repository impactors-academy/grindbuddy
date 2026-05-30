import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserPlus, MessageSquare, ChevronRight, ArrowLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Toast } from 'sonner';
import { toast } from 'sonner';
import { useTranslation } from '../../i18n/I18nProvider';

const mockProfiles = [
  {
    id: 1,
    name: 'Alex Dubois',
    role: 'Fullstack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    goal: 'Build MVP for SaaS',
    compatibility: 92,
    experience: '5 years',
    avatar: '👨‍💻'
  },
  {
    id: 2,
    name: 'Sarah Martin',
    role: 'UI/UX Designer',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    goal: 'Launch startup with product focus',
    compatibility: 88,
    experience: '7 years',
    avatar: '👩‍🎨'
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'AI/ML Engineer',
    skills: ['Python', 'Machine Learning', 'LLMs', 'Data Science'],
    goal: 'Apply AI to solve real problems',
    compatibility: 95,
    experience: '4 years',
    avatar: '👨‍🔬'
  },
  {
    id: 4,
    name: 'Emma Laurent',
    role: 'Product Manager',
    skills: ['Product Strategy', 'Analytics', 'User Testing', 'Roadmapping'],
    goal: 'Build products people love',
    compatibility: 85,
    experience: '6 years',
    avatar: '👩‍💼'
  },
  {
    id: 5,
    name: 'Tom Bernard',
    role: 'DevOps & Backend Engineer',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Scalability'],
    goal: 'Infrastructure as code',
    compatibility: 79,
    experience: '8 years',
    avatar: '👨‍💻'
  }
];

export function Matching() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<'explore' | 'suggested'>('explore');
  const [addedTeamMembers, setAddedTeamMembers] = useState<number[]>([]);

  const handleAddToTeam = (profileId: number, name: string) => {
    if (!addedTeamMembers.includes(profileId)) {
      setAddedTeamMembers([...addedTeamMembers, profileId]);
      toast.success(t('matching.added').replace('{name}', name));
    }
  };

  const handleRemoveFromTeam = (profileId: number, name: string) => {
    setAddedTeamMembers(addedTeamMembers.filter(id => id !== profileId));
    toast.success(t('matching.removed').replace('{name}', name));
  };

  const handleContinueToWorkspace = () => {
    navigate('/app/workspace');
  };

  const suggestedProfiles = mockProfiles.filter(p => p.compatibility >= 85).sort((a, b) => b.compatibility - a.compatibility);
  const displayProfiles = viewMode === 'suggested' ? suggestedProfiles : mockProfiles;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-950 text-white p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <button onClick={() => navigate('/app/dashboard')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"><ArrowLeft className="w-4 h-4" />{t('nav.team')}</button>
            <h1 className="text-4xl font-bold mb-3">{t('matching.title')}</h1>
            <p className="text-gray-400 text-lg">{t('matching.subtitle')}</p>
          </div>

          {/* View Toggle */}
          <div className="flex gap-4 mb-8">
            <button onClick={() => setViewMode('explore')} className={`px-6 py-2 rounded-lg font-medium transition-all ${viewMode === 'explore' ? 'bg-[#c9885c] text-white' : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'}`}>{t('matching.explore')} ({mockProfiles.length})</button>
            <button onClick={() => setViewMode('suggested')} className={`px-6 py-2 rounded-lg font-medium transition-all ${viewMode === 'suggested' ? 'bg-[#c9885c] text-white' : 'bg-zinc-900 text-gray-300 hover:bg-zinc-800'}`}>{t('matching.suggestions')} ({suggestedProfiles.length})</button>
          </div>

          {/* Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayProfiles.map(profile => (
              <div
                key={profile.id}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-[#c9885c]/50 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4 flex-1">
                    <div className="text-5xl">{profile.avatar}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                        <p className="text-[#c9885c] text-sm font-medium">{profile.role}</p>
                        <p className="text-gray-500 text-xs mt-1">{profile.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Compatibility Score */}
                <div className="bg-zinc-800/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{t('matching.compatibility')}</span>
                    <span className="text-[#c9885c] font-bold text-lg">{profile.compatibility}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#c9885c] to-[#e5b896] h-2 rounded-full"
                      style={{ width: `${profile.compatibility}%` }}
                    ></div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{t('matching.skills')}</p>
                  <div className="flex flex-wrap gap-2">{profile.skills.map(skill => (<span key={skill} className="px-2 py-1 bg-[#c9885c]/10 text-[#c9885c] rounded-md text-xs font-medium">{skill}</span>))}</div>
                </div>

                {/* Goal */}
                <div className="mb-6 pb-6 border-b border-zinc-800">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{t('matching.goal')}</p>
                  <p className="text-sm text-gray-200">{profile.goal}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      addedTeamMembers.includes(profile.id)
                        ? handleRemoveFromTeam(profile.id, profile.name)
                        : handleAddToTeam(profile.id, profile.name)
                    }
                    className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                      addedTeamMembers.includes(profile.id)
                        ? 'bg-[#c9885c] text-black hover:bg-[#b67a50]'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                    }`}
                  >
                    <UserPlus className="w-4 h-4" />
                    {addedTeamMembers.includes(profile.id) ? t('matching.addedLabel') : t('matching.addButton')}
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-all font-medium text-sm">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {addedTeamMembers.length > 0 && (
            <div className="fixed bottom-6 right-6 bg-[#c9885c] rounded-2xl p-6 shadow-2xl max-w-sm">
              <p className="text-sm text-black/80 mb-3">{t('matching.title')}: {addedTeamMembers.length}</p>
              <button onClick={handleContinueToWorkspace} className="w-full bg-black text-[#c9885c] py-3 rounded-lg font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-2">{t('matching.continue')} <ChevronRight className="w-5 h-5" /></button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
