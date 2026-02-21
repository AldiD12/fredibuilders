const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [48, 96, 144];
const inputFile = path.join(__dirname, '../public/images/logo.webp');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
  console.log('Generating favicons from logo.webp...');
  
  for (const size of sizes) {
    const outputFile = path.join(outputDir, `favicon-${size}x${size}.png`);
    
    try {
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputFile);
      
      console.log(`✓ Generated ${outputFile}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${outputFile}:`, error.message);
    }
  }
  
  console.log('Favicon generation complete!');
}

generateFavicons().catch(console.error);
