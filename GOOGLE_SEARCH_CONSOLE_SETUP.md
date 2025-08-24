# Google Search Console Setup Instructions

## Step 1: Add Your Website to Google Search Console

1. Go to https://search.google.com/search-console/
2. Click "Add Property"
3. Choose "URL prefix" and enter: https://www.3bitstudio.com
4. Choose "HTML tag" verification method
5. Copy the verification code (looks like: google-site-verification=abc123...)

## Step 2: Add Verification to Your Website

Add the verification code to your .env.local file:
```
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code-here
```

## Step 3: Submit Your Sitemap

After verification, submit these URLs in Search Console:
- https://www.3bitstudio.com/sitemap.xml
- https://www.3bitstudio.com/robots.txt

## Step 4: Request Indexing

In Search Console, use "URL Inspection" tool to request indexing for:
- https://www.3bitstudio.com (homepage)
- https://www.3bitstudio.com/contact
- https://www.3bitstudio.com/pricing
- https://www.3bitstudio.com/faq

## Next Steps

1. Complete this setup
2. Wait 24-48 hours for verification
3. Check indexing status daily
4. Monitor search performance
