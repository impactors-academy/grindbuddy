import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, CheckCircle, Globe, Rocket, Users } from 'lucide-react';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

export function TeamPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('team.heading');
    const metaDescription = t('meta.description');
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = metaDescription;
  }, [t]);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9885c]/10 border border-[#c9885c]/20 mb-8">
            <Users className="w-4 h-4 text-[#c9885c]" />
            <span className="text-sm text-[#c9885c]">{t('nav.team')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-bold">
            {t('team.heading')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#c9885c] to-[#e5b896]">{t('team.sub')}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed">{t('team.sub')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => navigate('/')} className="px-8 py-4 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all flex items-center gap-2 font-medium">{t('team.backToHome')} <ArrowRight className="w-5 h-5" /></button>
            <button onClick={() => navigate('/signup')} className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors font-medium">{t('team.join')}</button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c9885c] uppercase tracking-wider text-sm mb-4 block font-semibold">{t('team.heading')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t('team.heading')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('team.sub')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JSON.parse(t('team.members')).map((member: any) => (
              <div key={member.name} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:border-[#c9885c] transition-colors">
                <div className="w-12 h-12 bg-[#c9885c]/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#c9885c]" />
                </div>
                <h3 className="text-2xl font-bold text-black">{member.name}</h3>
                <p className="text-[#c9885c] font-medium mb-1">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.city}</p>
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black text-white">
              <Rocket className="w-10 h-10 text-[#c9885c] mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('team.features.africaFirst') ?? 'Africa-first product'}</h3>
              <p className="text-gray-300">{t('team.features.africaFirstDesc') ?? 'Execution tools built around African realities.'}</p>
            </div>
            <div className="p-6 rounded-2xl bg-black text-white">
              <CheckCircle className="w-10 h-10 text-[#c9885c] mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('team.features.reliable') ?? 'Reliable delivery'}</h3>
              <p className="text-gray-300">{t('team.features.reliableDesc') ?? 'Clear milestones, wallet rails, and accountability for every team.'}</p>
            </div>
            <div className="p-6 rounded-2xl bg-black text-white">
              <Users className="w-10 h-10 text-[#c9885c] mb-4" />
              <h3 className="text-xl font-bold mb-2">{t('team.features.community') ?? 'Community-powered'}</h3>
              <p className="text-gray-300">{t('team.features.communityDesc') ?? 'Built with founders, mentors, and operators from across the continent.'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}