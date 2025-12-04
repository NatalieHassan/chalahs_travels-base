# Deployment Guide

## Frontend Deployment (Vercel)

### Step 1: Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### Step 2: Deploy via Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub
2. **Click "New Project"**
3. **Import your GitHub repository** (`chalahs_travels-base`)
4. **Configure the project:**
   - Framework Preset: **Vite**
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

5. **Add Environment Variable:**
   - Go to Project Settings → Environment Variables
   - Add: `VITE_API_BASE_URL` = `http://localhost:3000` (for now, update when backend is deployed)

6. **Click "Deploy"**

### Step 3: Update Environment Variable After Backend Deployment

Once your backend is deployed on Render, update the environment variable:
- `VITE_API_BASE_URL` = `https://your-backend-app.onrender.com`

### Alternative: Deploy via CLI
```bash
vercel
```

---

## Backend Deployment (Render) - For Later

### When you're ready to deploy your backend:

1. **Go to [render.com](https://render.com)** and sign up/login
2. **Create a New Web Service**
3. **Connect your backend repository**
4. **Configure:**
   - Environment: **Node**
   - Build Command: `npm install`
   - Start Command: `node server.js` (or your start command)
   - Plan: **Free**

5. **Add Environment Variables:**
   - `MONGODB_URI` (your MongoDB connection string)
   - `PORT` (usually 3000)
   - `JWT_SECRET` (for authentication)
   - Any other API keys

6. **After deployment, update your Vercel environment variable:**
   - `VITE_API_BASE_URL` = `https://your-backend-app.onrender.com`

---

## Local Development Setup

Create a `.env` file in the root directory:
```
VITE_API_BASE_URL=http://localhost:3000
```

---

## Notes

- Vercel automatically deploys on every push to your main branch
- Render free tier may spin down after inactivity (takes ~30 seconds to wake up)
- Both services provide free SSL certificates
- Custom domains are supported on both platforms

