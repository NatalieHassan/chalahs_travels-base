# Google Places API Setup Guide

## Step 1: Get Your API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Navigate to "APIs & Services" → "Library"
   - Search for "Places API"
   - Click "Enable"

4. Create an API Key:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

## Step 2: Restrict Your API Key (IMPORTANT for Security)

1. Click on your newly created API Key to edit it
2. Under "API restrictions":
   - Select "Restrict key"
   - Choose "Places API" only
3. Under "Application restrictions":
   - Select "HTTP referrers (web sites)"
   - Add your domains:
     - `http://localhost:5173/*` (for local development)
     - `https://your-vercel-domain.vercel.app/*` (your production domain)
     - `https://*.vercel.app/*` (if you want to allow all Vercel previews)

## Step 3: Add API Key to Your Project

### For Local Development:
1. Create a `.env` file in the root directory (if it doesn't exist)
2. Add your API key:
   ```
   VITE_GOOGLE_PLACES_API_KEY=your_actual_api_key_here
   ```
3. Restart your development server

### For Production (Vercel):
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `VITE_GOOGLE_PLACES_API_KEY`
   - **Value**: Your API key
   - **Environment**: Production, Preview, and Development (select all)
4. Redeploy your application

## Step 4: Verify It Works

1. Start your local dev server: `npm run dev`
2. Navigate to the Search page
3. Enter a location (e.g., "New York, NY")
4. You should see restaurants appear

## Troubleshooting

### "API key is not configured" error
- Make sure your `.env` file exists and has the correct variable name
- Restart your dev server after adding the key
- Check that the variable name starts with `VITE_`

### "REQUEST_DENIED" error
- Check that Places API is enabled in Google Cloud Console
- Verify your API key restrictions allow your domain
- Make sure you've added your domain to HTTP referrers

### "OVER_QUERY_LIMIT" error
- You've exceeded your API quota
- Check your usage in Google Cloud Console
- Consider upgrading your plan or waiting for quota reset

## Cost Information

- Google Places API has a free tier: $200/month credit
- Text Search costs $32 per 1,000 requests
- With the free tier, you get approximately 6,000 free searches per month
- Monitor your usage in Google Cloud Console

## Security Best Practices

✅ **DO:**
- Restrict your API key to specific APIs (Places API only)
- Restrict to specific domains/HTTP referrers
- Use environment variables (never commit API keys to git)
- Monitor your API usage regularly

❌ **DON'T:**
- Commit your `.env` file to git
- Share your API key publicly
- Use unrestricted API keys in production
- Hardcode API keys in your source code

