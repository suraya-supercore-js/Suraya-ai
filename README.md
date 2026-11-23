# Suraya-ai

مرکز محتوای محتوای هوش مصنوعی «ثریا» — یک صفحهٔ آغازین (landing) ساده به زبان فارسی که نشان‌دهندهٔ پروژه و برنامه‌های آتی است.

ویژگی‌های اضافه‌شده:

- صفحهٔ اصلی (index.html) با پشتیبانی RTL و meta مناسب برای موبایل
- فونت فارسی Vazirmatn از Google Fonts
- فایل سبک ساده (styles.css) برای ظاهر پایه

نحوهٔ اجرا:

این یک سایت استاتیک است؛ برای مشاهدهٔ آن کافی است فایل index.html را در مرورگر باز کنید یا آن را روی هر سرویس میزبانی صفحات استاتیک (GitHub Pages, Netlify و غیره) منتشر کنید.

درصورت نیاز، می‌توانم:

- صفحات بیشتر اضافه کنم (درباره، تماس، بلاگ)
- ساختار پروژه را با ابزارهای بیلد ساده مثل Vite تنظیم کنم
- محتوای داینامیک یا فرم تماس اضافه کنم



## Security and deployment boundary

This remains a static UI prototype. The local ledger uses browser `localStorage` and is not an authoritative wallet, database, or account system. Never store passwords, private keys, OAuth refresh tokens, or payment credentials in it.

The YouTube Data API key is entered in the browser and is visible to that browser session. Use a dedicated read-only Google API key restricted by HTTP referrer and API scope. Upload permissions require OAuth2 handled by a trusted backend; do not put OAuth client secrets or refresh tokens in static JavaScript.

The admin page loads `youtube-integration.js` from the repository root. The previous `.jsrepo` filename was not a browser-loadable script and has been removed.
