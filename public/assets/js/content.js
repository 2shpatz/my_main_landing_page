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
    tagline: 'בונה דברים שעובדים, ומסביר אותם בשפה של בני אדם',
    // Rotating words in the hero, shown as: "<prefix> <word>".
    // Keep the words grammatically interchangeable so every combination reads well.
    rotatingPrefix: 'אני',
    rotatingWords: ['מפתח', 'פותר בעיות', 'בונה אוטומציות', 'סקרן בלתי נלאה'],
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

    // WhatsApp number in international format, digits only, no + and no dashes.
    // Israeli 050-559-5538 becomes 972505595538
    whatsapp: 'TODO_WHATSAPP', // e.g. '972501234567'
    email: 'TODO_EMAIL', // e.g. 'ohad@example.com'

    // Optional social links. Delete any line you don't want shown.
    socials: [
      // { label: 'LinkedIn', url: 'https://linkedin.com/in/TODO', icon: 'linkedin' },
      // { label: 'GitHub',   url: 'https://github.com/TODO',      icon: 'github'   },
      // { label: 'Instagram', url: 'https://instagram.com/TODO',  icon: 'instagram' },
    ],
  },

  /* ---------- Tab: About me ---------- */
  about: {
    greeting: 'נעים מאוד, אני אוהד',

    // Each string here is one paragraph. Add as many as you like.
    // Write like you talk — this is the part that makes people feel they know you.
    paragraphs: [
      'TODO_ABOUT_1 — כאן מספרים את הסיפור בגוף ראשון. מה אתה עושה, ולמה דווקא את זה. שתיים-שלוש שורות, בלי מילים גדולות.',
      'TODO_ABOUT_2 — כאן אפשר להוסיף את הרקע: מאיפה הגעת, מה למדת בדרך, מה הביא אותך לאן שאתה נמצא היום.',
      'TODO_ABOUT_3 — וכאן משהו אישי שאין לו קשר לעבודה. תחביב, משפחה, משהו שגורם לאנשים לחייך. זה מה שהופך דף אינטרנט לאדם.',
    ],

    // Three or four things you want people to know immediately.
    // icon can be any emoji.
    highlights: [
      { icon: '🛠️', title: 'TODO_כותרת', text: 'TODO — משפט אחד שמסביר מה אתה נותן.' },
      { icon: '💡', title: 'TODO_כותרת', text: 'TODO — עוד משפט אחד. תחשוב על זה כמו כותרת בעיתון.' },
      { icon: '🤝', title: 'TODO_כותרת', text: 'TODO — ומה שהופך את העבודה איתך לנעימה.' },
    ],

    // Your timeline. Newest first reads best. Delete the whole array to hide it.
    timeline: [
      { year: '2026', title: 'TODO_תפקיד או אבן דרך', text: 'TODO — שורה על מה קרה שם.' },
      { year: '2023', title: 'TODO_תפקיד או אבן דרך', text: 'TODO — שורה על מה קרה שם.' },
      { year: '2020', title: 'TODO_ההתחלה', text: 'TODO — איפה הכול התחיל.' },
    ],
  },

  /* ---------- Tab: My projects ----------
   * Each object here becomes a card AND a sub-tab with its own page.
   * To add a project: copy one block, change the id, done.
   *
   *   id     — unique, English, no spaces. Becomes the link (#projects/my-id)
   *   image  — path under assets/img/, or null for a gradient placeholder
   *   tags   — small labels on the card
   *   body   — the full description, one string per paragraph
   *   links  — buttons on the project page
   * -------------------------------------- */
  projects: [
    {
      id: 'project-one',
      title: 'TODO_שם הפרויקט',
      blurb: 'TODO — משפט אחד שמסביר מה זה. זה מה שרואים על הכרטיס.',
      tags: ['TODO', 'תגית'],
      image: null,
      body: [
        'TODO — הסבר מלא על הפרויקט. מה הבעיה שהוא פותר?',
        'TODO — איך בנית אותו, ומה היה מעניין בדרך.',
      ],
      links: [
        // { label: 'לאתר', url: 'https://example.com', primary: true },
        // { label: 'קוד המקור', url: 'https://example.com' },
      ],
    },
    {
      id: 'project-two',
      title: 'TODO_שם הפרויקט השני',
      blurb: 'TODO — עוד משפט קצר וקולע.',
      tags: ['TODO'],
      image: null,
      body: [
        'TODO — פרטים על הפרויקט הזה.',
      ],
      links: [],
    },
  ],

  /* ---------- Tab: Support me ----------
   * kind: 'link'   — a normal button that opens a URL (PayPal, Buy Me a Coffee)
   *       'handle' — a phone number / handle to copy (Bit, PayBox — app-only,
   *                  no working web link, so we let people copy the number)
   * -------------------------------------- */
  support: {
    intro: 'אם משהו כאן עזר לך, שימח אותך, או פשוט חסך לך זמן — אפשר להגיד תודה. אין שום חובה, וזה לא משנה כלום ביחס שלי אליך. אבל זה כן גורם לי לחייך.',
    note: 'כל תמיכה, גדולה או קטנה, הולכת ישירות לזמן שמושקע בפרויקטים הבאים.',
    options: [
      {
        id: 'paypal',
        kind: 'link',
        platform: 'PayPal',
        label: 'תמיכה דרך PayPal',
        note: 'עובד מכל מקום בעולם, בכל מטבע.',
        url: 'TODO_PAYPAL_URL', // e.g. 'https://paypal.me/ohadshpindel'
        icon: 'paypal',
        accent: '#0070ba',
      },
      {
        id: 'bmc',
        kind: 'link',
        platform: 'Buy Me a Coffee',
        label: 'קנו לי קפה',
        note: 'הדרך הכי נחמדה להגיד תודה. באמת שותה את זה.',
        url: 'TODO_BMC_URL', // e.g. 'https://buymeacoffee.com/ohadshpindel'
        icon: 'coffee',
        accent: '#ffdd00',
      },
      {
        id: 'bit',
        kind: 'handle',
        platform: 'ביט',
        label: 'העברה בביט',
        note: 'פתחו את אפליקציית ביט והעבירו למספר הזה.',
        handle: 'TODO_BIT_PHONE', // e.g. '050-123-4567'
        icon: 'bit',
        accent: '#00a0e3',
      },
      {
        id: 'paybox',
        kind: 'handle',
        platform: 'PayBox',
        label: 'העברה ב‑PayBox',
        note: 'פתחו את PayBox והעבירו למספר הזה.',
        handle: 'TODO_PAYBOX_PHONE', // e.g. '050-123-4567'
        icon: 'paybox',
        // Metal rather than PayBox's brand purple, to keep the palette clean.
        accent: '#6e6689',
      },
    ],
  },

  /* ---------- Tab: Contact me ---------- */
  contact: {
    intro: 'יש שאלה, רעיון, או סתם בא לך להגיד שלום? אני קורא כל הודעה ועונה לכולן.',
    responseNote: 'בדרך כלל אני חוזר תוך יום־יומיים.',

    // Get a free key in 30 seconds at https://web3forms.com — no account needed,
    // just type your email and they send you the key. Paste it here.
    // Until you do, the form shows a friendly notice instead of failing silently.
    web3formsKey: 'TODO_WEB3FORMS_KEY',

    // Subject line of the email that lands in your inbox.
    emailSubject: 'הודעה חדשה מהאתר האישי',

    form: {
      name: { label: 'איך קוראים לך?', placeholder: 'השם שלך' },
      email: { label: 'אימייל', placeholder: 'you@example.com' },
      phone: { label: 'טלפון', placeholder: 'לא חובה', optional: true },
      message: { label: 'מה בא לך לספר לי?', placeholder: 'כתוב כאן בחופשיות…' },
      submit: 'שליחה',
      sending: 'שולח…',
      success: 'ההודעה נשלחה. תודה — אחזור אליך בקרוב.',
      error: 'משהו השתבש בשליחה. אפשר לנסות שוב, או לפנות אליי ישירות:',
    },

    whatsapp: {
      title: 'מעדיף וואטסאפ?',
      text: 'לחיצה אחת ואנחנו בשיחה. אם מילאת את הטופס — הפרטים יעברו איתך.',
      cta: 'שליחת הודעה בוואטסאפ',
      // The message pre-filled in WhatsApp when the form is empty.
      defaultMessage: 'היי אוהד, הגעתי מהאתר שלך ורציתי לשאול —',
    },
  },

  /* ---------- Navigation labels ---------- */
  nav: [
    { id: 'about', label: 'קצת עלי', icon: 'user' },
    { id: 'projects', label: 'הפרויקטים שלי', icon: 'grid' },
    { id: 'support', label: 'תמיכה', icon: 'heart' },
    { id: 'contact', label: 'צור קשר', icon: 'mail' },
  ],

  footer: {
    text: 'נבנה באהבה, בלי תבניות מוכנות.',
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
  },
};
