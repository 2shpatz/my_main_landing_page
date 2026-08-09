/* ==================== RENDER ====================
 * Turns SITE_CONTENT into DOM. Nothing here needs editing to change
 * the site's text — edit content.js instead.
 * ================================================ */

const Render = (() => {
  const C = SITE_CONTENT;

  /* ---------- helpers ---------- */

  // All content comes from a local file we control, but escaping keeps a
  // stray < or & in Hebrew copy from silently breaking the markup.
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));

  const isTodo = (v) => typeof v === 'string' && v.startsWith('TODO_');
  const has = (v) => v && !isTodo(v);

  const paras = (arr) => (arr || []).map((p) => `<p>${esc(p)}</p>`).join('');

  const ICONS = {
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21.2l7.7-7.7 1.1-1.1a5.5 5.5 0 0 0 0-7.8z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    arrow: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
    paypal: '<path d="M7 21h3l1-5h3a5 5 0 0 0 0-10H8L5 21z"/><path d="M11 16h3a5 5 0 0 0 5-5"/>',
    bit: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10h4a2 2 0 0 1 0 4H9h4a2 2 0 0 1 0 4H9"/>',
    paybox: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h4"/>',
    whatsapp: '<path d="M20.5 3.5A11 11 0 0 0 3.2 17L2 22l5.2-1.2A11 11 0 1 0 20.5 3.5z"/><path d="M8.5 8.5c0 4 3 7 7 7"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.9 1S18.7.6 16 2.5a13.4 13.4 0 0 0-7 0C6.3.6 5.1 1 5.1 1A5 5 0 0 0 5 4.8a5.4 5.4 0 0 0-1.4 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22"/>',
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>',
  };

  const icon = (name, cls = '') => {
    const path = ICONS[name];
    if (!path) return '';
    return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
  };

  // Marks each direct child with --i so CSS can stagger the reveal.
  const stagger = (nodes) => nodes.forEach((el, i) => el.style.setProperty('--i', i));

  /* ---------- shell: brand, nav, footer ---------- */

  function shell() {
    document.getElementById('brand-mark').textContent = C.meta.initials || '';
    document.getElementById('brand-name').textContent = C.meta.name || '';
    document.getElementById('footer-text').textContent = C.footer?.text || '';
    document.getElementById('footer-name').textContent = C.meta.name || '';
    document.getElementById('footer-year').textContent = new Date().getFullYear();

    const desktop = document.getElementById('tablist-desktop');
    const mobile = document.getElementById('tablist-mobile');

    // The indicator is absolutely positioned, so appending tabs after it
    // keeps source order without affecting layout.
    C.nav.forEach((item) => {
      desktop.appendChild(tabButton(item, false));
      mobile.appendChild(tabButton(item, true));
    });
  }

  function tabButton(item, isMobile) {
    const btn = document.createElement('button');
    btn.className = 'tab';
    btn.type = 'button';
    btn.role = 'tab';
    btn.dataset.route = item.id;
    btn.id = isMobile ? `mtab-${item.id}` : `tab-${item.id}`;
    btn.setAttribute('aria-controls', `view-${item.id}`);
    btn.setAttribute('aria-selected', 'false');
    btn.tabIndex = -1;
    btn.innerHTML = isMobile
      ? `${icon(item.icon, 'tab-icon')}<span>${esc(item.label)}</span>`
      : esc(item.label);
    return btn;
  }

  /* ---------- view: about ---------- */

  function about() {
    const m = C.meta;
    const a = C.about;

    const portrait = has(m.photo)
      ? `<img src="${esc(m.photo)}" alt="${esc(m.name)}" width="300" height="300"
           fetchpriority="high" decoding="async">`
      : `<div class="portrait-initials">${esc(m.initials || '')}</div>`;

    const words = m.rotatingWords || [];
    // Reads as a sentence ("אני מפתח"), not a floating label.
    const rotator = words.length
      ? `<p class="hero-role">${esc(m.rotatingPrefix || '')}
           <span class="rotator"><span class="rotator-word" id="rotator-word">${esc(words[0])}</span></span></p>`
      : '';

    const html = `
      <div class="container">
        <div class="hero">
          <div class="hero-copy reveal">
            <p class="hero-greeting">${esc(a.greeting)}</p>
            <h1><span class="gradient-text">${esc(m.name)}</span></h1>
            ${rotator}
            <p class="hero-tagline">${esc(m.tagline)}</p>
            <div class="hero-actions">
              <a class="btn btn-primary magnetic" href="#contact">
                ${icon('mail')}<span>בוא נדבר</span>
              </a>
              <a class="btn btn-ghost magnetic" href="#projects">
                ${icon('grid')}<span>מה בניתי</span>
              </a>
            </div>
          </div>
          <div class="hero-portrait reveal" style="--i:1">
            <div class="portrait-frame">${portrait}</div>
          </div>
        </div>

        <div class="about-body reveal">${paras(a.paragraphs)}</div>

        ${a.highlights?.length ? `
          <div class="highlight-grid">
            ${a.highlights.map((h) => `
              <article class="card highlight-card tilt reveal">
                <span class="h-icon">${esc(h.icon)}</span>
                <h3>${esc(h.title)}</h3>
                <p>${esc(h.text)}</p>
              </article>`).join('')}
          </div>` : ''}

        ${a.timeline?.length ? `
          <div class="timeline">
            ${a.timeline.map((t) => `
              <div class="timeline-item reveal">
                <span class="timeline-year">${esc(t.year)}</span>
                <h3>${esc(t.title)}</h3>
                <p>${esc(t.text)}</p>
              </div>`).join('')}
          </div>` : ''}
      </div>`;

    const view = document.getElementById('view-about');
    view.innerHTML = html;
    stagger([...view.querySelectorAll('.highlight-grid .reveal')]);
    stagger([...view.querySelectorAll('.timeline .reveal')]);
  }

  /* ---------- view: projects ---------- */

  function projects() {
    const list = C.projects || [];
    const view = document.getElementById('view-projects');

    const cards = list.length ? `
      <div class="project-grid">
        ${list.map((p) => `
          <article class="card project-card tilt reveal" data-project="${esc(p.id)}"
                   role="link" tabindex="0" aria-label="${esc(p.title)}">
            <div class="project-thumb">
              ${has(p.image)
                ? `<img src="${esc(p.image)}" alt="" loading="lazy" decoding="async" width="400" height="250">`
                : `<div class="project-thumb-placeholder">✦</div>`}
            </div>
            <div class="project-body">
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.blurb)}</p>
              ${p.tags?.length ? `<div class="tag-row">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
              <span class="project-more">לפרטים ${icon('arrow')}</span>
            </div>
          </article>`).join('')}
      </div>` : emptyState('עוד לא העליתי פרויקטים', 'בקרוב יהיה כאן מה לראות. בינתיים, אשמח אם תגיד שלום.');

    view.innerHTML = `
      <div class="container" id="projects-index">
        <div class="section-head reveal">
          <span class="eyebrow">הפרויקטים שלי</span>
          <h2>דברים שבניתי</h2>
          <p>כל אחד מהם התחיל מבעיה אמיתית. לחיצה על כרטיס פותחת את הסיפור המלא.</p>
        </div>
        ${cards}
      </div>
      <div class="container project-detail" id="project-detail" hidden></div>`;

    stagger([...view.querySelectorAll('.project-grid .reveal')]);
  }

  // Renders one project's page into the detail pane. Returns false if unknown.
  function projectDetail(id) {
    const p = (C.projects || []).find((x) => x.id === id);
    const pane = document.getElementById('project-detail');
    const index = document.getElementById('projects-index');
    if (!p || !pane) return false;

    pane.innerHTML = `
      <a class="back-link" href="#projects">${icon('arrow')}<span>חזרה לכל הפרויקטים</span></a>
      ${has(p.image)
        ? `<img class="project-hero-img" src="${esc(p.image)}" alt="${esc(p.title)}" decoding="async">`
        : ''}
      <div class="section-head">
        ${p.tags?.length ? `<div class="tag-row" style="margin-block-end:12px">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
        <h2>${esc(p.title)}</h2>
      </div>
      <div class="project-detail-body">${paras(p.body?.length ? p.body : [p.blurb])}</div>
      ${p.links?.length ? `
        <div class="project-links">
          ${p.links.map((l) => `
            <a class="btn ${l.primary ? 'btn-primary' : 'btn-ghost'} magnetic"
               href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l.label)}</a>`).join('')}
        </div>` : ''}`;

    pane.hidden = false;
    index.hidden = true;
    return true;
  }

  function showProjectIndex() {
    const pane = document.getElementById('project-detail');
    const index = document.getElementById('projects-index');
    if (pane) pane.hidden = true;
    if (index) index.hidden = false;
  }

  /* ---------- view: support ---------- */

  function support() {
    const s = C.support;
    const live = (s.options || []).filter((o) =>
      o.kind === 'handle' ? has(o.handle) : has(o.url));
    const pending = (s.options || []).length - live.length;

    const cards = live.length ? `
      <div class="support-grid">
        ${live.map((o) => `
          <article class="card support-card tilt reveal" style="--accent:${esc(o.accent)}">
            <div class="support-icon" style="color:${esc(o.accent)}">${icon(o.icon)}</div>
            <h3>${esc(o.platform)}</h3>
            <p class="s-note">${esc(o.note)}</p>
            ${o.kind === 'handle'
              ? `<button class="handle-box" type="button" data-copy="${esc(o.handle)}"
                    aria-label="העתקת המספר ${esc(o.handle)}">
                   <span class="ltr">${esc(o.handle)}</span>${icon('copy')}
                 </button>`
              : `<a class="btn btn-ghost" href="${esc(o.url)}" target="_blank"
                    rel="noopener noreferrer">${esc(o.label)}</a>`}
          </article>`).join('')}
      </div>`
      : emptyState('אפשרויות התמיכה בהכנה', 'עוד לא הגדרתי את הקישורים. בינתיים, מילה טובה גם עושה את העבודה.');

    document.getElementById('view-support').innerHTML = `
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">תמיכה</span>
          <h2>רוצה לומר תודה?</h2>
          <p>${esc(s.intro)}</p>
        </div>
        ${cards}
        ${live.length ? `<p class="support-note reveal">${esc(s.note)}</p>` : ''}
        ${pending && live.length ? `<p class="support-note">עוד אפשרויות בקרוב.</p>` : ''}
      </div>`;

    stagger([...document.querySelectorAll('#view-support .support-grid .reveal')]);
  }

  /* ---------- view: contact ---------- */

  function contact() {
    const c = C.contact;
    const f = c.form;
    const m = C.meta;

    const keyMissing = !has(c.web3formsKey);

    const direct = [];
    if (has(m.email)) {
      direct.push(`<div class="direct-row">${icon('mail')}
        <a href="mailto:${esc(m.email)}" class="ltr">${esc(m.email)}</a></div>`);
    }
    if (has(m.whatsapp)) {
      direct.push(`<div class="direct-row">${icon('phone')}
        <a href="https://wa.me/${esc(m.whatsapp)}" target="_blank" rel="noopener noreferrer"
           class="ltr">+${esc(m.whatsapp)}</a></div>`);
    }
    (m.socials || []).forEach((s) => {
      if (!has(s.url)) return;
      direct.push(`<div class="direct-row">${icon(s.icon)}
        <a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a></div>`);
    });

    // With no WhatsApp number and no direct details, the aside would be an
    // empty column — collapse to one column instead of leaving dead space.
    const hasAside = has(m.whatsapp) || direct.length > 0;

    document.getElementById('view-contact').innerHTML = `
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">צור קשר</span>
          <h2>נשמח לשמוע ממך</h2>
          <p>${esc(c.intro)}</p>
          ${c.responseNote ? `<span class="response-note"><i class="pulse-dot"></i>${esc(c.responseNote)}</span>` : ''}
        </div>

        <div class="contact-layout${hasAside ? '' : ' no-aside'}">
          <div class="card reveal">
            ${keyMissing ? `
              <div class="setup-notice">
                <strong>הטופס עדיין לא מחובר.</strong> כדי להפעיל אותו, קבל מפתח חינמי ב־<code>web3forms.com</code>
                והחלף את <code>web3formsKey</code> בקובץ <code>assets/js/content.js</code>.
                עד אז ההודעות יישלחו דרך וואטסאפ.
              </div>` : ''}

            <form class="form-grid" id="contact-form" novalidate>
              <div class="form-row-2">
                <div class="field">
                  <label for="cf-name">${esc(f.name.label)}</label>
                  <input id="cf-name" name="name" type="text" autocomplete="name"
                         placeholder="${esc(f.name.placeholder)}" required>
                  <span class="field-error" data-error-for="name"></span>
                </div>
                <div class="field">
                  <label for="cf-email">${esc(f.email.label)}</label>
                  <input id="cf-email" name="email" type="email" autocomplete="email"
                         placeholder="${esc(f.email.placeholder)}" required>
                  <span class="field-error" data-error-for="email"></span>
                </div>
              </div>

              <div class="field">
                <label for="cf-phone">${esc(f.phone.label)}
                  <span class="optional-tag">(לא חובה)</span></label>
                <input id="cf-phone" name="phone" type="tel" autocomplete="tel"
                       placeholder="${esc(f.phone.placeholder)}">
                <span class="field-error" data-error-for="phone"></span>
              </div>

              <div class="field">
                <label for="cf-message">${esc(f.message.label)}</label>
                <textarea id="cf-message" name="message" rows="6"
                          placeholder="${esc(f.message.placeholder)}" required></textarea>
                <span class="field-error" data-error-for="message"></span>
              </div>

              <div class="hp-field" aria-hidden="true">
                <label for="cf-botcheck">אל תמלא שדה זה</label>
                <input id="cf-botcheck" name="botcheck" type="text" tabindex="-1" autocomplete="off">
              </div>

              <div class="form-status" id="form-status" role="alert"></div>

              <div>
                <button class="btn btn-primary magnetic" type="submit" id="cf-submit">
                  <span class="btn-label">${esc(f.submit)}</span>
                </button>
              </div>
            </form>
          </div>

          ${!hasAside ? '' : `
          <aside class="contact-aside">
            ${has(m.whatsapp) ? `
              <div class="card wa-card reveal">
                <h3>${esc(c.whatsapp.title)}</h3>
                <p>${esc(c.whatsapp.text)}</p>
                <button class="btn btn-whatsapp magnetic" type="button" id="wa-btn">
                  ${icon('whatsapp')}<span>${esc(c.whatsapp.cta)}</span>
                </button>
              </div>` : ''}
            ${direct.length ? `<div class="card direct-card reveal">${direct.join('')}</div>` : ''}
          </aside>`}
        </div>
      </div>`;
  }

  function emptyState(title, text) {
    return `<div class="empty-state reveal">
      <span class="emoji">🌱</span>
      <h3>${esc(title)}</h3>
      <p>${esc(text)}</p>
    </div>`;
  }

  /* ---------- boot ---------- */

  function all() {
    shell();
    about();
    projects();
    support();
    contact();
  }

  return { all, projectDetail, showProjectIndex, icon, esc, has };
})();
