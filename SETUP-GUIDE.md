# Madison Wood Website — Setup Guide

This guide walks you through deploying the site on Netlify and setting up the content management system (Decap CMS) so Madison can edit her site from a browser.

---

## What You'll End Up With

- The website live at a Netlify URL (e.g. `madison-wood.netlify.app`)
- A content editor at `yoursite.com/admin` where Madison can:
  - Add, edit, and delete writing pieces
  - Upload and manage photos
  - Edit the About section, homepage text, and featured excerpt
- A contact form that emails submissions to you (no backend needed)
- Automatic deploys — every edit in the CMS triggers a rebuild

---

## Step 1: Push the Repo to GitHub

If the repo isn't already on GitHub:

1. Go to [github.com/new](https://github.com/new) and create a new repository called `mw-website`
2. Set it to **Private** (recommended) or Public
3. Do NOT add a README, .gitignore, or license (the repo already has these)
4. Push:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/mw-website.git
git branch -M main
git push -u origin main
```

---

## Step 2: Connect to Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and sign up / log in (use your GitHub account for easiest setup)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** as the Git provider
4. Authorize Netlify to access your repositories if prompted
5. Select the **mw-website** repository
6. Netlify will auto-detect the build settings from `netlify.toml`. Verify:
   - **Build command:** `jekyll build`
   - **Publish directory:** `_site`
7. Click **"Deploy site"**

Netlify will build and deploy the site. This takes about 1-2 minutes. Once done, you'll get a random URL like `random-name-12345.netlify.app`.

**Optional:** To set a nicer URL, go to **Site settings** → **Domain management** → **Change site name** and pick something like `madison-wood`.

---

## Step 3: Enable Netlify Identity

This is what lets Madison log in to the CMS.

1. In your Netlify dashboard, go to your site
2. Click **"Integrations"** in the top nav
3. Search for **"Identity"** and click **"Enable"**

Alternatively: **Site configuration** → **Identity** → **Enable Identity**

---

## Step 4: Set Registration to Invite-Only

By default, anyone can sign up. Lock it down:

1. Go to **Site configuration** → **Identity** → **Registration preferences**
2. Click **"Edit settings"**
3. Select **"Invite only"**
4. Save

---

## Step 5: Enable Git Gateway

This is what lets the CMS commit changes to GitHub on Madison's behalf.

1. Go to **Site configuration** → **Identity** → **Services**
2. Under **Git Gateway**, click **"Enable Git Gateway"**

That's it — no configuration needed. Netlify handles the GitHub authentication automatically.

---

## Step 6: Invite Madison

1. Go to **Site configuration** → **Identity** → **Users**
2. Click **"Invite users"**
3. Enter Madison's email address
4. Click **"Send"**

She'll receive an email with a link to set her password.

---

## Step 7: Test the CMS

1. Go to `your-site-url.netlify.app/admin/`
2. Click **"Login with Netlify Identity"**
3. Log in with the invited email and password
4. You should see three sections in the sidebar:
   - **Writing** — create and edit posts
   - **Photos** — upload and manage gallery photos
   - **Pages** — edit About and Homepage content

Try creating a test post to verify everything works. After saving, Netlify will automatically rebuild the site (takes ~1 minute), and the new post will appear on the homepage.

---

## Step 8: Set Up Contact Form Notifications

The contact form is already wired up with Netlify Forms. To receive email notifications when someone submits:

1. Go to **Site configuration** → **Forms** → **Form notifications**
2. Click **"Add notification"** → **"Email notification"**
3. Set:
   - **Event:** New form submission
   - **Form:** contact
   - **Email to notify:** Madison's email (or yours)
4. Save

You can also view all submissions in the Netlify dashboard under **Forms**.

---

## Optional: Custom Domain

To use a custom domain (e.g. `madisonwood.com`):

1. Go to **Site configuration** → **Domain management** → **Add custom domain**
2. Enter the domain name
3. Netlify will provide DNS settings — update your domain registrar's DNS records accordingly
4. Netlify automatically provisions a free SSL certificate

---

## How Madison Uses the CMS

Share these instructions with Madison:

### Adding a New Writing Piece

1. Go to `yoursite.com/admin/`
2. Log in
3. Click **"Writing"** in the sidebar
4. Click **"New Writing"**
5. Fill in:
   - **Title** — the piece's title
   - **Date** — publication date
   - **Category** — choose from Story, Reflection, Tribute, Article, or Personal Story
   - **Featured** — toggle on if this should be highlighted
   - **Body** — write or paste your piece (supports formatting: bold, italic, headings, links)
6. Click **"Publish"** (or "Save" for drafts)
7. The site rebuilds automatically in about 1 minute

### Adding Photos

1. Go to `yoursite.com/admin/`
2. Click **"Photos"** in the sidebar
3. Click **"New Photos"**
4. Upload an image, add a caption, and set the display order
5. Publish

### Editing the Homepage or About Section

1. Go to `yoursite.com/admin/`
2. Click **"Pages"** in the sidebar
3. Select **"Homepage"** or **"About"**
4. Edit the text fields
5. Publish

---

## Troubleshooting

**CMS shows a blank page or error at `/admin/`:**
- Make sure Netlify Identity is enabled (Step 3)
- Make sure Git Gateway is enabled (Step 5)
- Try clearing browser cache and refreshing

**Changes don't appear on the site:**
- Netlify rebuilds take 1-2 minutes after a CMS publish
- Check **Deploys** in the Netlify dashboard for build errors

**"Unable to authenticate" when logging in:**
- Verify the user was invited (Step 6) and has set their password
- Check that registration is set to "Invite only" and the email matches

**Contact form submissions aren't received:**
- Verify form notifications are set up (Step 8)
- Check the **Forms** section in the Netlify dashboard — submissions appear there even without email notifications

**Build fails on Netlify:**
- Check the deploy log in **Deploys** → click the failed deploy
- Common fix: ensure the GitHub repo has the latest code pushed
