# Rasal Rahman Portfolio

A modern, responsive portfolio website showcasing full-stack development skills and projects. Built with cutting-edge web technologies.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant page transitions
- **Modern UI**: shadcn/ui component library
- **Fast Performance**: Vite for optimized builds
- **Type Safe**: Full TypeScript support
- **Testing**: Vitest for unit and integration tests

## 🛠️ Technologies

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Language**: TypeScript
- **Testing**: Vitest

## 📋 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Technical skills section
│   ├── Experience.tsx   # Work experience & certifications
│   ├── Projects.tsx     # Featured projects
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer section
│   └── ui/              # shadcn/ui components
├── pages/               # Page components
│   ├── Index.tsx        # Home page
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
├── test/                # Test files
├── App.tsx              # Main App component
├── main.tsx             # Application entry point
├── App.css              # Global styles
└── index.css            # Global styles

public/                  # Static assets
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rasal361/rasal-rahman-portfolio.git
cd rasal-rahman-portfolio

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:8080`

### Build

```bash
# Create production build
npm run build
# or
yarn build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
# or
yarn preview
```

## 🧪 Testing

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run test` | Run tests with Vitest |
| `npm run test:watch` | Run tests in watch mode |

## 🎨 Components Overview

### Core Components
- **Navbar**: Fixed navigation with mobile responsiveness
- **Hero**: Eye-catching landing section with call-to-action buttons
- **About**: Professional introduction with key highlights
- **Skills**: Technical skills organized by category
- **Experience**: Work history and certifications
- **Projects**: Featured portfolio projects with live links
- **Contact**: Contact form with social media links
- **Footer**: Footer with additional links and information

### UI Components
The project uses shadcn/ui which provides:
- Buttons, Cards, Forms
- Dialogs, Modals, Drawers
- Tabs, Accordions, Collapsibles
- And many more customizable components

## 🎯 Sections

### Hero Section
- Animated introduction with gradient text
- Call-to-action buttons for projects and contact
- Smooth scroll navigation

### About Section
- Professional summary
- Key highlights with icons
- Skills overview

### Skills Section
- Organized by category (Languages, Frameworks, Databases, Tools, Cloud)
- Visual skill tags
- Easy to expand and customize

### Experience Section
- Full-stack developer role details
- Key achievements and responsibilities
- Professional certifications

### Projects Section
- Featured projects with descriptions
- Technology stack tags
- Links to GitHub repositories

### Contact Section
- Social media links (Email, LinkedIn, GitHub)
- Contact form for inquiries
- Professional communication options

## 🌈 Customization

### Colors & Styling
- Edit Tailwind configuration in `tailwind.config.ts`
- Modify CSS variables in `src/index.css`

### Content
- Update personal information in components
- Modify project details in `src/components/Projects.tsx`
- Update skills and experience in respective components

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Index.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 Security

- Input validation on contact form
- Safe use of external links with `rel="noopener noreferrer"`
- Type-safe code with TypeScript

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rasal Rahman**
- Email: rasalrahman361@gmail.com
- LinkedIn: [linkedin.com](https://linkedin.com)
- GitHub: [github.com](https://github.com)

## 🤝 Contributing

Contributions are welcome! Feel free to fork, modify, and submit pull requests.

## 📞 Support

For questions or issues, please open an issue in the repository or reach out directly.

---

Made with ❤️ by Rasal Rahman
