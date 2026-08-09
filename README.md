# אוהד שפינדל — האתר האישי

דף נחיתה אישי בעברית (RTL), ללא תלויות וללא build step. מתארח חינם ב‑Cloudflare Pages.

Personal Hebrew landing page. Vanilla HTML/CSS/JS, zero dependencies, no build step —
same conventions as the other sites under `landing_pages/`.

---

## מה צריך למלא (התחל מכאן)

כל התוכן של האתר נמצא בקובץ אחד: **`public/assets/js/content.js`**.
אין צורך לגעת ב‑HTML או ב‑CSS.

חפש בקובץ את המילה `TODO_` — כל מופע כזה הוא משהו שצריך להחליף:

| מה | איפה ב‑`content.js` | איך משיגים |
|---|---|---|
| מפתח לטופס יצירת קשר | `contact.web3formsKey` | נכנסים ל‑[web3forms.com](https://web3forms.com), מקלידים אימייל, מקבלים מפתח. ללא הרשמה, 30 שניות. |
| מספר וואטסאפ | `meta.whatsapp` | פורמט בינלאומי, ספרות בלבד: `050-559-5538` ← `972505595538` |
| אימייל | `meta.email` | |
| PayPal | `support.options[paypal].url` | קישור `paypal.me/...` |
| Buy Me a Coffee | `support.options[bmc].url` | קישור מהפרופיל שלך |
| ביט / PayBox | `support.options[bit/paybox].handle` | מספר הטלפון שאליו מעבירים |
| טקסט "עליי" | `about.paragraphs` | כל מחרוזת = פסקה |
| פרויקטים | `projects` | ראה למטה |
| תמונה | `meta.photo` | שים קובץ ב‑`public/assets/img/` ורשום `'assets/img/ohad.jpg'` |

**האתר עובד גם לפני שממלאים.** כל דבר שלא הוגדר פשוט לא מוצג — אין קישורים שבורים
ואין טפסים שמתחזים לעבוד. הטופס אומר במפורש שהוא לא מחובר עדיין.

### להוסיף פרויקט

מוסיפים אובייקט למערך `projects`. כל פרויקט מקבל כרטיס וגם דף משלו בכתובת `#projects/<id>`:

```js
{
  id: 'my-project',              // אנגלית, בלי רווחים — זו הכתובת
  title: 'שם הפרויקט',
  blurb: 'משפט אחד לכרטיס',
  tags: ['Python', 'אוטומציה'],
  image: 'assets/img/proj.jpg',  // או null
  body: ['פסקה ראשונה', 'פסקה שנייה'],
  links: [{ label: 'לאתר', url: 'https://…', primary: true }],
}
```

---

## הרצה מקומית

```bash
cd public && python3 -m http.server 8099     # → http://localhost:8099
```

או, אם רוצים גם את הכותרות של Cloudflare (`_headers`):

```bash
npx wrangler pages dev public                 # → http://localhost:8788
```

## פריסה

```bash
npx wrangler pages deploy public --project-name=ohad-shpindel
```

זו העלאה ישירה דרך ה‑API של Cloudflare — **לא נדרש GitHub ולא חיבור ל‑git כלשהו.**

> הטוקן השמור ב‑`~/.config/.wrangler/` הוא מאפריל 2026 וכנראה פג.
> בפריסה הראשונה תתבקש להריץ `npx wrangler login`.

---

## מבנה

```
public/                    # התיקייה היחידה שנפרסת
├── index.html             # שלד בלבד + meta/OG/JSON-LD לשיתוף ברשתות
├── _headers               # cache + security headers
└── assets/
    ├── js/content.js      # ← כל התוכן. זה מה שעורכים.
    ├── js/render.js       # content.js → DOM
    ├── js/router.js       # ניווט לפי #hash + מעברים בין טאבים
    ├── js/motion.js       # אנימציות
    ├── js/contact.js      # שליחת הטופס
    ├── css/tokens.css     # צבעים, מרווחים, טיימינג — משנים כאן
    ├── css/base.css       # reset, פונטים, RTL, reduced-motion
    ├── css/components.css # ניווט, כפתורים, כרטיסים, טופס
    ├── css/views.css      # פריסה לכל טאב
    └── fonts/             # Heebo, מתארח מקומית
```

### החלטות שכדאי להכיר

- **ניווט**: עמוד אחד, טאבים מתחלפים במקום. הכתובת מתעדכנת (`#about`, `#projects/<id>`)
  אז אפשר לשתף קישור ישיר וכפתור "אחורה" עובד. משתמש ב‑View Transitions API
  איפה שיש, עם fallback ב‑CSS.
- **פונט**: Heebo מתארח מקומית (variable font, שני קבצים, 41KB סה"כ).
  שאר האתרים בתיקייה טוענים Inter מ‑Google Fonts — ל‑Inter אין אותיות עבריות בכלל,
  אז העברית שם נופלת לפונט ברירת מחדל של המערכת.
- **RTL**: דרך CSS logical properties (`margin-inline-start` וכו') ולא left/right,
  כך שהכיווניות נכונה מעצם המבנה.
- **`prefers-reduced-motion`**: מכובד במלואו — כל האנימציות נכבות ו‑`motion.js`
  לא מחבר מאזינים בכלל.
- **מובייל**: סרגל טאבים תחתון (נגיש לאגודל), מכבד `safe-area-inset`.
  אפקטים של עכבר רצים רק ב‑`(pointer: fine)`.
- **משקל**: 68KB בסך הכול (27KB טקסט מכווץ + 41KB פונטים), אפס תלויות.

## בדיקות

לא הוגדר framework לבדיקות. אימות ידני:

```bash
cd public && python3 -m http.server 8099
```

ואז לוודא: מעבר בין כל הטאבים, `#projects/<id>` בטעינה ישירה, כפתור אחורה,
hash לא מוכר → "עליי", הטופס עם שדות ריקים ועם אימייל לא תקין,
ו‑"הפחתת תנועה" בהגדרות מערכת ההפעלה.
# my_main_landing_page
