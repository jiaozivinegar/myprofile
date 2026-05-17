# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for 杨美龙 (Yang Meilong), a visual designer specializing in 3D rendering, AI-generated visuals, and motion design for 3C products. The site is a single-page static site written entirely in Chinese.

## Architecture

Single `index.html` file with:
- **Inline CSS** — all styles embedded in `<style>`, no external stylesheets. Uses a black-and-white minimalist aesthetic with system fonts (PingFang SC, etc.).
- **Inline JavaScript** — image lightbox popup logic at the bottom of the file.
- **Static assets** — `images/` directory with subfolders: `3d/` (rendered images), `ai/` (AI-generated images), `video/` (MP4 clips), and `bg.jpg` (hero background).

No build tools, frameworks, or package managers. Open `index.html` directly in a browser to preview.

## Key Sections (by HTML id)

- `#render` — 3D rendering gallery (33 images in `images/3d/`)
- `#ai` — AI visual creations (5 images in `images/ai/`)
- `#motion` — Motion design videos (4 MP4s in `images/video/`)
- `#about` — Bio, creative positioning, and process
- `#skill` — Workflow and skills grid (4 columns: Strategy → Concept → Development → Delivery)
- `#contact` — Contact info and job-seeking direction

## Development

- Preview: open `index.html` in a browser, or use any local static server (e.g. `npx serve .` or VS Code Live Server)
- Responsive breakpoints: 768px (tablet) and 480px (mobile), defined at the bottom of the `<style>` block
- The lightbox (`#imgPop`) supports click-to-open on `.img-grid img` and close via click/ESC

## Conventions

- All content is in Chinese; keep any text additions in Chinese
- Images follow numbered naming: `1.jpg`, `2.jpg`, etc.
- Videos are MP4 with `autoplay loop muted playsinline` attributes
