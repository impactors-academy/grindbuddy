# GrindBuddy - Execution Platform for Digital Builders

GrindBuddy is a comprehensive platform designed to help founders, developers, and builders collaborate, build, and launch their projects efficiently. It combines AI assistance, team matching, and integrated tools in one seamless workspace.

## Features

- **Professional Authentication** - Secure login/signup with role selection (Founder/Developer/Incubator/Investor)
- **Team Matching** - Discover and recruit talented collaborators with compatibility scoring
- **AI Buddy** - GrindBot AI assistant to help decompose projects and stay motivated
- **Workspace** - Collaborative Kanban board with real-time chat integration
- **Marketplace** - Integrated tool ecosystem for project management and automation
- **Dashboard** - Track project progress, milestones, and team activity
- **Demo Mode** - Try the full platform instantly without signup

## Internationalization

GrindBuddy now supports three languages:

- English (`en`) — default language
- French (`fr`)
- Chinese (`ch`)

Translation files live in [src/i18n/dictionary](src/i18n/dictionary) and are loaded through the lightweight i18n provider in [src/i18n/I18nProvider.tsx](src/i18n/I18nProvider.tsx).

### How it works

- The app wraps the UI in `I18nProvider` at startup.
- Components call `useTranslation()` and read strings with `t('section.key')`.
- The selected language is stored in localStorage and restored on reload.
- The language switcher is available in the navigation bar.

### Adding new copy

1. Add the key to `en.json` first.
2. Mirror the same key in `fr.json` and `ch.json`.
3. Use `t('your.key')` in the component.

### Notes

- English is the fallback language if a key is missing.
- Some sections still use structured JSON arrays/objects from the dictionaries for reusable page content.

## Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router 7.13.0
- **UI Components**: shadcn/ui
- **Icons**: lucide-react
- **Notifications**: sonner
- **State Management**: Context API

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/grindbuddy.git
cd grindbuddy/dashboard

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173`

If you see missing package or type errors locally, install dependencies first and then rerun the build.

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Homepage.tsx          # Landing page with hero, features, pricing
│   │   ├── Login.tsx             # Login page
│   │   ├── Signup.tsx            # Signup page with role selection
│   │   ├── BuddyChoice.tsx       # Post-signup buddy mode selection
│   │   ├── Demo.tsx              # Demo mode loader
│   │   ├── Onboarding.tsx        # Project setup flow
│   │   ├── Matching.tsx          # Team member discovery
│   │   ├── Workspace.tsx         # Collaborative workspace
│   │   ├── Dashboard.tsx         # Project dashboard
│   │   ├── Marketplace.tsx       # Tool integration
│   │   ├── Navbar.tsx            # Navigation header
│   │   └── ui/                   # shadcn/ui components
│   ├── context/
│   │   └── AuthContext.tsx       # Authentication state management
│   ├── routes.tsx                # Route definitions
│   └── App.tsx                   # Main app component
├── styles/                       # Global styles and Tailwind config
└── main.tsx                      # React entry point
```

## User Flows

### First-Time User
1. Land on homepage
2. Click "Commencer gratuitement" → Signup
3. Select user role (Founder/Developer/Incubator/Investor)
4. Choose buddy preference:
   - Find Grind Buddies (team matching)
   - Work with AI (GrindBot assistant)
   - Both (AI + team collaboration)
5. Complete onboarding → access workspace

### Demo Mode
1. Click "Voir la démo" on homepage
2. Automatically logged in with demo account
3. Full access to platform features

### Team Building
1. Navigate to team matching page
2. View all available collaborators or filtered suggestions (high compatibility)
3. Add team members to your project
4. Start collaborating in workspace

## Deployment

### Deploy to Vercel (Recommended)

Vercel provides the easiest deployment with automatic GitHub integration:

1. **Create a GitHub repository**:
   ```bash
   # In your project root, if not already done:
   git remote add origin https://github.com/yourusername/grindbuddy.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Share Your Link**:
   - Your deployment URL will be something like: `https://grindbuddy.vercel.app`
   - Share this with partners and incubators

### Deploy to GitHub Pages

1. Update `vite.config.ts` to add base path:
   ```typescript
   export default {
     base: '/grindbuddy/',
     // ... rest of config
   }
   ```

2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && npx gh-pages -d dist"
     }
   }
   ```

4. Run deployment:
   ```bash
   npm run deploy
   ```

5. Your site will be available at: `https://yourusername.github.io/grindbuddy`

### Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

## Authentication

Currently uses mock authentication with localStorage persistence. To integrate with a real backend:

1. Update `AuthContext.tsx` with actual API endpoints
2. Replace mock `login()` and `signup()` functions with real API calls
3. Implement JWT token management
4. Add user data persistence to backend database

## Demo Account

For testing purposes, a demo account is available:
- Email: `demo@grindbuddy.app`
- Password: `demo123456`

(Automatically used when clicking "Voir la démo")

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email hello@grindbuddy.app or open an issue on GitHub.

## Roadmap

- [ ] Real-time workspace collaboration (WebSockets)
- [ ] Integrate with third-party tools (GitHub, Figma, Slack)
- [ ] Advanced AI matching algorithm
- [ ] Mobile app (React Native)
- [ ] Backend API with database
- [ ] Payment integration for premium features
- [ ] Team analytics and reporting

---

**Built by the Impactos Academy**
