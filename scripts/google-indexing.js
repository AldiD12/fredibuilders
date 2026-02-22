const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Load service account key
const keyPath = path.join(__dirname, 'service-account-key.json');

if (!fs.existsSync(keyPath)) {
  console.error('❌ Error: service-account-key.json not found!');
  console.error('Please follow the setup guide in docs/GOOGLE_INDEXING_API_SETUP.md');
  process.exit(1);
}

const key = require(keyPath);

// Your site URLs to index
const BASE_URL = 'https://fredibuilders.co.uk';

const urls = [
  // Homepage
  BASE_URL,
  
  // Main pages
  `${BASE_URL}/about`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/gallery`,
  `${BASE_URL}/reviews`,
  `${BASE_URL}/blog`,
  
  // Service pages
  `${BASE_URL}/services`,
  `${BASE_URL}/services/full-bathroom-renovations`,
  `${BASE_URL}/services/wet-room-installations`,
  `${BASE_URL}/services/luxury-tiling-services`,
  `${BASE_URL}/services/disabled-assisted-bathrooms`,
  `${BASE_URL}/services/structural-building-repairs`,
  
  // Location pages (18 locations)
  `${BASE_URL}/locations`,
  `${BASE_URL}/locations/bathroom-fitters-esher-kt10`,
  `${BASE_URL}/locations/luxury-bathrooms-cobham-kt11`,
  `${BASE_URL}/locations/bathroom-renovations-weybridge-kt13`,
  `${BASE_URL}/locations/bathroom-fitters-kingston-kt1`,
  `${BASE_URL}/locations/builders-leatherhead-kt22`,
  `${BASE_URL}/locations/bathroom-fitters-wimbledon-sw19`,
  `${BASE_URL}/locations/bathroom-fitters-streatham-sw16`,
  `${BASE_URL}/locations/bathroom-renovations-balham-sw12`,
  `${BASE_URL}/locations/bathroom-specialists-raynes-park-sw20`,
  `${BASE_URL}/locations/bathroom-fitters-putney-sw15`,
  `${BASE_URL}/locations/luxury-bathrooms-dulwich-se21`,
  `${BASE_URL}/locations/bathroom-renovations-east-dulwich-se22`,
  `${BASE_URL}/locations/bathroom-fitters-crystal-palace-se19`,
  `${BASE_URL}/locations/bathroom-specialists-west-norwood-se27`,
  `${BASE_URL}/locations/bathroom-renovations-croydon-cr0`,
  `${BASE_URL}/locations/bathroom-specialists-thornton-heath-cr7`,
  `${BASE_URL}/locations/bathroom-fitters-sutton-sm1`,
  `${BASE_URL}/locations/bathroom-renovations-purley-cr8`,
];

async function indexURL(url) {
  try {
    // Create JWT client with credentials
    const jwtClient = new google.auth.JWT({
      email: key.client_email,
      key: key.private_key,
      scopes: ['https://www.googleapis.com/auth/indexing']
    });

    // Authorize
    await jwtClient.authorize();

    // Create indexing service
    const indexing = google.indexing({ version: 'v3', auth: jwtClient });

    // Submit URL for indexing
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED'
      }
    });

    console.log(`✅ Indexed: ${url}`);
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to index ${url}:`, error.message);
    return null;
  }
}

async function indexAllPages() {
  console.log('🚀 Starting Google Indexing API submission...\n');
  console.log(`📄 Total pages to index: ${urls.length}\n`);

  let successCount = 0;
  let failCount = 0;

  for (const url of urls) {
    const result = await indexURL(url);
    if (result) {
      successCount++;
    } else {
      failCount++;
    }
    
    // Add small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n📊 Indexing Summary:');
  console.log(`✅ Successfully indexed: ${successCount} pages`);
  console.log(`❌ Failed: ${failCount} pages`);
  console.log('\n💡 Check Google Search Console in 24-48 hours to verify indexing.');
}

// Run the indexing
indexAllPages().catch(console.error);
