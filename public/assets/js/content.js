/* ==================== SITE CONTENT ====================
 *
 * This is the ONLY file you need to edit to change the site.
 * Everything the visitor reads lives here. No HTML editing required.
 *
 * Anything marked TODO_ is a placeholder — replace it.
 *
 * Quick guide:
 *   meta      — your name, tagline, photo, contact details
 *   about     — the "About me" tab
 *   projects  — the "My projects" tab (each array item becomes a sub-tab)
 *   support   — the "Support me" tab
 *   contact   — the "Contact me" tab + the form
 *
 * Hebrew text goes in quotes as-is. To add a line break inside a paragraph,
 * just start a new string in the array — each string is its own paragraph.
 * ==================================================== */

const SITE_CONTENT = {

  /* ---------- Identity & contact details ---------- */
  meta: {
    name: 'אוהד שפינדל',
    // Short line under your name in the hero. Keep it punchy.
    tagline: 'בעיקר פה בשביל לעשות לכם את החיים פשוטים יותר.',
    // Rotating words in the hero, shown as: "<prefix> <word>".
    // Keep the words grammatically interchangeable so every combination reads well.
    rotatingPrefix: 'אני',
    rotatingWords: ['מפתח', 'פותר בעיות', 'בונה אוטומציות', 'נדלק משטויות', 'איש משפחה', 'אשכולית אדומה'],
    // Your photo: drop a file in public/assets/img/ and put the path here.
    // Leave as null to show your initials in a gradient circle instead.
    photo: 'assets/img/ohad_logo.webp',

    // How the photo sits inside the blob shape:
    //   'cover'   — fills the whole shape, crops the edges. Best for a square
    //               photo, or any photo where the face is centered with room around it.
    //   'contain' — shows the entire image, no cropping. Best for a cut-out or
    //               logo on a flat background (the shape fills with `photoBg`).
    photoFit: 'contain',
    photoBg: '#000',

    initials: 'א״ש',

    // A speech bubble under the logo. It points at the arcade layer's remote
    // button, so it is shown only while that layer is actually on — under
    // "reduced motion", or with `arcade.enabled: false` below, there is no
    // button and no bubble. Set to null to hide it anyway.
    //
    // `:joy:` draws the joystick icon that is on that button, inline in the text.
    photoBubble: 'יותר מדי בלגן בעיניים?\nלחיצה על כפתור הארקייד :joy: יעלים את הדמויות',

    // WhatsApp number, NOT stored in the clear. This site is a static file that
    // anyone can read, and a plain 972… string is exactly what number-harvesting
    // bots grep for — so it's kept base64-encoded-backwards and decoded only at
    // the moment someone clicks. It is never printed on the page and never put
    // in the markup.
    //
    // This is obfuscation, not encryption: it stops casual scraping, not a person
    // who opens devtools. Don't treat the number as private.
    //
    // To change it, run this in any browser console and paste the result:
    //   btoa('972501234567'.split('').reverse().join(''))
    whatsappEnc: 'NzQ3NDI2NDQ1Mjc5',
    email: 'shpatz.apps@gmail.com',

    // Optional social links. Delete any line you don't want shown.
    socials: [
      // { label: 'LinkedIn', url: 'https://linkedin.com/in/TODO', icon: 'linkedin' },
      // { label: 'GitHub',   url: 'https://github.com/TODO',      icon: 'github'   },
      // { label: 'Instagram', url: 'https://instagram.com/TODO',  icon: 'instagram' },
    ],
  },

  /* ---------- Tab: About me ---------- */
  about: {
    greeting: 'אהלן!',

    // Each string here is one paragraph. Add as many as you like.
    // Write like you talk — this is the part that makes people feel they know you.
    // Use \n inside a string for a line break without starting a new paragraph.
    // For a link, write [the clickable text](https://the-url.com).
    paragraphs: [
      'איזה כיף לכם שהגעתם, אתם במקום הנכון...\nאם אתם פה סימן שכמוני, אתם מחפשים איך לעשות את החיים שלכם פשוטים יותר (וכמובן בלי לקרוע את הכיס 😉)',
      'אז מה מוצאים פה?\nאפליקציות, אוטומציות, קישורים לחיים קלים, הפתעות, ייעוץ ואוזן קשבת.',
      'עוד קצת...\nנשוי לתדהר, מדריכת הורים ויועצת שינה\n (מי שמכיר מכיר... ומי שלא [ללחוץ כאן מיד!](https://www.instagram.com/tidharlevy.parenting))\nאבא לאמרי, נטע וברוס 🧒👩🐕\nמהנדס תשתיות תוכנה, DevOps באפלייד מטריאלס (מוזמנים לשלוח קו"ח)',
    ],

    // Cards with a short list inside. icon can be any emoji.
    // Use `items: [...]` for a bullet list, or `text: '...'` for a paragraph.
    highlights: [
      {
        icon: '❤️',
        title: 'אוהב',
        items: [
          'משפחתיות',
          'כנות ושקיפות',
          'טבע',
          'בירה',
          'ולפעמים לשבור חוקים (בשביל זה יש לכם פטיש איפשהו בדף)',
        ],
      },
      {
        icon: '🙄',
        title: 'פחות מחבב',
        items: [
          'רשתות שיווק',
          'אנשי ועד',
          'לקנות בארץ מוצרים סינים',
        ],
      },
    ],

    /* A pile of photos at the foot of the tab, browsed by dragging the top one
     * aside — or clicking it, or the button under it. The first one in the list
     * is the one on top. `alt` is what a screen reader reads out, so describe
     * the picture. Delete the whole array to hide the pile.
     *
     * The cards are all one shape, so a photo is cropped to fit. `focus` moves
     * which part survives the crop ('center 65%' keeps faces that sit low in
     * the frame); leave it out for the middle. */
    photos: [
      { src: 'assets/img/photo-vineyard.webp', alt: 'אני כורע ברך בכרם עם אמרי ונטע, גפנים ואשכולות ענבים ברקע', focus: 'center 40%' },
      { src: 'assets/img/photo-stream.webp', alt: 'אני חוצה מפל קטן בנחל עם נטע על הגב בכיסא טיולים', focus: 'center 45%' },
      { src: 'assets/img/photo-desert.webp', alt: 'סלפי שלי ושל תדהר על רקע מטע תמרים ומצוקי המדבר', focus: 'center 70%' },
      { src: 'assets/img/photo-deadsea.webp', alt: 'אני ותדהר בטיול מעל ים המלח, המים והמצוקים ברקע', focus: 'center 55%' },
      { src: 'assets/img/photo-family.webp', alt: 'סלפי של תדהר עם אמרי ונטע בבית' },
    ],
    photosHint: 'אפשר להזיז את התמונה הצידה',

    // Your timeline. Newest first reads best. Delete the whole array to hide it.
    timeline: [],
  },

  /* ---------- Tab: My projects ----------
   * Each object here becomes a card AND a sub-tab with its own page.
   * To add a project: copy one block, change the id, done.
   *
   *   id       — unique, English, no spaces. Becomes the link (#projects/my-id)
   *   image    — path under assets/img/, or null for a gradient placeholder
   *   imageFit — 'cover' (default, fills and crops) or 'contain' (whole image,
   *              no cropping — right for a logo or any artwork with edges)
   *   imageBg  — background behind a 'contain' image
   *   tags     — small labels on the card
   *   body     — the full description, one string per paragraph
   *   download — the install file. See the block below; leave `file: null`
   *              and the button shows as "בקרוב" instead of a dead link.
   *   links    — buttons on the project page
   * -------------------------------------- */
  projects: [
    {
      id: 'spill-it-out',
      title: 'Spill It Out\nלמדריכות הורים ויועצות שינה',
      blurb: 'ניהול משפחות בתהליך הדרכת הורים, תמלול הפגישה והנפקת תוצרים בצ\'יק.\nויומן שינה חכם, הזנת תיעוד באופן אוטמטי באמצעות הודעות וואטסאפ או קובץ מסודר, והמון גרפים.',
      tags: ['Windows', 'תוכנת מחשב', 'שינה והורות'],
      image: 'assets/img/logo-spill-it-out.webp',
      imageFit: 'contain',
      imageBg: '#0e0a14',
      body: [
        'האפליקציה נולדה מהצורך של תדהר: יועצת שינה ומדריכת הורים מקבלת עשרות הודעות וואטסאפ והקלטות קוליות מכל משפחה, ואז צריכה איכשהו להפוך את הכל ליומן מסודר ולתמונת מצב.',
        'אז Spill It Out עושה את זה במקומה. מדביקים הודעה או גוררים הקלטה, והיא מתומללת ומפורקת לשדות — מתי נרדם, כמה יקיצות, מי השכיב — הכל נכנס ליומן, וממנו נבנים גרפים אינטראקטיביים של התקדמות: ציר שינה, מפת יקיצות, זמן הירדמות, ציון התקדמות.',
        'הכל רץ על המחשב שלכם. גם התמלול. יש מסלול הורות מלא לצד מסלול השינה, ייצוא ל‑Excel ולגוגל שיטס, דוחות מוכנים להורים, גיבויים אוטומטיים, ועברית ואנגלית מלאות משני הכיוונים.',
        // The free/paid sentence that used to close this paragraph now lives in
        // the `plans` table below, in full — no point saying it twice.
        'התוכנה בעברית ובאנגלית, לחלונות.',
      ],

      /* The free/paid split, copied from the app's own terms (legal/terms-he.md
       * §3), which state it "for version 2.0" with a promise that a later change
       * won't apply retroactively — so it is a contractual list, not marketing
       * copy. If the app's split changes, change it there first and copy again.
       * Delete the whole `plans` block to hide the table. */
      plans: {
        title: 'מה חינם ומה בתשלום',
        intro: 'החלוקה נכונה לגרסה 2.0, והיא נדיבה בכוונה: כל היומן, כל הגרפים ומסלול ההורות המלא לא עולים כלום.',
        columns: [
          {
            id: 'free',
            label: 'ליבה חופשית',
            badge: 'חינם',
            emoji: '🎁',            // the card's big glyph
            bullet: '✅',           // repeats before every item in this column
            tagline: 'בלי רישיון, בלי הגבלת זמן, בלי חשבון.',
            // A price on both cards, so the two read as one comparison rather
            // than as a feature list next to an offer.
            price: '0 ₪',
            priceUnit: 'לתמיד',
            items: [
              'ניהול נתוני המשפחה',
              'הזנה ידנית של יומני ההורות והשינה',
              'כל התרשימים, המדדים והגרפים',
              'סנכרון יומן מגיליון Google Sheets',
              'חילוץ בעזרת AI — גם מקומי (Ollama) וגם Gemini',
              'מסלול הדרכת ההורים: מפגשים, חילוץ, אצירת נושאים, טיפים ומשימות',
              'סט סרטוני הדרכה',
              'ועוד הפתעות',
            ],
          },
          {
            id: 'pro',
            label: 'עם רישיון',
            badge: 'בתשלום',
            featured: true,
            emoji: '🔑',
            bullet: '⭐',
            // Says the thing the two columns side by side don't: the paid tier
            // is the free one plus, never instead of.
            tagline: 'כל מה שבחינם — ובנוסף:',
            price: '460 ₪',
            priceUnit: 'לשנה ללא כל התחייבות',
            items: [
              'חיבור WhatsApp ושליפת הודעות מקבוצות במהירות ונוחות',
              'תמלול מקומי וללא הגבלה של דיווחים קוליים',
              'הפקת דוחות להורים - במסלול השינה ובמסלול ההדרכה',
              'גישה לקבוצת הוואטסאפ הפרטית עם מענה מהיר לכל בעיה',
              'הפניות והתקלות שלכם מטופלות בעדיפות',
            ],
          },
        ],
        noteEmoji: '⏳',
        note: '30 ימי ניסיון עם כל היכולות. בסיומם, וגם בלי רישיון, האפליקציה ממשיכה לעבוד בליבה החופשית וכל הנתונים שלכם נשארים נגישים במלואם.',
      },

      // The installer. Drop the file in public/assets/files/ and put its path
      // in `file` — until then the page shows `soonLabel` on a dead button
      // rather than a link that 404s.
      download: {
        file: null, // 'assets/files/SpillItOut-Setup.exe'
        label: 'הורדה למחשב',
        soonLabel: 'ההורדה תיפתח כאן בקרוב',
        meta: 'Windows 10/11 · קובץ התקנה',
        note: '',
      },

      links: [
        // הקוד עצמו בריפו פרטי, אז אין כאן קישור אליו.
      ],
    },
    {
      id: 'shpatz',
      title: 'שפאץ!\nניהול העסק, מעקב לקוחות והנפקת חשבוניות',
      blurb: 'לקוחות, סדרות טיפולים וחשבוניות במקום אחד: מפיקים מסמך, שולחים במייל, וממשיכים לעבוד.',
      tags: ['אפליקציית דפדפן', 'לקוחות וחשבוניות', 'בקרוב'],
      // No artwork yet — null shows the gradient placeholder rather than a
      // broken image. Drop a logo in assets/img/ and point here when there is one.
      image: null,
      body: [
        'מטפלים, מאמנים ובעלי עסק קטן מבזבזים חצי מהיום על הצד המנהלי: מי הלקוח, איזה מפגש בסדרה, מה סוכם, ומי עוד לא קיבל חשבונית. שפאץ! אוסף את כל זה למקום אחד.',
        'ניהול לקוחות מלא — פרטי קשר, היסטוריית טיפולים והערות לכל מפגש — לצד מעקב אחרי סדרות טיפולים, מפגש אחר מפגש.',
        'ההפקה מתאימה את עצמה לסוג העוסק שלכם: עוסק פטור או עוסק מורשה, והאפליקציה מציעה את סוגי המסמכים הנכונים — חשבונית מס, חשבונית עסקה או קבלה. כל מסמך יוצא כ‑PDF מקצועי ומוכן להדפסה, ונשלח ללקוח במייל ישירות מהאפליקציה.',
        'לוח בקרה מרכזי לכל המסמכים שהופקו: חיפוש, סינון, עדכון סטטוס תשלום, ארכיון וייצוא של כמה מסמכים יחד ל‑ZIP. אפשר להגדיר את פרטי העסק, להעלות לוגו ולהתאים את המלל שמופיע על המסמכים.',
        'רץ בדפדפן, במחשב ובנייד. התחברות מאובטחת עם חשבון גוגל, והנתונים שמורים ב‑Firebase.',
      ],

      // A web app, so there is nothing to download: the same block carries the
      // "not yet" button. When it goes live, the address belongs in `links`
      // below as a normal button — not in `file`, which renders a download.
      download: {
        file: null,
        label: 'כניסה לאפליקציה',
        soonLabel: 'האפליקציה תיפתח כאן בקרוב',
        meta: 'אפליקציית דפדפן · מחשב ונייד',
        note: 'עדיין בעבודה 🛠️ רוצים לדעת ברגע שזה עולה? שלחו לי הודעה ואעדכן אתכם.',
      },

      links: [
        // הקוד עצמו בריפו פרטי, אז אין כאן קישור אליו.
      ],
    },
  ],

  /* ---------- Tab: Support me ----------
   * kind: 'link'   — a normal button that opens a URL
   *       'handle' — a phone number / handle to copy, for anything with no
   *                  working web link at all
   *
   * logo   — the platform's real app icon, under assets/img/. It becomes the
   *          card's tile as-is (own colour, own rounded corners).
   * icon   — fallback glyph from the ICONS map in render.js, drawn in `accent`.
   *          Only used when there is no `logo`.
   * accent — tints the card border, glow and QR frame. Set it to a colour from
   *          the logo so the two agree.
   * qr     — optional scannable code, for links that only open in an app.
   *          Must be 984px / 41 modules; see the .qr-box note in views.css.
   * -------------------------------------- */
  support: {
    intro: 'תמיכה טכנית זה בלשונית הבאה...\nאם משהו כאן עזר לך, שימח אותך, או פשוט חסך לך זמן - \nאפשר להגיד תודה בכל אחת מהדרכים הבאות.',
    note: 'כל תמיכה, גדולה או קטנה, הולכת ישירות לזמן שמושקע בפרויקטים הבאים או לבירה. 🍺',
    options: [
      {
        id: 'paypal',
        kind: 'link',
        platform: 'PayPal',
        label: 'תמיכה דרך PayPal',
        note: 'עובד מכל מקום בעולם, בכל מטבע.',
        url: 'https://paypal.me/ohadshpindel',
        qr: 'assets/img/paypal-qr.webp',
        qrAlt: 'קוד QR לתשלום ב‑PayPal לאוהד שפינדל',
        qrNote: 'סריקה מהנייד לתשלום',
        logo: 'assets/img/logo-paypal.webp',
        icon: 'paypal',
        // PayPal Blue, not the icon's navy — the accent tints the card border and
        // glow, and #003087 all but disappears against the dark background.
        accent: '#0070e0',
      },
      {
        id: 'bmc',
        kind: 'link',
        platform: 'Buy Me a Coffee',
        label: 'קנו לי קפה',
        note: 'הדרך הכי נחמדה להגיד תודה. באמת שותה את זה.',
        url: 'TODO_BMC_URL', // e.g. 'https://buymeacoffee.com/ohadshpindel'
        logo: 'assets/img/logo-bmc.webp',
        icon: 'coffee',
        accent: '#ffdd00',
      },
      // Bit has no public profile page, but the app's share sheet produces a
      // bitpay.co.il/app/me/... link. On a phone it opens the app straight on
      // my name; on a desktop there is nothing to open, so the QR (the same
      // link, scanned with a phone) is the way in. Hence both, via `qr`.
      {
        id: 'bit',
        kind: 'link',
        platform: 'BIT',
        label: 'תשלום בביט',
        note: 'מהנייד — לחיצה אחת פותחת את האפליקציה. \nמהמחשב — סרקו את הקוד.',
        url: 'https://www.bitpay.co.il/app/me/5421115B-39D5-0DD1-5573-D9C63823AB33FB2E',
        qr: 'assets/img/bit-qr.webp',
        qrAlt: 'קוד QR לתשלום בביט לאוהד שפינדל',
        // Kept to one line, like the other cards' — a caption that wraps pushes
        // this card's QR out of line with theirs.
        qrNote: 'סריקה מהנייד לתשלום',
        logo: 'assets/img/logo-bit.webp',
        icon: 'bit',
        accent: '#44e2ed', // the cyan of bit's own wordmark
      },
      // A public PayBox group, so this is a join link rather than my number.
      // Same reasoning as Bit above for the QR: the link opens the app on a
      // phone, and a visitor on a desktop scans instead.
      {
        id: 'paybox',
        kind: 'link',
        platform: 'PayBox',
        label: 'הצטרפות לקבוצה',
        note: 'השימוש פייבוקס חינם!\nמחכים לך בקבוצת "בירה למפתח".',
        url: 'https://links.payboxapp.com/VLnsA59Rv5b',
        qr: 'assets/img/paybox-qr.webp',
        qrAlt: 'קוד QR להצטרפות לקבוצת "בירה למפתח" ב‑PayBox',
        qrNote: 'סריקה מהנייד להצטרפות',
        logo: 'assets/img/logo-paybox.webp',
        icon: 'paybox',
        accent: '#009ceb', // PayBox's own blue, from the app icon
      },
    ],
  },

  /* ---------- Tab: Contact me ---------- */
  contact: {
    intro: 'שאלות? תמיכה טכנית? רעיונות?\nאני פה בשבילך ובמגוון דרכים.',
    responseNote: 'בדרך כלל אני חוזר תוך יום-יומיים.',

    // Get a free key in 30 seconds at https://web3forms.com — no account needed,
    // just type your email and they send you the key. Paste it here.
    // Until you do, the form shows a friendly notice instead of failing silently.
    web3formsKey: '394d57e8-328e-43c4-9831-28ae84fa03e3',

    // Subject line of the email that lands in your inbox.
    emailSubject: 'הודעה חדשה מהאתר האישי',

    form: {
      name: { label: 'איך קוראים לך?', placeholder: 'השם שלך' },
      email: { label: 'אימייל', placeholder: 'you@example.com' },
      phone: { label: 'טלפון', placeholder: '', optional: true },
      message: { label: 'מה בא לך לספר לי?', placeholder: 'עדיף בחרוזים' },
      submit: 'שליחה',
      sending: 'שולח…',
      success: 'ההודעה נשלחה. תודה — אחזור אליך בקרוב.',
      error: 'משהו השתבש בשליחה. אפשר לנסות שוב, או לפנות אליי ישירות:',
    },

    whatsapp: {
      title: 'רוצה דרך וואטסאפ?',
      text: 'לחיצה אחת ואנחנו בשיחה.',
      cta: 'WhatsApp',
      // The message pre-filled in WhatsApp when the form is empty.
      defaultMessage: 'היי אוהד, הגעתי מהאתר שלך ורציתי לשאול —',
    },

    // A closing picture at the foot of the tab. Set `image` to null to hide it.
    // `alt` is what a screen reader reads out, so it describes the picture;
    // `caption` is optional visible text under it — leave it empty for none.
    image: 'assets/img/contact-devops.webp',
    imageAlt: 'איור בסגנון קריקטורה: אני יושב מול מסכים שמציגים "Deployment Failed", שרתים בוערים מסביב, ומפתח ברגים ביד',
    imageCaption: '',
  },

  /* ---------- Navigation labels ---------- */
  nav: [
    { id: 'about', label: 'קצת עלי', icon: 'user' },
    { id: 'projects', label: 'הפרויקטים שלי', icon: 'grid' },
    { id: 'support', label: 'תמיכה', icon: 'heart' },
    { id: 'contact', label: 'דברו איתי', icon: 'mail' },
  ],

  footer: {
    text: '"גדול יותר זה לא תמיד טוב יותר,\nאבל זה תמיד גדול יותר."\nפומבה [שם,שם]',
  },

  /* ---------- The retro arcade layer ----------
   * דמויות פיקסל שמסתובבות בעמוד, מציצות מאחורי לשוניות וכרטיסים,
   * ונופלות לאט מלמעלה. בנוסף יש פטיש ששובר מילים לפיקסלים.
   *
   * enabled — false מכבה את כל השכבה לגמרי.
   * density — כמה דמויות יכולות להופיע בו-זמנית:
   *           'calm' = 2, 'normal' = 4, 'busy' = 6  (במובייל תמיד פחות)
   *
   * הערה: מי שהגדיר במערכת ההפעלה "הפחתת תנועה" לא יראה את השכבה בכלל,
   * וגם לא את הכפתורים — כל הרעיון כאן הוא תנועה.
   * -------------------------------------------- */
  arcade: {
    enabled: true,
    density: 'normal',
    labels: {
      cast: 'דמויות',
      castOn: 'הדמויות פעילות — לחצו לכיבוי',
      castOff: 'הדמויות כבויות — לחצו להפעלה',
      hammer: 'פטיש',
      hammerOn: 'הפטיש פעיל — לחצו כדי להחזיר הכול',
    },

    // A speech bubble beside the hammer button, shown each time the hammer is
    // picked up. It goes away when the hammer is put down, after a few seconds,
    // or when clicked — and a click means "don't show me this again". Set to
    // null for no bubble at all.
    hammerBubble: 'כשאתם מסיימים עם הפטיש תחזירו אותו למקום!\nאין לי כח לאסוף אחריכם כל היום',
  },
};
