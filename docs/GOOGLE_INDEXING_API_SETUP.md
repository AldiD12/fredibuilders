# Google Indexing API Setup Guide

## Why This Matters
Without the Indexing API, your pages can take **weeks** to appear in Google. With it, they index in **hours**.

---

## Step 1: Create Google Cloud Project (5 minutes)

1. Go to: https://console.cloud.google.com/
2. Sign in with your Google account (demlekaaldi1@gmail.com)
3. Click "Select a project" → "New Project"
4. Project name: "Fredi Builders Indexing"
5. Click "Create"

---

## Step 2: Enable Indexing API (2 minutes)

1. In your new project, go to: https://console.cloud.google.com/apis/library
2. Search for "Web Search Indexing API"
3. Click on it
4. Click "Enable"

---

## Step 3: Create Service Account (3 minutes)

1. Go to: https://console.cloud.google.com/iam-admin/serviceaccounts
2. Click "Create Service Account"
3. Service account name: "indexing-bot"
4. Click "Create and Continue"
5. Skip "Grant this service account access" (click Continue)
6. Skip "Grant users access" (click Done)

---

## Step 4: Create Service Account Key (2 minutes)

1. Click on the service account you just created (indexing-bot@...)
2. Go to "Keys" tab
3. Click "Add Key" → "Create new key"
4. Choose "JSON"
5. Click "Create"
6. A JSON file will download - **SAVE THIS FILE SECURELY**
7. Rename it to: `service-account-key.json`

---

## Step 5: Add Service Account to Google Search Console (3 minutes)

1. Go to: https://search.google.com/search-console
2. Add your property: `https://fredibuilders.co.uk` (if not already added)
3. Verify ownership (use DNS TXT record method via Cloudflare)
4. Once verified, go to Settings → Users and permissions
5. Click "Add user"
6. Paste the service account email from the JSON file (looks like: `indexing-bot@fredi-builders-indexing.iam.gserviceaccount.com`)
7. Permission level: "Owner"
8. Click "Add"

---

## Step 6: Install Dependencies (1 minute)

In your project directory, run:

```bash
npm install googleapis
```

---

## Step 7: Add Service Account Key to Project

1. Create a `scripts` folder in your project root
2. Move `service-account-key.json` into the `scripts` folder
3. Add to `.gitignore`:

```
# Google Service Account Key
scripts/service-account-key.json
```

---

## Step 8: Use the Indexing Script

The script is already created at `scripts/google-indexing.js`

### To index all pages immediately:
```bash
node scripts/google-indexing.js
```

### To set up weekly cron job (keeps content "fresh"):

**On macOS/Linux:**
```bash
crontab -e
```

Add this line (runs every Monday at 2 AM):
```
0 2 * * 1 cd /path/to/FrediBuilders && node scripts/google-indexing.js
```

**On Vercel (recommended):**
Use Vercel Cron Jobs:
1. Add to `vercel.json`:
```json
{
  "crons": [{
    "path": "/api/cron/index-pages",
    "schedule": "0 2 * * 1"
  }]
}
```

2. Create API route at `app/api/cron/index-pages/route.ts` (already created)

---

## Verification

After running the script, check Google Search Console:
1. Go to: https://search.google.com/search-console
2. Click "URL Inspection" in left sidebar
3. Enter one of your location page URLs
4. You should see "URL is on Google" within 24-48 hours

---

## Troubleshooting

### Error: "Permission denied"
- Make sure you added the service account email to Search Console with "Owner" permission
- Wait 5 minutes after adding, then try again

### Error: "Invalid credentials"
- Check that `service-account-key.json` is in the correct location
- Verify the JSON file is not corrupted

### Error: "API not enabled"
- Go back to Step 2 and ensure "Web Search Indexing API" is enabled

---

## Security Notes

- **NEVER** commit `service-account-key.json` to GitHub
- Keep this file secure - it has access to your Search Console
- If compromised, delete the service account and create a new one

---

## What Happens Next

Once set up:
1. New pages index in hours instead of weeks
2. Weekly cron job keeps all pages "fresh" in Google's eyes
3. Your rankings improve faster as Google sees constant updates
4. You can manually trigger indexing for important pages anytime

---

## Cost

**FREE** - Google Indexing API has no cost for up to 200 requests per day (you have ~30 pages, so plenty of headroom)
