# Fix: "This API key is not authorized to use this service or API"

## The Problem
You're getting `REQUEST_DENIED` with message "This API key is not authorized to use this service or API."

This means Google Places API is either:
1. Not enabled for your project
2. Requires billing to be enabled (Places API requires billing)
3. API key doesn't have the right permissions

## Step-by-Step Fix

### Step 1: Enable Places API (New)
1. Go to: https://console.cloud.google.com/apis/library
2. Search for: **"Places API"** (not "Places API (New)" - use the regular one)
3. Click on **"Places API"**
4. Click **"Enable"**
5. Wait for it to enable (may take a minute)

### Step 2: Enable Billing (REQUIRED)
**Important:** Google Places API requires billing to be enabled, even for the free tier!

1. Go to: https://console.cloud.google.com/billing
2. If you don't have a billing account:
   - Click "Link a billing account"
   - Add a payment method (credit card)
   - **Don't worry** - Google gives $200/month free credit
   - You won't be charged unless you exceed the free tier
3. Make sure billing is linked to your project

### Step 3: Verify API Key Permissions
1. Go to: https://console.cloud.google.com/apis/credentials
2. Click on your API key
3. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check **"Places API"** is selected
   - OR select **"Don't restrict key"** (for testing)
4. Save

### Step 4: Wait and Test
- Wait 2-5 minutes for changes to propagate
- Try your search again

## Alternative: Use Places API (New)
Google has a newer version. If the regular Places API doesn't work:

1. Go to: https://console.cloud.google.com/apis/library
2. Search for: **"Places API (New)"**
3. Enable it
4. Note: This uses a different endpoint format, so code changes would be needed

## Quick Test
After enabling, test directly in browser:
```
https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+90210&type=restaurant&key=YOUR_KEY
```

Should return results, not REQUEST_DENIED.

