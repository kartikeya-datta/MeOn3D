# MeOn3D - Interactive 3D Portfolio

MeOn3D is an interactive 3D portfolio website designed to showcase my skills, projects, and professional journey in a visually captivating way. Built with modern web technologies, it provides a dynamic and engaging user experience that reflects my passion for design and development.

🌟 **Features**

* **3D Interactive Design:** Leverages advanced 3D graphics to create an immersive and unique user interface.
* **Responsive Layout:** Ensures optimal viewing and interaction across a wide range of devices and screen sizes.
* **Project Showcase:** Effectively highlights key projects with detailed descriptions and compelling visuals.
* **Contact Form:** Enables visitors to easily get in touch directly through the website.

🛠️ **Technologies Used**

* **Frontend:** HTML5, CSS3, JavaScript
* **3D Rendering:** [Three.js](https://threejs.org/) for creating and displaying animated 3D graphics
* **Deployment:** Hosted on [GitHub Pages](https://pages.github.com/) for seamless and accessible deployment.

🚀 **Getting Started**

1.  Visit the live site at [MeOn3D Portfolio](MeOn3D Portfolio)
2.  Navigate through the interactive 3D environment using:
    * **Desktop:** Mouse controls (e.g., drag to rotate, scroll to zoom).
    * **Mobile/Tablet:** Touch gestures (e.g., swipe to rotate, pinch to zoom).
3.  Explore my projects, skills, and professional information presented within the interactive 3D space.

📱 **Responsive Design**

The website is designed to adapt seamlessly to various screen sizes, providing an optimized experience for every user:

* **Desktop:** Offers the full 3D experience with rich interactions and detailed visuals.
* **Tablet:** Provides an optimized 3D experience with touch-friendly controls for easy navigation.
* **Mobile:** Delivers a streamlined experience that maintains visual appeal and key information accessibility.

🔍 **Project Structure**

The core elements of the website's structure include:

* **Interactive 3D Models:** Engaging 3D representations of my skills, areas of expertise, and project categories.
* **Project Cards:** Informative cards that provide detailed information, visuals, and links related to each highlighted project.
* **Navigation Elements:** Intuitive controls and visual cues within the 3D space to guide users through the portfolio.
* **Contact Section:** A dedicated area featuring a contact form and links to my professional social media profiles for easy connectivity.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
