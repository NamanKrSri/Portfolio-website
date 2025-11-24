# Naman Srivastava - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a dark technical theme with smooth animations and interactive elements.

## 🚀 Features

- **Interactive Landing Overlay**: Engaging welcome card with quick navigation questions
- **Smooth Animations**: Powered by Framer Motion for polished user experience
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Modern UI**: Dark theme with cyan and purple accents
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: ARIA attributes, keyboard navigation, and focus states
- **Easy to Customize**: All content managed through constants file

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Shadcn/ui** - UI components
- **React Router** - Routing
- **Lucide React** - Icons

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:8080`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Styling

The design system is defined in:
- `src/index.css` - Color variables and utility classes
- `tailwind.config.ts` - Tailwind configuration

## 📁 Project Structure

```
src/
├── assets/              # Images and static assets
├── components/          # React components
│   ├── sections/       # Page sections (Hero, About, Projects, etc.)
│   ├── ui/            # Reusable UI components (shadcn)
│   ├── Footer.tsx
│   ├── LandingOverlay.tsx
│   └── Navbar.tsx
├── constants/          # Configuration and content
│   └── portfolio.ts   # All portfolio data (UPDATE THIS!)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Route pages
├── App.tsx            # Main app component
├── index.css          # Global styles and design system
└── main.tsx           # App entry point
```


## 🔧 Environment Variables

No environment variables are required for this project. All configuration is done through the constants file.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Naman Srivastava**
- Email: naman.srivastava001.jnp@gmail.com
- LinkedIn: https://www.linkedin.com/in/naman-srivastava-27708b230/
