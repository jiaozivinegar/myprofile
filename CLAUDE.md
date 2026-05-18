# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for 杨美龙 (Yang Meilong), a visual designer specializing in 3D rendering, AI-generated visuals, and motion design for 3C products. The site is a single-page static site written entirely in Chinese.

## Architecture

Single `index.html` file with:
- **Inline CSS** — all styles embedded in `<style>`, no external stylesheets. Uses a black-and-white minimalist aesthetic with system fonts (PingFang SC, etc.).
- **Inline JavaScript** — image/video lightbox popup logic, IntersectionObserver-based video lazy loading.
- **Static assets** — `images/` directory with subfolders: `3d/` (33 rendered images), `ai/` (5 AI-generated images), `video/` (4 MP4 loops + 1 cover video).

No frameworks. `package.json` and `build.js` exist **only for EdgeOne deployment** — they copy static files to `dist/`.

## Key Sections (by HTML id)

- `#render` — 3D rendering gallery (33 images in `images/3d/`)
- `#ai` — AI visual creations (5 images in `images/ai/`)
- `#motion` — Motion design videos (4 MP4s in `images/video/`)
- `#about` — Bio, creative positioning, and process
- `#skill` — Workflow and skills grid (4 columns: Strategy → Concept → Development → Delivery)
- `#contact` — Contact info and job-seeking direction

## Assets

### Images
- Numbered naming: `1.jpg`, `2.jpg`, etc.
- All images in galleries have `loading="lazy" decoding="async"`.

### Videos
- Short MP4 loops with `autoplay loop muted playsinline` attributes.
- Grid videos use `data-src` + IntersectionObserver for lazy loading; source swaps to `src` on viewport entry.
- Videos in `.video-grid` are clickable and open in the same lightbox as images.
- Cover video (`images/video/cover_compressed.mp4`) is used as the hero background.
- Backup originals live in `images/video/_backup/` (excluded from `dist/` via build.js filter).

### PDF Portfolio
- `portfolio.html` is a print-optimized A4 layout for generating a PDF version of the portfolio.
- `pdf_assets/strips/` contains 4-frame horizontal filmstrips extracted from the motion videos.
- Generate PDF: open `portfolio.html` in browser → print → save as PDF (or use Edge headless).

## Development

- Preview: open `index.html` in a browser, or use any local static server (e.g. `npx serve .` or VS Code Live Server)
- Responsive breakpoints: 768px (tablet) and 480px (mobile), defined at the bottom of the `<style>` block
- Lightbox (`#imgPop`) supports click-to-open on `.img-grid img` and `.video-grid video`; close via click background or ESC

## Build / Deploy

- `npm run build` runs `build.js`, which copies `index.html`, `portfolio.html`, `images/`, and `pdf_assets/` into `dist/`.
- The `dist/` directory is committed to the repo for zero-config deployment on platforms that expect a build output.
- `build.js` filters out `node_modules`, `.git`, `dist`, `_backup`, `frames`, and files with `视频节点` in the name.

## Conventions

- All content is in Chinese; keep any text additions in Chinese
- Images follow numbered naming: `1.jpg`, `2.jpg`, etc.
- Videos are MP4 with `autoplay loop muted playsinline` attributes
- When compressing new videos, use ffmpeg with `-an` (remove audio), `-crf 28`, max 1200px dimension, and 30fps
