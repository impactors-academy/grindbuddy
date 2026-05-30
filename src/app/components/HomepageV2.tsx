import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useTranslation } from '../../i18n/I18nProvider';
import {
  ArrowRight,
  BarChart,
  Bot,
  CheckCircle,
  Globe,
  Rocket,
  ShoppingCart,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Navbar } from './Navbar';

export function HomepageV2() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('meta.title');
    const metaDescription = t('meta.description');
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = metaDescription;
  }, [t]);

  const handleStartFree = () => {
    if (isAuthenticated) navigate('/app/dashboard');
    else navigate('/signup');
  };
  const handleViewDemo = () => navigate('/demo');
  const handleViewTeam = () => navigate('/team');

  const africanStats = JSON.parse(t('home.africanStats')) as Array<any>;
  const solutionCards = JSON.parse(t('home.solution.cards')) as Array<any>;
  const howItWorksData = JSON.parse(t('home.howItWorks')) as { label: string; title: string; items: Array<any> };
  const howItWorks = howItWorksData.items;
  const walletBenefits = JSON.parse(t('home.wallet.benefits')) as Array<any>;
  const roadmap = JSON.parse(t('home.roadmap')) as Array<any>;
  const teamMembers = JSON.parse(t('team.members')) as Array<any>;
  const featureList = JSON.parse(t('home.features')) as string[];
  const faqItems = JSON.parse(t('home.faq.items')) as Array<any>;
  const pricing = JSON.parse(t('home.pricing')) as any;
  const ctaStats = JSON.parse(t('home.ctaSection.stats')) as Array<any>;

  const icons = [Users, Bot, ShoppingCart, BarChart];

  return (
    <div className="w-full bg-white overflow-y-auto">
      <Navbar />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-950 to-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9885c]/10 border border-[#c9885c]/20 mb-8">
              <Rocket className="w-4 h-4 text-[#c9885c]" />
              <span className="text-sm text-[#c9885c]">{t('home.tag')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight font-bold">{t('home.title')}</h1>

            <p className="text-xl md:text-2xl mb-6 text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">{t('home.subtitle')}</p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {JSON.parse(t('home.cities')).map((city: string) => (
                <span key={city} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">{city}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10">
              <button onClick={handleStartFree} className="px-8 py-4 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all hover:shadow-lg hover:shadow-[#c9885c]/30 flex items-center gap-2 group font-medium">{t('home.cta.start')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></button>
              <button onClick={handleViewDemo} className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors font-medium">{t('home.cta.demo')}</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-[#c9885c]/20 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#c9885c]">{t('home.tag')}</p>
                  <h3 className="text-2xl font-bold mt-2">Monrovia · Casablanca</h3>
                </div>
                <Globe className="w-10 h-10 text-[#c9885c]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/40 p-4 border border-white/10">
                  <p className="text-sm text-gray-300">{t('home.tag')}</p>
                  <p className="text-lg font-semibold">{t('home.subtitle')}</p>
                </div>
                <div className="rounded-2xl bg-[#c9885c]/10 p-4 border border-[#c9885c]/20">
                  <p className="text-sm text-[#e5b896]">{JSON.parse(t('home.cities'))[0]}</p>
                  <p className="text-lg font-semibold">{JSON.parse(t('home.cities'))[1]}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {africanStats.map((stat, index) => (
                <div key={`stat-${index}`} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <div className="text-3xl font-bold text-[#c9885c] mb-2">{stat.value}</div>
                  <h4 className="text-sm font-semibold mb-2">{t(`home.africanStats.${index}.title`)}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{t(`home.africanStats.${index}.detail`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-black">{t('home.problem.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('home.problem.text')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{t('home.problem.cards.0.title')}</h3>
              <p className="text-gray-600">{t('home.problem.cards.0.text')}</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{t('home.problem.cards.1.title')}</h3>
              <p className="text-gray-600">{t('home.problem.cards.1.text')}</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{t('home.problem.cards.2.title')}</h3>
              <p className="text-gray-600">{t('home.problem.cards.2.text')}</p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{t('home.problem.cards.3.title')}</h3>
              <p className="text-gray-600">{t('home.problem.cards.3.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold text-black">{t('home.solution.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('home.solution.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {solutionCards.map((card, index) => (
              <div key={`solution-${index}`} className="p-8 bg-black text-white rounded-2xl border border-[#c9885c]/20 hover:border-[#c9885c]/50 transition-all">
                <div className="w-12 h-12 bg-[#c9885c]/20 rounded-xl flex items-center justify-center mb-4">
                  {icons[index] && React.createElement(icons[index], { className: "w-6 h-6 text-[#c9885c]" })}
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.text}</p>
                <div className="text-sm text-[#c9885c]">{t('home.tag')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c9885c] uppercase tracking-wider text-sm mb-4 block font-semibold">{t('home.howItWorks.label')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black">{t('home.howItWorks.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="p-6 rounded-2xl border border-gray-200 hover:border-[#c9885c] transition-colors">
                <div className="text-sm font-bold tracking-[0.3em] text-[#c9885c] mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-black">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wallet" className="py-20 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9885c]/10 border border-[#c9885c]/20 mb-6">
              <ShoppingCart className="w-4 h-4 text-[#c9885c]" />
              <span className="text-sm text-[#c9885c]">{t('home.wallet.tag')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.wallet.title')}</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('home.wallet.description')}
            </p>
            <div className="space-y-4">
              {walletBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-[#c9885c] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="rounded-2xl bg-black/40 p-5 border border-white/10 mb-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-400">{t('home.walletBalance')}</p>
                  <p className="text-3xl font-bold text-[#c9885c]">2,480 GBC</p>
                </div>
                <BarChart className="w-8 h-8 text-[#c9885c]" />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-gray-400">{t('home.walletBuy')}</p>
                  <p className="font-semibold">{t('home.walletBuyLabel')}</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-gray-400">{t('home.walletSend')}</p>
                  <p className="font-semibold">{t('home.walletSendLabel')}</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-gray-400">{t('home.walletReceive')}</p>
                  <p className="font-semibold">{t('home.walletReceiveLabel')}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('home.walletDescription')}
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c9885c] uppercase tracking-wider text-sm mb-4 block font-semibold">{t('home.featuresSection.label')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black">{t('home.featuresSection.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureList.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="flex-shrink-0 mt-1">
                  <Sparkles className="w-6 h-6 text-[#c9885c]" />
                </div>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c9885c] uppercase tracking-wider text-sm mb-4 block font-semibold">{t('home.roadmapSection.label')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t('home.roadmapSection.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.roadmapSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmap.map((item) => (
              <div key={item.phase} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#c9885c] transition-colors">
                <p className="text-sm font-bold tracking-[0.3em] text-[#c9885c] mb-3">{item.phase}</p>
                <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c9885c] uppercase tracking-wider text-sm mb-4 block font-semibold">{t('home.teamSection.label')}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t('home.teamSection.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('home.teamSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
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

          <div className="mt-10 text-center">
            <button
              onClick={handleViewTeam}
              className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center gap-2 font-medium"
            >
              {t('home.teamSection.button')}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t('home.pricingSection.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.pricingSection.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#c9885c] transition-all">
              <div className="text-3xl font-bold text-black mb-2">{pricing.free.name}</div>
              <p className="text-gray-600 mb-6">{pricing.free.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {pricing.free.items.map((item: string) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-[#c9885c]" /> {item}</li>
                ))}
              </ul>
              <button onClick={handleStartFree} className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                {pricing.free.button}
              </button>
            </div>

            <div className="p-8 bg-black text-white rounded-xl border-2 border-[#c9885c] transform scale-105 shadow-2xl shadow-[#c9885c]/30">
              <div className="text-sm text-[#c9885c] uppercase tracking-wider font-bold mb-2">{pricing.pro.tag}</div>
              <div className="text-4xl font-bold mb-2">{pricing.pro.name}</div>
              <p className="text-gray-300 mb-6">{pricing.pro.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {pricing.pro.items.map((item: string) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-[#c9885c]" /> {item}</li>
                ))}
              </ul>
              <button onClick={handleStartFree} className="w-full px-4 py-3 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-colors font-medium">
                {pricing.pro.button}
              </button>
            </div>

            <div className="p-8 bg-white rounded-xl border border-gray-200 hover:border-[#c9885c] transition-all">
              <div className="text-3xl font-bold text-black mb-2">{pricing.team.name}</div>
              <div className="text-sm text-gray-600 mb-6">{pricing.team.subtitle}</div>
              <ul className="space-y-3 mb-8">
                {pricing.team.items.map((item: string) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-[#c9885c]" /> {item}</li>
                ))}
              </ul>
              <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                {pricing.team.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t('home.faqSection.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.faqSection.subtitle')}</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.q} className="border border-gray-200 rounded-lg p-6 hover:border-[#c9885c] transition-colors">
                <h3 className="text-lg font-bold text-black mb-3">{item.q}</h3>
                <p className="text-gray-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-black to-gray-900 text-white p-12 md:p-16 rounded-2xl border border-[#c9885c]/20">
            <Rocket className="w-16 h-16 text-[#c9885c] mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-6 font-bold">{t('home.ctaSection.title')}</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('home.ctaSection.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleStartFree}
                className="px-8 py-4 bg-[#c9885c] text-white rounded-lg hover:bg-[#b67a50] transition-all hover:shadow-lg hover:shadow-[#c9885c]/30 flex items-center gap-2 group font-medium"
              >
                {t('home.ctaSection.button1')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleViewTeam}
                className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 font-medium"
              >
                {t('home.ctaSection.button2')}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {ctaStats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <div className="text-2xl text-[#c9885c] mb-2 font-bold">{stat.value}</div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center text-gray-600">
            <p className="mb-4">{t('home.footer.line1')}</p>
            <p className="text-sm">{t('home.footer.copyright')} | {t('home.footer.remote')}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@grindbuddy.io" className="text-sm text-[#c9885c] hover:underline">hello@grindbuddy.io</a>
              <a href="#team" className="text-sm text-[#c9885c] hover:underline">{t('home.footer.links.team')}</a>
              <a href="#roadmap" className="text-sm text-[#c9885c] hover:underline">{t('home.footer.links.roadmap')}</a>
              <a href="#wallet" className="text-sm text-[#c9885c] hover:underline">{t('home.footer.links.wallet')}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
