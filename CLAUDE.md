# mw-website — Madison Wood Writer Portfolio

## Architecture
- **SSG:** Jekyll (layouts, includes, data files, Markdown posts)
- **CMS:** Decap CMS v3 at `/admin/` with git-gateway backend
- **Hosting:** Netlify (free tier)
- **Forms:** Netlify Forms (contact form, `form-name=contact`)
- **Auth:** Netlify Identity (invite-only, email login)

## Netlify Details
- **Site ID:** `REDACTED-ID`
- **Site name:** `madison-wood`
- **Live URL:** https://madison-wood.netlify.app
- **Admin URL:** https://app.netlify.com/projects/madison-wood
- **Identity instance:** `REDACTED-ID`
- **Git Gateway:** enabled (service slug: `git`)
- **Build hook:** https://api.netlify.com/build_hooks/REDACTED-BUILD-HOOK
- **Contact form ID:** `REDACTED-ID`
- **GitHub repo:** `QAv2/mw-website` (public, branch: `master`)
- **Deploy key ID:** `REDACTED-ID`

## Invited Users
- Madison: `REDACTED-EMAIL`

## Directory Structure
```
_layouts/       default.html, home.html, post.html
_includes/      head.html, nav.html, hero.html, writing-card.html, footer.html
_posts/         Markdown writing pieces (frontmatter: title, date, category, featured)
_photos/        Photo collection entries (frontmatter: title, image, caption, order)
_data/          homepage.yml (hero, featured excerpt, contact intro), about.yml (bio, quote, portrait)
assets/         css/style.css, js/main.js, images/uploads/
admin/          index.html (Decap entry), config.yml (CMS collections)
```

## CMS Collections
- **Writing** (`_posts/`): title, date, category (Story/Reflection/Tribute/Article/Personal Story), featured, body
- **Photos** (`_photos/`): title, image, caption, order
- **Pages** (file-based): About (`_data/about.yml`), Homepage (`_data/homepage.yml`)

## CSS Design System
- **Fonts:** Cormorant Garamond (serif headings), Libre Franklin (sans body)
- **Colors:** `--ink: #1a1612`, `--cream: #fdfbf8`, `--accent: #8b5e3c`, `--parchment: #f7f3ee`
- **Max widths:** `--max-reading: 680px`, `--max-content: 1100px`, `--max-wide: 1320px`

## Useful Commands
```bash
# Trigger a rebuild
curl -X POST https://api.netlify.com/build_hooks/REDACTED-BUILD-HOOK

# Check deploy status
NETLIFY_TOKEN=$(node -e "const c=JSON.parse(require('fs').readFileSync(require('os').homedir()+'/.config/netlify/config.json','utf8')); console.log(Object.values(c.users)[0]?.auth?.token)")
curl -s "https://api.netlify.com/api/v1/sites/REDACTED-ID/deploys?per_page=1" -H "Authorization: Bearer $NETLIFY_TOKEN" | node -p "JSON.parse(require('fs').readFileSync('/dev/stdin','utf8'))[0].state"

# Check form submissions
curl -s "https://api.netlify.com/api/v1/forms/REDACTED-ID/submissions" -H "Authorization: Bearer $NETLIFY_TOKEN"
```

## Notes
- Netlify auth token is stored at `~/.config/netlify/config.json`
- The Netlify API doesn't directly expose invite-only registration toggle — use the `updateServiceInstance` endpoint with `{"config": {"disable_signup": true}}`
- Forms require `ignore_html_forms: false` in site processing settings — set via `updateSite` API
- Build hook deploys work; API-triggered `POST /deploys` may get stuck in "new" state
