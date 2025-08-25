#!/bin/bash

echo "🔍 Build Verification Script"
echo "Current commit: $(git rev-parse HEAD)"
echo "Expected commit: 0c28e79 or later"
echo ""

echo "📁 Checking critical files exist:"
ls -la src/app/contact/layout.js && echo "✅ Contact layout exists" || echo "❌ Contact layout missing"
ls -la src/app/pricing/layout.js && echo "✅ Pricing layout exists" || echo "❌ Pricing layout missing" 
ls -la src/app/faq/layout.js && echo "✅ FAQ layout exists" || echo "❌ FAQ layout missing"

echo ""
echo "🔍 Checking for metadata exports in client components:"
if grep -q "export const metadata" src/app/contact/page.js; then
    echo "❌ Contact page still has metadata export - THIS WILL CAUSE BUILD FAILURE"
else
    echo "✅ Contact page clean"
fi

if grep -q "export const metadata" src/app/pricing/page.js; then
    echo "❌ Pricing page still has metadata export - THIS WILL CAUSE BUILD FAILURE"
else
    echo "✅ Pricing page clean"
fi

if grep -q "export const metadata" src/app/faq/page.js; then
    echo "❌ FAQ page still has metadata export - THIS WILL CAUSE BUILD FAILURE"
else
    echo "✅ FAQ page clean"
fi

echo ""
echo "✨ Verification complete!"
