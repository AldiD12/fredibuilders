/**
 * Google Indexing API - Sitemap-Driven (God-Tier Version)
 * 
 * This script automatically discovers ALL pages from your sitemap and submits them to Google.
 * Zero maintenance required - add new pages to your site, they appear in sitemap, script finds them.
 * 
 * Benefits:
 * - Automatic discovery of new pages
 * - Single authorization (faster)
 * - Error resilient
 * - No hardcoded URLs
 * 
 * Usage: node scripts/google-indexing.js
 */

const { google } = require('googleapis')
const path = require('path')
const axios = require('axios')
const { parseStringPromise } = require('xml2js')

// Configuration
const SITEMAP_URL = 'https://www.fredibuilders.co.uk/sitemap.xml'
const KEY_PATH = path.join(__dirname, 'service-account-key.json')
const DELAY_MS = 1000 // 1 second between requests to avoid rate limiting

/**
 * Fetch and parse sitemap to extract all URLs
 */
async function getUrlsFromSitemap() {
  try {
    console.log(`📡 Fetching sitemap from ${SITEMAP_URL}...`)
    const response = await axios.get(SITEMAP_URL)
    const parsed = await parseStringPromise(response.data)
    
    if (!parsed.urlset || !parsed.urlset.url) {
      console.error('❌ Invalid sitemap format')
      return []
    }
    
    const urls = parsed.urlset.url.map(u => u.loc[0])
    console.log(`✅ Found ${urls.length} URLs in sitemap\n`)
    return urls
  } catch (error) {
    console.error('❌ Could not fetch sitemap:', error.message)
    return []
  }
}

/**
 * Submit a single URL to Google Indexing API
 */
async function indexUrl(indexing, url) {
  try {
    await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED'
      }
    })
    return { success: true, url }
  } catch (error) {
    return { success: false, url, error: error.message }
  }
}

/**
 * Main function - orchestrates the entire indexing process
 */
async function indexAllPages() {
  console.log('🚀 Starting Google Indexing API submission...\n')
  
  // Step 1: Get all URLs from sitemap
  const urls = await getUrlsFromSitemap()
  
  if (urls.length === 0) {
    console.error('❌ No URLs found. Exiting.')
    return
  }
  
  console.log(`📄 Total pages to index: ${urls.length}\n`)
  
  // Step 2: Authorize with Google (once)
  let indexing
  try {
    const keyPath = path.resolve(__dirname, 'service-account-key.json')
    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/indexing']
    })
    
    const authClient = await auth.getClient()
    console.log('✅ Authorized with Google Indexing API\n')
    
    // Create indexing client with auth
    indexing = google.indexing({ version: 'v3', auth: authClient })
  } catch (error) {
    console.error('❌ Authorization failed:', error.message)
    return
  }
  
  // Step 3: Submit all URLs with progress tracking
  const results = {
    success: [],
    failed: []
  }
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    const result = await indexUrl(indexing, url)
    
    if (result.success) {
      results.success.push(url)
      console.log(`✅ Indexed: ${url}`)
    } else {
      results.failed.push({ url, error: result.error })
      console.error(`❌ Failed: ${url} - ${result.error}`)
    }
    
    // Safety delay to avoid rate limiting (except for last URL)
    if (i < urls.length - 1) {
      await new Promise(resolve => setTimeout(resolve, DELAY_MS))
    }
  }
  
  // Step 4: Summary report
  console.log('\n📊 Indexing Summary:')
  console.log(`✅ Successfully indexed: ${results.success.length} pages`)
  console.log(`❌ Failed: ${results.failed.length} pages`)
  
  if (results.failed.length > 0) {
    console.log('\n❌ Failed URLs:')
    results.failed.forEach(({ url, error }) => {
      console.log(`   - ${url}: ${error}`)
    })
  }
  
  console.log('\n💡 Check Google Search Console in 24-48 hours to verify indexing.')
}

// Execute
indexAllPages().catch(error => {
  console.error('❌ Fatal error:', error.message)
  process.exit(1)
})
