# Minimize Google Places API Costs During Testing

## Cost Information
- **Free Tier**: $200/month credit (~6,000 searches)
- **Cost**: $32 per 1,000 requests after free tier
- **Your Credit**: $300 (about 9,375 searches total)

## Changes Made to Reduce API Calls

### 1. **Increased Debounce Time**
- Changed from 500ms to 1000ms (1 second)
- Prevents API calls while user is still typing
- Saves ~50% of API calls during typing

### 2. **Minimum Character Requirement**
- Requires at least 3 characters before searching
- Prevents searches for "9", "90", "902" etc.
- Only searches when user enters "90210" or more

### 3. **Submit Button Required**
- Search only triggers on form submit
- Not on every keystroke (debounce still applies)

## Best Practices for Testing

### ✅ DO:
- Test with complete locations: "90210", "New York, NY"
- Use the submit button instead of typing and waiting
- Test locally first (`npm run dev`) before deploying
- Check browser console for errors before searching
- Test one location at a time, not rapid-fire searches

### ❌ DON'T:
- Don't type and delete repeatedly (each triggers API call)
- Don't test with single characters or very short inputs
- Don't refresh the page repeatedly while testing
- Don't test multiple locations in quick succession

## Monitor Your Usage

1. Go to: https://console.cloud.google.com/billing
2. Click on your project
3. View "Usage" to see API calls
4. Set up billing alerts at 50%, 75%, 90% of free tier

## Local Testing Tips

1. **Test locally first**: `npm run dev`
   - Uses your local API key
   - Easier to debug
   - Same code, different environment

2. **Check console before searching**:
   - Look for "Google Places API Key loaded: YES"
   - Fix any errors before searching

3. **Use one test location**:
   - Pick one: "90210" or "New York, NY"
   - Test with that until it works
   - Then try others

## Estimated Costs

**With current optimizations:**
- Each search = 1 API call
- Testing 10 locations = 10 calls
- Testing 100 locations = 100 calls
- Still well within free tier!

**Without optimizations (old code):**
- Each keystroke could trigger API call
- Typing "90210" = 5+ API calls
- Much more expensive!

## Quick Test Checklist

Before deploying to production:
- [ ] Test locally with `npm run dev`
- [ ] Verify API key loads (check console)
- [ ] Test with one location (e.g., "90210")
- [ ] Verify results appear
- [ ] Check for errors in console
- [ ] Then deploy to Vercel

This minimizes API calls and keeps you within free tier!

