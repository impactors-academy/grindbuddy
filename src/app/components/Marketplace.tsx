import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

const tools = [
  { name: 'Design Tool', category: 'UI/UX', description: 'Professional design suite' },
  { name: 'Backend Tool', category: 'Development', description: 'Server management' },
  { name: 'AI Agent', category: 'Automation', description: 'Intelligent automation' },
  { name: 'Analytics', category: 'Insights', description: 'Data analytics platform' },
  { name: 'Testing Suite', category: 'QA', description: 'Automated testing' },
  { name: 'Deployment', category: 'DevOps', description: 'CI/CD pipeline' }
];

export function Marketplace() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAddTool = (toolName: string) => {
    const msg = t('marketplace.added').replace('{name}', toolName);
    toast.success(msg);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate('/app/workspace')}
            className="p-2 hover:bg-zinc-900 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-3xl font-bold">{t('marketplace.title')}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-[#c9885c] transition-all"
            >
              <div className="w-16 h-16 bg-zinc-800 rounded-xl mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-[#c9885c] rounded-lg"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-sm text-[#c9885c] mb-2">{tool.category}</p>
              <p className="text-gray-400 mb-4">{tool.description}</p>
              <button
                onClick={() => handleAddTool(tool.name)}
                className="w-full bg-[#c9885c] text-black py-3 rounded-xl font-semibold hover:bg-[#b67a4e] transition-colors"
              >
                {t('marketplace.addButton')}
              </button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
