# Muse & Bloom website — your step-by-step guide

You don't need to know how to code. You only ever edit **one file**: `js/content.js`.

## What's in this folder

| File | What it is | Do you edit it? |
|---|---|---|
| `index.html` | Home page | Rarely |
| `podcast.html` | Podcast page | Rarely |
| `archive.html` | The Archive page (In Full Bloom) | Rarely |
| `reads.html` | Weekly Reads page | Rarely |
| `js/content.js` | **All your words, links, episodes, articles and women** | **Yes — this one** |
| `css/style.css` | Colours, fonts and layout | Only to change colours |
| `js/main.js` | The engine that builds the pages | No |
| `images/` | Your Muse & Bloom logos (and any photos you add) | Add files here |
| `fonts/` | Rethink Sans, your brand body font | No |

---

## Part 1 — See the site on your computer (10 minutes)

1. Unzip `muse-and-bloom.zip` somewhere easy, like your Documents folder.
2. Open **VS Code** → **File → Open Folder…** → choose the `muse-and-bloom` folder.
3. Install the preview tool: click the **Extensions** icon on the left (four little squares), search **Live Server** (by Ritwick Dey), click **Install**.
4. In the file list on the left, right-click `index.html` → **Open with Live Server**. Your browser opens the site.
5. Leave it open. Every time you save a file (**Ctrl+S** on Windows, **Cmd+S** on Mac), the page refreshes by itself.

## Part 2 — Check your links (2 minutes)

Your Spotify, Substack and Instagram (@muse.grow) links are already filled in at the top of `js/content.js`.
When the podcast goes live on **Apple Podcasts** or **YouTube**, paste those links into `apple: ""` and `youtube: ""`.
Until then, the site shows a quiet "soon" label instead of a broken button.

## Part 3 — Put the site on GitHub (15 minutes)

1. Go to **github.com** and sign in.
2. Click the **+** at the top right → **New repository**.
3. Name it `muse-and-bloom`, choose **Public**, tick **Add a README file**, click **Create repository**.
4. In your new repository, click **Add file → Upload files**.
5. Open your `muse-and-bloom` folder on your computer, select **everything inside it** (the four `.html` files and the `css`, `js` and `images` folders) and drag it onto the GitHub page.
6. Scroll down, type a message like `First version of the site`, click **Commit changes**.

## Part 4 — Make it live on the internet, for free (5 minutes)

1. In your repository, click **Settings** (top bar) → **Pages** (left menu).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)** → **Save**.
4. Wait 1–3 minutes and refresh. A link appears at the top, like
   `https://YOUR-USERNAME.github.io/muse-and-bloom/`. That's your live website. Share it!

## Part 5 — Updating every week (5 minutes)

**New weekly reads:**
1. Open `js/content.js`, find section **3. WEEKLY READS**.
2. Copy one whole week block, from `{` with `week:` down to its closing `},`
3. Paste it at the **top** of the list (just under `window.WEEKLY_READS = [`).
4. Change the week, the note, and each article's title, source, link (`url`), tag and one-line "why".
5. Save, check it in Live Server, then upload the new `content.js` to GitHub:
   in your repository open the `js` folder → **Add file → Upload files** → drop in `content.js` → **Commit changes**. The live site updates in about a minute.

**New podcast episode:** same idea in section **2. PODCAST EPISODES**, newest at the top. Copy the episode link from Spotify (**⋯ → Share → Copy link**).

**New Substack letter:** add it to the top of section **3. LETTERS**. The home page shows the latest three.

**New woman in In Full Bloom:** copy one block in section **5** and change the details. Always include a `source` link. The archive is ordered as listed, so Nigerian women stay first.

> If the page goes blank after an edit, a comma or quote mark is almost always missing. Compare your new block with the one above it.

## Part 6 — Later, when you're ready

- **Your own domain** (e.g. `museandbloom.com`): buy it from a registrar like Namecheap or a Nigerian registrar like Whogohost, then in GitHub **Settings → Pages → Custom domain** type it in and follow GitHub's instructions for the DNS settings.
- **Getting on Apple Podcasts and YouTube:** if you host the show on Spotify for Creators, copy your show's **RSS feed** from its settings and submit it at **podcastsconnect.apple.com** (Apple) and in **YouTube Studio → Create → New podcast** (YouTube). Then paste those links into `content.js`.

## Your photos

The two photo frames on the home page are waiting for you. Save two photos into the `images` folder named **hero-1.jpg** and **hero-2.jpg** and they appear automatically. Until then the frames show a soft "your photo here" note. Keep photos under 500 KB (squoosh.app shrinks them for free).

To give a woman in the archive a photo (with her permission), save it in `images` and set `photo: "images/her-name.jpg"` on her entry in `content.js`.

## Colours and fonts

Headlines use DM Serif Display, little handwritten notes use Caveat, and everything else uses Rethink Sans from your brand kit. The colours are your Muse & Bloom palette (Cream, Blush, Sky, with pops of Lime and Tangerine) and live at the top of `css/style.css` under `:root`. Change one there and it changes everywhere.
