import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Home, MessageSquare, ShoppingBag, LayoutGrid, Send } from 'lucide-react';
import { Navbar } from './Navbar';
import { useTranslation } from '../../i18n/I18nProvider';

const mockTasks = {
  todo: [
    { id: 1, title: 'Design landing page', assignee: 'Sarah' },
    { id: 2, title: 'Setup backend', assignee: 'Alex' }
  ],
  inProgress: [
    { id: 3, title: 'Build auth system', assignee: 'Alex' },
  ],
  done: [
    { id: 4, title: 'Deploy MVP', assignee: 'Team' }
  ]
};

const mockMessages = [
  { role: 'user', text: 'Break this project into steps' },
  { role: 'ai', text: '1. Define MVP\n2. Setup frontend\n3. Deploy app' }
];

export function Workspace() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState<'workspace' | 'marketplace' | 'dashboard'>('workspace');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState(mockMessages);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatMessages([...chatMessages, { role: 'user', text: message }]);
    setMessage('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        role: 'ai',
        text: 'Great question! Let me help you with that...'
      }]);
    }, 500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white flex">
      <div className="w-20 bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-6 space-y-6">
        <button
          onClick={() => setActiveView('workspace')}
          className={`p-4 rounded-xl transition-colors ${activeView === 'workspace' ? 'bg-[#c9885c] text-black' : 'text-gray-400 hover:bg-zinc-900'}`}
        >
          <LayoutGrid className="w-6 h-6" />
        </button>
        <button
          className="p-4 rounded-xl text-gray-400 hover:bg-zinc-900 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
        <button
          onClick={() => setActiveView('marketplace')}
          className={`p-4 rounded-xl transition-colors ${activeView === 'marketplace' ? 'bg-[#c9885c] text-black' : 'text-gray-400 hover:bg-zinc-900'}`}
        >
          <ShoppingBag className="w-6 h-6" />
        </button>
        <button
          onClick={() => setActiveView('dashboard')}
          className={`p-4 rounded-xl transition-colors ${activeView === 'dashboard' ? 'bg-[#c9885c] text-black' : 'text-gray-400 hover:bg-zinc-900'}`}
        >
          <Home className="w-6 h-6" />
        </button>
      </div>

      {activeView === 'workspace' && (
        <>
          <div className="flex-1 p-6 overflow-auto">
            <h1 className="text-2xl font-bold mb-6">{t('workspace.title')}</h1>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-400 uppercase">{t('workspace.toDo')}</h3>
                {mockTasks.todo.map(task => (
                  <div key={task.id} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-[#c9885c] transition-colors cursor-pointer">
                    <p className="font-medium mb-2">{task.title}</p>
                    <p className="text-sm text-gray-400">{task.assignee}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-400 uppercase">{t('workspace.inProgress')}</h3>
                {mockTasks.inProgress.map(task => (
                  <div key={task.id} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-[#c9885c] transition-colors cursor-pointer">
                    <p className="font-medium mb-2">{task.title}</p>
                    <p className="text-sm text-gray-400">{task.assignee}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-400 uppercase">{t('workspace.done')}</h3>
                {mockTasks.done.map(task => (
                  <div key={task.id} className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-[#c9885c] transition-colors cursor-pointer opacity-60">
                    <p className="font-medium mb-2">{task.title}</p>
                    <p className="text-sm text-gray-400">{task.assignee}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-80 bg-zinc-950 border-l border-zinc-800 flex flex-col">
            <div className="p-6 border-b border-zinc-800">
              <h2 className="text-lg font-bold">{t('workspace.grindBot')}</h2>
              <p className="text-sm text-gray-400">{t('workspace.aiAssistant')}</p>
            </div>

            <div className="flex-1 p-4 space-y-4 overflow-auto">
              {chatMessages.map((msg, i) => (
                <div key={i} className={`${msg.role === 'user' ? 'text-right' : ''}`}>
                  <div className={`inline-block p-3 rounded-xl max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-[#c9885c] text-black'
                      : 'bg-zinc-900 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-zinc-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={t('workspace.askPlaceholder')}
                  className="flex-1 bg-zinc-900 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c9885c]"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[#c9885c] text-black p-2 rounded-xl hover:bg-[#b67a4e] transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {activeView === 'marketplace' && (
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-6">{t('marketplace.title')}</h1>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'Design Tool', category: 'UI/UX' },
              { name: 'Backend Tool', category: 'Development' },
              { name: 'AI Agent', category: 'Automation' },
              { name: 'Analytics', category: 'Insights' }
            ].map((tool, i) => (
              <div key={i} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-[#c9885c] transition-all cursor-pointer">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl mb-4"></div>
                <h3 className="font-bold mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{tool.category}</p>
                <button className="w-full bg-[#c9885c] text-black py-2 rounded-lg font-medium hover:bg-[#b67a4e] transition-colors">
                  {t('marketplace.addButton')}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeView === 'dashboard' && (
        <div className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <p className="text-sm text-gray-400 mb-2">Project Progress</p>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-zinc-800 rounded-full h-3 overflow-hidden">
                  <div className="bg-[#c9885c] h-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-2xl font-bold">65%</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="font-bold mb-4">Team Activity</h3>
              <div className="space-y-3">
                {[
                  { user: 'Alex', action: 'completed "Build auth system"', time: '2h ago' },
                  { user: 'Sarah', action: 'added "Design landing page"', time: '4h ago' }
                ].map((activity, i) => (
                  <div key={i} className="flex justify-between items-start">
                    <div>
                      <p><span className="font-medium">{activity.user}</span> {activity.action}</p>
                    </div>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="font-bold mb-4">Prochain Jalon</h3>
              <p className="text-gray-400 mb-2">Lancer la version bêta</p>
              <p className="text-sm text-gray-500">Cible: 15 mai 2026</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
