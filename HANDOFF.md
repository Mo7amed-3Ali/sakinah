# سكينة - سجل الحالة (Handoff)

## الحالة الحالية
- موقع PWA ثابت: index.html (المصحف 114 سورة من Tanzil + الأذكار + المواقيت + القبلة + الإعدادات)، admin.html، config.json، sw.js (v2)، manifest، أيقونتان.
- مواقيت الصلاة: Aladhan API مع بديل حساب محلي (calcTimes). الدالة: fetchApi، التخزين: localStorage مفتاح skapi. الطرق: egypt=5, mwl=3, makkah=4, karachi=1, isna=2.
- الصوت: everyayah.com آية بآية. النمط: https://everyayah.com/data/{folder}/{SSS}{AAA}.mp3 (البسملة = 001001).
  القراء: Minshawy_Murattal_128kbps، Maher_AlMuaiqly_64kbps، Alafasy_128kbps، Husary_128kbps.
- sw.js لا يعترض طلبات النطاقات الخارجية (حتى لا يتعطل تشغيل الصوت).
- الإدارة: admin.html تنتج config.json فقط، والرفع يدويًا على GitHub.

## لم يُجرَّب بعد (يحتاج اختبار على هاتف حقيقي)
- مسارات الصوت على everyayah.com (لم أستطع التحقق منها من بيئتي لعدم وجود إنترنت)، واستجابة Aladhan API.
- البوصلة على HTTPS مستقل، وتنبيهات الصلاة.

## المتبقي
1. واجهة البطاقات بالسحب (على نمط تيك توك).
2. الأذان فوق التطبيقات (يحتاج كودًا أصليًا لأندرويد، وإغلاق تطبيق آخر غير ممكن).
3. تضمين الخطوط محليًا، وتنبيهات الصلاة في الخلفية (LocalNotifications عبر Capacitor).
4. تحويل إلى APK/iOS عبر Capacitor (المشروع الجاهز: sakinah-app.zip).
5. مراجعة نص الأذكار والمصحف عبر جهة علمية معتمدة قبل النشر العام.
