# API Debugging Guide

## Quick Checks

### 1. Verify API Key is Loaded
Open browser console (F12) and look for:
- ✅ "Google Places API Key loaded: YES (hidden)" = Good
- ❌ "Google Places API Key loaded: NO - NOT FOUND" = Problem

### 2. Check API Restrictions in Google Cloud Console

**Critical:** Even if APIs are enabled, your API key might be restricted!

1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on your API key
3. Check **"Application restrictions"**:
   - Must be set to: **"HTTP referrers (web sites)"**
   - Must include: `https://*.vercel.app/*`
   - Must include: `http://localhost:5173/*` (for local testing)
4. Check **"API restrictions"**:
   - Should be: **"Restrict key"** → **"Places API"** only
   - OR **"Don't restrict key"** (less secure but easier for testing)

### 3. Common Error Messages

**"REQUEST_DENIED"**
- API key restrictions are blocking the request
- Check HTTP referrers include your domain
- Make sure Places API is enabled

**"INVALID_REQUEST"**
- Query format issue
- Check the location format

**"OVER_QUERY_LIMIT"**
- You've exceeded your quota
- Check billing/usage in Google Cloud Console

**"ZERO_RESULTS"**
- No restaurants found (this is OK, just means no results)

### 4. Test API Key Directly

Try this URL in your browser (replace YOUR_KEY):
```
https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+90210&type=restaurant&key=YOUR_KEY
```

If this works, the API key is fine and the issue is in the code.
If this fails, the issue is with the API key configuration.

### 5. Check Vercel Environment Variables

1. Go to: https://vercel.com/nataliehassan122-1168s-projects/chalahs_travels-base/settings/environment-variables
2. Verify:
   - Variable name: `VITE_GOOGLE_PLACES_API_KEY` (exact spelling)
   - Value: Your actual API key
   - Environments: All checked (Production, Preview, Development)
3. After adding/changing, **redeploy** your site

### 6. Network Tab Debugging

1. Open Developer Tools → Network tab
2. Search for a location
3. Look for request to `maps.googleapis.com`
4. Check:
   - Status code (should be 200)
   - Response tab (shows what Google returned)
   - Request tab (shows what was sent)

## Most Common Issue

**API Key Restrictions** - Your API key is probably restricted to specific domains, and your Vercel domain isn't added to the allowed list.

**Fix:**
1. Google Cloud Console → Credentials → Your API Key
2. Under "Application restrictions" → "HTTP referrers"
3. Add: `https://*.vercel.app/*` (allows all Vercel domains)
4. Save and wait 5 minutes for changes to propagate

