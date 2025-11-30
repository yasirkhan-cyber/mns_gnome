# Germ Plasma Collection Portal

A modern, full-stack web app for exploring cotton and wheat germ plasma details and traits. 

## Features

- Clean, mobile-responsive UI (HTML, CSS, JS)
- Backend: Node.js (Express), MySQL (mysql2)
- Pages: Home, Germ Plasma, Cotton data, Traits (all dynamic)
- API: `/api/cotton`, `/api/traits/:name`
- Production-ready for Render.com (backend) & Netlify (frontend)

---

## Local Setup

1. **Clone this repo**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup the MySQL Database:**
   - Import your schema and seed `ncvt_tbl` (cotton) and `ncvt_trait` tables.

4. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in DB credentials

5. **Start the server:**
   ```bash
   node server.js
   ```
   - Visit [http://localhost:3000](http://localhost:3000)

---

## Deployment

### Vercel (Current Setup)
- This project is configured for Vercel deployment
- **Configuration:** `vercel.json` and `api/index.js` are set up for serverless deployment
- **Auto-deploy:** Vercel automatically deploys when you push to your connected Git branch
- **Manual redeploy:** Go to Vercel Dashboard → Your Project → Deployments → Click "..." → "Redeploy"
- **Environment Variables:** Set `DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME` in Vercel project settings

### Alternative: Render.com
- Add these build/start commands:
  - **Build:** `npm install`
  - **Start:** `node server.js`
- Fill your DB variables in Render Secrets settings as shown in `.env.example`

---

## File Structure

- `public/` — images, CSS, JS
- `views/` — EJS templates
- `routes/` — Express routes (pages, API)
- `db.js` — MySQL connection
- `server.js` — App entry-point

---

## Environment Variables
- `DB_HOST` — MySQL address
- `DB_USER` — username
- `DB_PASS` — password
- `DB_NAME` — db name

---

## Notes
- Make sure to add your own images to the `public/images/` folder for the banner/about/cotton/wheat.
- For development or non-SSR HTML-only, you can prerender `.ejs` to `.html` manually for deployment to Netlify (but lose server-side features).
