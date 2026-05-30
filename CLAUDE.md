# mw-website — Madison Wood Writer Portfolio

## Architecture
- **SSG:** Jekyll (layouts, includes, data files, Markdown posts)
- **CMS:** Decap CMS v3 at `/admin/` with git-gateway backend
- **Hosting:** Netlify (free tier)
- **Forms:** Netlify Forms (contact form, `form-name=contact`)
- **Auth:** Netlify Identity (invite-only, email login)
- **GitHub repo:** `QAv2/mw-website` (public, branch: `master`)

> **Operational details** (Netlify site/build-hook/form IDs, invited users, API
> commands) live in the untracked, gitignored **`OPERATIONS.local.md`** — they are
> deliberately kept out of this public repo. See that file for deploy/rebuild commands.

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
