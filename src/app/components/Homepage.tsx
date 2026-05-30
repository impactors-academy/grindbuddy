import { useNavigate } from 'react-router';
import { Rocket, ArrowRight, Sparkles, MessageSquare, Bot, BarChart, ShoppingCart, CheckCircle, Mail, Users, Zap, Globe } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

export function Homepage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();
  const problemCards = JSON.parse(t('home.problem.cards')) as Array<{ title: string; text: string }>;
  const solutionCards = JSON.parse(t('home.solution.cards')) as Array<{ title: string; text: string; badge?: string }>;
  const featureItems = JSON.parse(t('home.features')) as string[];
  const pricing = JSON.parse(t('home.pricing')) as {
    title: string;
    subtitle: string;
    free: { name: string; subtitle: string; items: string[]; button: string };
    pro: { tag: string; name: string; subtitle: string; items: string[]; button: string };
    team: { name: string; subtitle: string; items: string[]; button: string };
  };
  const cta = JSON.parse(t('home.finalCta')) as { title: string; sub: string; button: string; contact: string; stats: Array<{ value: string; label: string }> };
  const about = JSON.parse(t('home.about')) as {
    title: string;
    p1: string;
    p2: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    impactTitle: string;
    impactText: string;
    statsTitle: string;
    stats: Array<{ label: string; value: string; detail: string }>;
  };
  const faq = JSON.parse(t('home.faq')) as { title: string; subtitle: string; items: Array<{ q: string; a: string }> };
  const footer = JSON.parse(t('home.footer')) as { line1: string; copyright: string; remote: string; hq: string };

  const handleStartFree = () => {
    if (isAuthenticated) {
      navigate('/app/dashboard');
    } else {
      navigate('/signup');
    }
  };

  const handleViewDemo = () => {
    navigate('/demo');
  };

  return (
    <div className="w-full bg-white overflow-y-auto">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9885c]/10 border border-[#c9885c]/20 mb-8 animate-fade-in">
            <Rocket className="w-4 h-4 text-[#c9885c]" />
            <span className="text-sm text-[#c9885c]">{t('home.tag')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-bold">
            {t('home.title')}
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('home.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button
              onClick={handleStartFree}
              className="px-8 py-4 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all hover:shadow-lg hover:shadow-[#c9885c]/30 flex items-center gap-2 group font-medium"
            >
              {t('home.cta.start')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleViewDemo}
              className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors font-medium"
            >
              {t('home.cta.demo')}
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {JSON.parse(t('home.africanStats')).map((s: any, i: number) => (
              <div key={i}>
                <div className="text-4xl mb-2 text-[#c9885c] font-bold">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-black">
              {t('home.problem.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.problem.text')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problemCards.map((card, idx) => {
              const icons = [Users, Zap, Globe, Sparkles];
              const Icon = icons[idx] || Users;
              return (
                <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-black">{card.title}</h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-black">
              {t('home.solution.heading')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.solution.sub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {solutionCards.map((card, idx) => {
              const icons = [Users, Bot, ShoppingCart, BarChart];
              const Icon = icons[idx] || Users;
              return (
                <div key={idx} className="p-8 bg-black text-white rounded-2xl border border-[#c9885c]/20 hover:border-[#c9885c]/50 transition-all">
                  <div className="w-12 h-12 bg-[#c9885c]/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#c9885c]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-300 mb-4">{card.text}</p>
                  <div className="text-sm text-[#c9885c]">{card.badge}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c9885c] uppercase tracking-wider text-sm mb-4 block font-semibold">{t('home.featureTag')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black">{t('home.featureHeading')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureItems.map((text, index) => {
              const icons = [Sparkles, Users, MessageSquare, Bot, BarChart, ShoppingCart];
              const Icon = icons[index] || Sparkles;
              return (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="flex-shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-[#c9885c]" />
                </div>
                <p className="text-gray-700 font-medium">{text}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{pricing.title}</h2>
            <p className="text-xl text-gray-600">{pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#c9885c] transition-all">
              <div className="text-3xl font-bold text-black mb-2">{pricing.free.name}</div>
              <p className="text-gray-600 mb-6">{pricing.free.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {pricing.free.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#c9885c]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={handleStartFree} className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                {pricing.free.button}
              </button>
            </div>

            {/* Pro Tier */}
            <div className="p-8 bg-black text-white rounded-xl border-2 border-[#c9885c] transform scale-105 shadow-2xl shadow-[#c9885c]/30">
              <div className="text-sm text-[#c9885c] uppercase tracking-wider font-bold mb-2">{pricing.pro.tag}</div>
              <div className="text-4xl font-bold mb-2">{pricing.pro.name}</div>
              <p className="text-gray-300 mb-6">{pricing.pro.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {pricing.pro.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#c9885c]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleStartFree}
                className="w-full px-4 py-3 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-colors font-medium"
              >
                {pricing.pro.button}
              </button>
            </div>

            {/* Team Tier */}
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#c9885c] transition-all">
              <div className="text-3xl font-bold text-black mb-2">{pricing.team.name}</div>
              <div className="text-sm text-gray-600 mb-6">{pricing.team.subtitle}</div>
              <ul className="space-y-3 mb-8">
                {pricing.team.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-[#c9885c]" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                {pricing.team.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-black to-gray-900 text-white p-12 md:p-16 rounded-2xl border border-[#c9885c]/20">
            <Rocket className="w-16 h-16 text-[#c9885c] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-6 font-bold">{cta.title}</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">{cta.sub}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleStartFree}
                className="px-8 py-4 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all hover:shadow-lg hover:shadow-[#c9885c]/30 flex items-center gap-2 group font-medium"
              >
                {cta.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 font-medium">
                <Mail className="w-5 h-5" />
                {cta.contact}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {cta.stats.map((s) => (
                <div key={s.value} className="text-center">
                  <div className="text-2xl text-[#c9885c] mb-2 font-bold">{s.value}</div>
                  <p className="text-gray-400 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{about.title}</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">{about.p1}</p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{about.p2}</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#c9885c] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black">{about.missionTitle}</h4>
                    <p className="text-gray-700">{about.missionText}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#c9885c] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black">{about.visionTitle}</h4>
                    <p className="text-gray-700">{about.visionText}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#c9885c] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-black">{about.impactTitle}</h4>
                    <p className="text-gray-700">{about.impactText}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#c9885c]/20 to-[#c9885c]/5 rounded-2xl p-8 border border-[#c9885c]/30">
              <h3 className="text-2xl font-bold text-black mb-6">{about.statsTitle}</h3>
              <div className="space-y-6">
                {about.stats.map((stat, index) => (
                  <div key={stat.label} className={index < about.stats.length - 1 ? 'pb-6 border-b border-gray-200' : ''}>
                    <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold">{stat.label}</p>
                    <p className="text-3xl font-bold text-[#c9885c]">{stat.value}</p>
                    <p className="text-sm text-gray-700">{stat.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{faq.title}</h2>
            <p className="text-xl text-gray-600">{faq.subtitle}</p>
          </div>

          <div className="space-y-4">
            {faq.items.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-[#c9885c] transition-colors">
                <h3 className="text-lg font-bold text-black mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-black to-gray-900 text-white p-12 md:p-16 rounded-2xl">
            <Rocket className="w-16 h-16 text-[#c9885c] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-6 font-bold">{t('home.title')}</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">{t('home.problem.text')}</p>
            <button
              onClick={handleStartFree}
              className="px-8 py-4 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all hover:shadow-lg hover:shadow-[#c9885c]/30 flex items-center gap-2 group font-medium mx-auto"
            >
              {t('home.cta.start')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-600">
            <p className="mb-4">{footer.line1}</p>
            <p className="text-sm">{footer.copyright} | {footer.remote} | {footer.hq}</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="mailto:hello@grindbuddy.io" className="text-sm text-[#c9885c] hover:underline">hello@grindbuddy.io</a>
              <a href="#" className="text-sm text-[#c9885c] hover:underline">LinkedIn</a>
              <a href="#" className="text-sm text-[#c9885c] hover:underline">Twitter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
