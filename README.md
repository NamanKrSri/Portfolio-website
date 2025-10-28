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

## 🎨 Customization Guide

### Update Personal Information

All personal data is centralized in `src/constants/portfolio.ts`. Update the following:

1. **Personal Info**
   - Name, email, phone, location
   - Bio and education
   - Professional roles

2. **Social Links**
   - Facebook, Instagram, Threads, Medium
   - GitHub, LinkedIn, LeetCode

3. **External Links**
   - Resume Google Drive link

4. **Projects**
   - Add/remove projects
   - Update images, descriptions, and links

5. **Experience**
   - Update job history and responsibilities

6. **Skills**
   - Modify primary skills (with percentages)
   - Update secondary skills list

7. **Achievements & Certificates**
   - Add certificate images and Drive links

8. **Blogs**
   - Update blog posts and Medium links

### Replace Images

Replace the generated placeholder images with your own:

1. **Profile Photo**: `src/assets/profile-photo.jpg`
2. **Robot Mascot**: `src/assets/robot-mascot.png`
3. **Project Images**: Update in `PROJECTS` array in constants
4. **Certificate Images**: Update in `ACHIEVEMENTS` array in constants

### Styling Changes

The design system is defined in:
- `src/index.css` - Color variables and utility classes
- `tailwind.config.ts` - Tailwind configuration

To change the color scheme:
1. Modify HSL values in `src/index.css` under `:root`
2. Update gradient colors if needed
3. The entire app will automatically use the new colors

### External Links

Update these important links in `src/constants/portfolio.ts`:

```typescript
export const EXTERNAL_LINKS = {
  resume: "https://drive.google.com/file/d/YOUR_RESUME_ID/view",
};

export const SOCIAL_LINKS = {
  leetcode: "https://leetcode.com/yourprofile",
  // ... other links
};

export const ACHIEVEMENTS = [
  {
    certificateUrl: "https://drive.google.com/file/d/YOUR_CERT_ID/view",
    // ...
  },
];
```

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

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test
```

## 📝 Code Quality

The project uses:
- **ESLint** - Code linting
- **Prettier** - Code formatting (configure in your editor)
- **TypeScript** - Type checking

## 🚢 Deployment

### Deploy to Lovable
1. Visit your [Lovable Project](https://lovable.dev/projects/7119076f-7ec3-4fc1-bf33-84b62d7ac32f)
2. Click "Share" → "Publish"

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

## 🔧 Environment Variables

No environment variables are required for this project. All configuration is done through the constants file.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Naman Srivastava**
- Email: naman.srivastava@example.com
- GitHub: [@yourprofile](https://github.com/yourprofile)
- LinkedIn: [Naman Srivastava](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Animations from [Framer Motion](https://www.framer.com/motion)

---

**Need help?** Check the code comments or visit [Lovable Documentation](https://docs.lovable.dev)
