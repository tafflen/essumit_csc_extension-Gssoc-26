# Contributing to CSC Extension

Thank you for your interest in contributing! 🎉
This guide will help you get started quickly.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)
- [Development Workflow](#development-workflow)
- [Coding Guidelines](#coding-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Getting Help](#getting-help)

---

## Prerequisites

Before you begin, make sure you have:

| Tool       | Version  | Install |
|------------|----------|---------|
| Node.js    | 18.x+    | [nodejs.org](https://nodejs.org) |
| Git        | 2.x+     | [git-scm.com](https://git-scm.com) |
| Chrome     | Latest   | [chrome](https://www.google.com/chrome/) |
| Python     | 3.8+     | [python.org](https://www.python.org) (for scripts) |

---

## Project Structure

essumit_csc_extension/
├── csc_extension_dashboard_frontend/  # React dashboard frontend
├── extension_frontend/                # Chrome extension UI
├── extension-pack - Copy/             # Extension pack files
├── icons/                             # Extension icons
├── knowledge_base/                    # Knowledge base files
├── scripts/                           # Utility scripts
├── background.js                      # Extension background service worker
├── content.js                         # Content script
├── panel.html                         # Extension panel HTML
├── panel.js                           # Extension panel logic
├── manifest.json                      # Chrome extension manifest
├── serviceConfig.js                   # Service configuration
├── sessionManager.js                  # Session management
├── aiAssistant.js                     # AI assistant logic
├── modelSync.js                       # Model sync logic
├── firestore.rules                    # Firebase security rules
└── README.md                          # Project readme

---

## Local Setup

### Step 1 — Fork & Clone

1. Click **Fork** on the top right of the repository.
2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/essumit_csc_extension.git
cd essumit_csc_extension
```

3. Add upstream remote:

```bash
git remote add upstream https://github.com/surajmeruva0786/essumit_csc_extension.git
```

### Step 2 — Install Dependencies

For the dashboard frontend:
```bash
cd csc_extension_dashboard_frontend
npm install
npm run dev
```

For the extension frontend:
```bash
cd extension_frontend
npm install
npm run dev
```

### Step 3 — Load Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer Mode** (top right toggle)
3. Click **Load unpacked**
4. Select the root folder of the project
5. The extension should now appear in your Chrome toolbar

### Step 4 — Firebase Setup

Refer to `FIREBASE_SETUP.md` for setting up Firebase credentials needed for the project.

### Step 5 — Keep Your Fork Updated

Before starting any new work:
```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## Development Workflow

### 1. Find or Create an Issue

- Browse open issues before starting work
- Comment on an issue to get assigned before working on it
- For new features, discuss in an issue first

### 2. Create a Branch

```bash
git checkout main
git pull upstream main
git checkout -b fix/issue-1-dropdown-navigation
```

Branch naming:
```bash
git checkout -b feat/add-new-feature      # new feature
git checkout -b fix/issue-1-bug-name      # bug fix  
git checkout -b docs/add-contributing     # documentation
git checkout -b chore/update-deps         # maintenance
```

### 3. Make Your Changes

- Keep changes focused — one issue per PR
- Test your changes in Chrome before submitting
- Make sure the extension loads without errors

### 4. Commit Your Changes

Use clear, descriptive commit messages:

```bash
# Good
git commit -m "fix: wire up My Profile navigation in admin dropdown"
git commit -m "feat: add dark mode toggle to panel"
git commit -m "docs: add CONTRIBUTING.md"

# Bad
git commit -m "fix stuff"
git commit -m "WIP"
git commit -m "changes"
```

### 5. Push & Open a Pull Request

```bash
git push origin your-branch-name
```

Then go to GitHub and click **"Compare & pull request"**.

---

## Coding Guidelines

### JavaScript / TypeScript
- Use `const` and `let` — never `var`
- Use meaningful variable and function names
- Add comments for complex logic
- Handle errors gracefully with try/catch

### Chrome Extension Specific
- Follow [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/) guidelines
- Minimize permissions requested in `manifest.json`
- Use `chrome.storage` instead of `localStorage` where possible
- Always handle async Chrome API calls properly

### Python Scripts
- Follow PEP 8 style guide
- Add docstrings to functions
- Use type hints where possible

---

## Submitting a Pull Request

Before submitting, make sure:

- [ ] Your branch is up to date with `main`
- [ ] The extension loads without errors in Chrome
- [ ] You have tested your changes manually
- [ ] Your commit messages are clear and descriptive
- [ ] Your PR is linked to an issue (`Closes #1`)
- [ ] Your PR description explains what, why, and how
- [ ] No unrelated changes are included

**PR Description Template:**

What
Brief description of what changed.
Why
Why this change was needed.
How
How you implemented the fix/feature.
Testing
Steps to test your changes.
Closes #ISSUE_NUMBER

---

## Getting Help

- 💬 Comment on the issue you're working on
- 📧 Reach out to the maintainer via GitHub

---

## First Time Contributing?

1. ⭐ Star the repo
2. 📖 Read this guide fully  
3. 🔍 Browse open issues
4. 💬 Comment on an issue to get assigned
5. 🍴 Fork and clone the repo
6. 🔧 Make your fix
7. 🚀 Open a PR!

_Welcome to the project! Every contribution matters._ 🎉