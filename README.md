# 🔧 Testing the Website

The website automatically detects the current month (June = month 6) and will show the "Server Down for Maintenance" section since we're in the April-August range.

To test different months, you can open the browser console and use:

`testMonth(2)` - Shows "Coming Soon" (Jan-Mar)

`testMonth(6)` - Shows "Maintenance" (Apr-Aug)

`testMonth(10)` - Shows "Thank You" (Sep-Dec)