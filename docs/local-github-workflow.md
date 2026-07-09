# Local Editing and GitHub Pages Workflow

This folder currently contains the website files, but it is not a Git repository yet. GitHub Desktop can absolutely handle the local edit -> commit -> push -> GitHub Pages deployment loop once the folder is connected to the GitHub repository.

## Recommended GitHub Desktop Setup

Use this path if the GitHub repository already exists online.

1. Open GitHub Desktop.
2. Choose `File -> Clone Repository`.
3. Select `itsleol/itsleol.github.io`.
4. Clone it to a clean local folder.
5. Compare this current folder with the cloned folder and copy any newer local edits into the cloned folder.
6. In GitHub Desktop, review changes, write a short commit message, click `Commit to main`, then click `Push origin`.
7. GitHub Pages will rebuild from the pushed branch.

This is safer than initializing Git inside a downloaded ZIP folder because it preserves the repository history and avoids unrelated-history push problems.

## If You Want to Connect This Exact Folder

Only do this if you are sure the remote repository is `https://github.com/itsleol/itsleol.github.io.git` and you understand that the first push may fail if histories differ.

```bash
git init -b main
git remote add origin https://github.com/itsleol/itsleol.github.io.git
git add .
git commit -m "Update personal website"
git pull --rebase origin main
git push -u origin main
```

If `git pull --rebase origin main` reports unrelated histories, stop and use the GitHub Desktop clone workflow above.

## Local Preview

GitHub Pages currently builds with Ruby 3.3.4, so install Ruby 3.3.4 first. If you use `rbenv`, the included `.ruby-version` file lets the project select the right version automatically.

Install dependencies once:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

Run the local Jekyll server:

```bash
bundle exec jekyll serve -l -H localhost
```

Then open:

```text
http://localhost:4000
```

When you edit Markdown, HTML, or SCSS files, the server rebuilds the site. If you edit `_config.yml`, restart the server.
