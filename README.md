# Rishabh Dhote — Developer Portfolio

A responsive, dark futuristic developer portfolio built with plain HTML, CSS and JavaScript. It is ready for GitHub and Netlify deployment with no build step.

## Files
- `index.html` — portfolio sections and profile links
- `style.css` — responsive layout, visual design and animations
- `script.js` — mobile navigation and current year
- `netlify.toml` — Netlify publish configuration

## Run locally
Open `index.html` in your browser. For a local server, use VS Code Live Server or run `python3 -m http.server 8000` from this folder, then visit `http://localhost:8000`.

## Deploy to Netlify (manual upload)
1. Extract this ZIP.
2. Open <https://app.netlify.com/drop>.
3. Drag the **extracted folder** (the folder that directly contains `index.html`, `style.css`, and `script.js`) into the drop area.
4. Wait for the deployment to finish and open the generated URL.

Do not upload the ZIP file itself to the drag-and-drop page. Do not upload a parent folder that hides `index.html` one level deeper.

## Deploy from GitHub to Netlify
1. Create a GitHub repository, for example `rishabh-portfolio`.
2. Upload these files to the repository root (so `index.html` is at the root).
3. In Netlify choose **Add new site → Import an existing project** and select the repository.
4. Set **Build command** to blank and **Publish directory** to `.` (or leave the default if it correctly detects the root).
5. Deploy.

The included `netlify.toml` sets the publish directory to the repository root.

## Deploy to GitHub Pages
1. Push these files to a GitHub repository.
2. In repository settings, open **Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.

## Personalization notes
- The birth date and education details are based on details supplied by Rishabh.
- LinkedIn may block automated profile access; no unverified work history or certificates have been invented.
- GitHub stats and contribution widgets use public third-party endpoints and may occasionally be unavailable; the rest of the portfolio still works.
- The Emotion Detection AI card links to the GitHub profile because a specific repository URL was not provided.
