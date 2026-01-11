# Hi — I'm Adika Rafi 👋
**Junior Full-Stack Developer** • Indonesia  
Simple projects created from the heart — building clean, useful web experiences with Next.js, TypeScript, Tailwind, and practical backends.

[For Indonesia Documentation](./README.id.md)

---

[![GitHub followers](https://img.shields.io/github/followers/AdikaRafi?label=Follow&style=social)](https://github.com/AdikaRafi)  

---

## About
I build simple, fast, maintainable web apps with a focus on developer ergonomics, accessibility, and pragmatic solutions. I enjoy turning small ideas into polished projects and learning new tools along the way.

- 🔭 Current project: NewsSimpleWebsite — a lightweight news site built with Next.js & Tailwind  
- 🌱 Learning: modern TypeScript patterns, backend integrations with Python & MySQL  
- ⚡ Approach: heart-first projects — practical, testable, and accessible

---

## Tech Stack
- Frontend: Next.js, React, Tailwind CSS, TypeScript, JavaScript  
- Backend & Data: Python, MySQL  
- Tooling & Deploy: Git, Vercel / Netlify, ESLint, Prettier

---

## Featured Projects

| Project | Short description | Repo / Demo | Screenshots |
|---|---|---:|---:|
| NewsSimpleWebsite | Simple news website focused on speed and readability. Built with Next.js + Tailwind + TypeScript. | https://github.com/AdikaRafi/NewsSimpleWebsite | ![news-page](./screenshot/homelight.png) <br> ![news-page](./screenshot/homelight2.png) <br> ![news-page](./screenshot/homedarktheme.png) <br> ![news-page](./screenshot/darkmode.png) |
---

## Run locally & configure API keys

Prerequisites:
- Node.js 18+ (or compatible LTS)
- npm or pnpm
- (Optional) MySQL if you plan to use local DB integration
- An API key for the news provider used in the project (e.g., NewsAPI or another provider)

Steps:
1. Clone the repo  
   git clone https://github.com/AdikaRafi/NewsSimpleWebsite.git  
   cd NewsSimpleWebsite
2. Install dependencies  
   npm install
3. Create environment file  
   Copy .env.example to .env.local (or create `.env.local`)
4. Configure required environment variables
   ```
   NEWSIO_APIKEY=your_news_api_key_here
   - Keep secret keys out of commits. Use environment variables or a secrets manager in production.
5. Run development server  
   npm run dev  
   Open http://localhost:3000
6. Build for production  
   npm run build  
   npm run start (or deploy to Vercel/Netlify)

Configuring API keys:
- If you use [NewsIO.org](https://newsdata.io/):
  - Sign up and get an API key.
  - Put the key in `NEWSIO_APIKEY` if used on client, otherwise store it server-side and proxy requests from API routes.
- If the app makes client-side requests with an API key, be aware keys are public in the browser. Prefer server-side calls for private keys.
- To reduce rate-limit issues, consider server caching or a small server-side proxy.

Troubleshooting:
- CORS/rate-limit errors: check the provider docs and verify your key and request quotas.
---

## Contact
- Email: adikarafi2605@gmail.com  
- GitHub: https://github.com/AdikaRafi  
- Location: Indonesia

Open to:
- Open to freelance  
- Open to collaborate
