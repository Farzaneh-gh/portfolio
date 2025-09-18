# 🌟 Farzaneh Ghasemi - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my skills as a Frontend Developer specializing in React and modern web technologies.

![Portfolio Preview](./src/assets/images/Farzaneh.png)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Interactive Components**: Engaging hover effects and transitions
- **Multi-language Support**: Available in English and Spanish
- **Performance Optimized**: Fast loading times and optimized images
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Technologies Used

### Frontend

- **React 19** - Latest version for modern component architecture
- **Tailwind CSS 4** - Utility-first CSS framework for custom styling
- **Vite** - Lightning-fast build tool and development server

### Libraries & Tools

- **React Hook Form** - Performant forms with easy validation
- **React i18next** - Internationalization framework
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **React Simple Typewriter** - Typewriter effect for dynamic text
- **SweetAlert** - Beautiful, responsive alerts

### Development Tools

- **ESLint** - Code linting and formatting
- **Git** - Version control
- **VS Code** - Development environment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Farzaneh-gh/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   │   └── AboutMe.jsx
│   ├── ContactMe/
│   │   └── ContactMe.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── Header/
│   │   └── Header.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   ├── Projects/
│   │   └── Projects.jsx
│   └── Skills/
│       └── Skills.jsx
├── pages/
│   └── index/
│       └── Index.jsx
├── assets/
│   ├── images/
│   └── icons/
├── locales/
│   ├── en/
│   └── es/
├── App.jsx
├── main.jsx
├── index.css
└── i18n.js
```

## 🎨 Design Features

### Color Palette

- Primary: Purple (#6366f1) to Blue (#8b5cf6) gradients
- Secondary: Complementary blues and teals
- Neutral: Modern grays with high contrast ratios

### Typography

- Primary: Poppins (clean, modern sans-serif)
- Code: JetBrains Mono (for technical content)

### Animation & Interactions

- Smooth hover effects with scale transforms
- Gradient text animations
- Floating elements with CSS keyframes
- AOS scroll-triggered animations

## 🌐 Internationalization

The portfolio supports multiple languages:

- **English** (default)
- **Spanish**

Language files are located in `src/locales/` and can be easily extended.

## 📱 Responsive Design

The website is fully responsive with breakpoints for:

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

## 🔧 Performance Optimizations

- **Lazy Loading**: Images and components loaded on demand
- **Code Splitting**: Dynamic imports for better performance
- **Optimized Images**: WebP format with fallbacks
- **Minified CSS/JS**: Production builds are fully optimized
- **CDN Ready**: Optimized for deployment on CDNs

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for social media sharing
- Open Graph and Twitter Card support
- Structured data markup
- Sitemap and robots.txt ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Farzaneh Ghasemi**

- Portfolio: [farzaneh-ghasemi.dev](https://farzaneh-ghasemi.dev)
- LinkedIn: [linkedin.com/in/farzaneh-ghasemi-8b6b36247](https://linkedin.com/in/farzaneh-ghasemi-8b6b36247/)
- GitHub: [github.com/Farzaneh-gh](https://github.com/Farzaneh-gh)
- Email: ghasemi.farzaneh89@gmail.com
- Phone: +34 644 701 638
- Location: Barcelona, Spain

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- React community for excellent documentation
- Tailwind CSS for the utility-first approach
- All the open-source libraries that made this project possible

---

⭐ **If you find this portfolio helpful, please give it a star!** ⭐+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
