#!/usr/bin/env node

/**
 * Check if 3Bit Studio website is indexed by Google
 * Run this to see current search visibility
 */

console.log('🔍 Checking Google Indexing Status for 3Bit Studio...\n');

const checkUrls = [
  'https://www.3bitstudio.com',
  'https://3bitstudio.com',
  'site:3bitstudio.com',
  'site:www.3bitstudio.com'
];

console.log('📋 URLs to manually check in Google:');
console.log('═══════════════════════════════════════════════\n');

checkUrls.forEach((url, index) => {
  console.log(`${index + 1}. Search Google for: "${url}"`);
  console.log(`   Link: https://www.google.com/search?q=${encodeURIComponent(url)}`);
  console.log('');
});

console.log('🎯 What to look for:');
console.log('═════════════════════');
console.log('✅ If your site appears: Great! It\'s indexed');
console.log('❌ If no results: Need to submit for indexing');
console.log('⚠️  If partial results: Some pages indexed, others need work');

console.log('\n📊 Next Steps Based on Results:');
console.log('════════════════════════════════');
console.log('IF INDEXED: Focus on improving rankings');
console.log('IF NOT INDEXED: Follow the emergency action plan');
console.log('IF PARTIALLY INDEXED: Submit missing pages manually');

console.log('\n🚀 Quick Actions You Can Do Right Now:');
console.log('═══════════════════════════════════════');
console.log('1. Set up Google Search Console');
console.log('2. Submit sitemap.xml');
console.log('3. Request indexing for each page');
console.log('4. Share on social media');
console.log('5. Get your first backlinks');

console.log('\n💡 Pro Tip: New websites take 1-4 weeks to appear in search results');
console.log('Be patient, but take action every day to speed up the process!');
