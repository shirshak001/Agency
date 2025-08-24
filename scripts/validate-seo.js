#!/usr/bin/env node

/**
 * SEO Validation Script for 3Bit Studio
 * Run this script to check if all SEO elements are properly configured
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 SEO Validation Script for 3Bit Studio\n');

// Check if required files exist
const requiredFiles = [
  'src/app/sitemap.js',
  'src/app/robots.js',
  'public/manifest.json',
  'src/app/layout.js',
  '.env.local.example',
];

const optionalFiles = [
  '.env.local',
  'public/og-image.jpg',
  'public/favicon.svg',
  'public/favicon-192.png',
  'public/favicon-512.png',
];

console.log('📁 Checking Required Files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
  }
});

console.log('\n📁 Checking Optional Files:');
optionalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`⚠️  ${file} - RECOMMENDED`);
  }
});

// Check package.json for Next.js version
console.log('\n📦 Checking Dependencies:');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const nextVersion = packageJson.dependencies?.next;
  
  if (nextVersion) {
    console.log(`✅ Next.js: ${nextVersion}`);
  } else {
    console.log('❌ Next.js not found in dependencies');
  }
  
  const hasFramerMotion = packageJson.dependencies?.['framer-motion'];
  if (hasFramerMotion) {
    console.log(`✅ Framer Motion: ${hasFramerMotion}`);
  }
} catch (error) {
  console.log('❌ Could not read package.json');
}

// Check environment variables
console.log('\n🔧 Environment Configuration:');
if (fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  
  const checks = [
    { key: 'NEXT_PUBLIC_GA_ID', label: 'Google Analytics ID' },
    { key: 'NEXT_PUBLIC_SITE_URL', label: 'Site URL' },
    { key: 'NEXT_PUBLIC_GOOGLE_VERIFICATION', label: 'Google Verification' },
  ];
  
  checks.forEach(({ key, label }) => {
    if (envContent.includes(key) && !envContent.includes(`${key}=your-`) && !envContent.includes(`${key}=G-XXXXXXXXXX`)) {
      console.log(`✅ ${label} configured`);
    } else {
      console.log(`⚠️  ${label} needs configuration`);
    }
  });
} else {
  console.log('⚠️  .env.local not found - copy from .env.local.example');
}

// Check metadata in layout.js
console.log('\n📄 Checking Layout Metadata:');
try {
  const layoutContent = fs.readFileSync('src/app/layout.js', 'utf8');
  
  const metadataChecks = [
    { search: 'title:', label: 'Page Title' },
    { search: 'description:', label: 'Meta Description' },
    { search: 'keywords:', label: 'Keywords' },
    { search: 'openGraph:', label: 'Open Graph' },
    { search: 'twitter:', label: 'Twitter Cards' },
    { search: 'application/ld+json', label: 'Structured Data' },
  ];
  
  metadataChecks.forEach(({ search, label }) => {
    if (layoutContent.includes(search)) {
      console.log(`✅ ${label}`);
    } else {
      console.log(`❌ ${label} - MISSING`);
    }
  });
} catch (error) {
  console.log('❌ Could not read layout.js');
}

console.log('\n🎯 SEO Recommendations:');
console.log('1. 📝 Ensure all images have descriptive alt text');
console.log('2. 🔗 Add internal links between related pages');
console.log('3. 📱 Test mobile responsiveness');
console.log('4. ⚡ Optimize Core Web Vitals');
console.log('5. 📊 Set up Google Search Console');
console.log('6. 🔄 Create a content update schedule');

console.log('\n🚀 Next Steps:');
console.log('1. Copy .env.local.example to .env.local and configure');
console.log('2. Add your Google Analytics tracking ID');
console.log('3. Create and add OG images to /public/');
console.log('4. Submit sitemap to Google Search Console');
console.log('5. Test with Google PageSpeed Insights');

console.log('\n✨ SEO Validation Complete!');
