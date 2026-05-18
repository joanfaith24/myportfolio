# Joan Faith Portfolio

A responsive personal portfolio website built with React and Vite. It introduces Joan Faith as a frontend developer and includes sections for projects, skills, about information, and contact links.

## Features

- Responsive portfolio layout
- Hero section with introduction
- About section
- Project cards
- Skills section
- Contact section
- Mobile navigation menu
- Clean modern styling with custom CSS

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Lucide React Icons

## Getting Started

### Prerequisites

Make sure Node.js is installed on your computer.

### Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Project Structure

```text
src/
  App.jsx
  main.jsx
  styles.css
```

## Customization

Update your name, introduction, projects, skills, and contact links in:

```text
src/App.jsx
```

Update colors, spacing, layout, and responsive styles in:

```text
src/styles.css
```

## Deployment

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

You can deploy the project to Firebase Hosting, Vercel, Netlify, or GitHub Pages.

## Firebase Hosting

Install the Firebase CLI if you do not have it yet:

```bash
npm install -g firebase-tools
```

Log in to Firebase:

```bash
firebase login
```

Initialize Firebase Hosting:

```bash
firebase init hosting
```

When asked for the public directory, enter:

```text
dist
```

When asked if this is a single-page app, choose:

```text
Yes
```

Deploy the project:

```bash
firebase deploy
```

## Author

Created by Joan Faith.
