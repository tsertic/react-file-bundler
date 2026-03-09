# 📦 File Bundler

A lightweight React app that merges multiple source files into a single TXT document.

Upload individual files or entire folders — the app reads their contents and bundles everything into one downloadable summary with file names, paths, and content.

**Live demo:** [react-file-bundler](https://react-file-bundler-git-master-tsertics-projects.vercel.app/)

## How It Works

1. Click **Upload Files** or **Upload Folder**
2. The app reads and lists all supported files
3. Click **Generate TXT** to download the bundled summary

Output format:

```
Name: App.java
Path: src/main/App.java
Content:
public class App { ... }
---------------------

Name: index.html
Path: frontend/index.html
Content:
<!DOCTYPE html>...
---------------------
```

## Supported File Types

`.java` `.cs` `.js` `.jsx` `.ts` `.tsx` `.html` `.css` `.axvw` `.json` `.xml` `.py` `.rb` `.go` `.rs` `.cpp` `.c` `.h` `.sql` `.sh` `.yaml` `.yml` `.md` `.txt` `.vue` `.svelte` `.php` `.swift` `.kt` `.scala` `.groovy` `.gradle`

## Setup

```bash
npm create vite@latest file-bundler -- --template react
cd file-bundler
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx
├── components/
│   ├── Header.jsx
│   ├── UploadButtons.jsx
│   ├── FileList.jsx
│   └── GenerateButton.jsx
├── hooks/
│   └── useFileUpload.js
├── styles/
│   └── theme.js
└── utils/
    ├── constants.js
    ├── fileHelpers.js
    └── txtGenerator.js
```

## Tech Stack

React + Vite. No backend — everything runs in the browser using the FileReader API.
