# CLAUDE.md — zigbee2mqtt.io

## Project Overview

This repository is the **documentation website** for [Zigbee2MQTT](https://zigbee2mqtt.io), a bridge that connects Zigbee smart home devices to the MQTT protocol. The site is built with **VuePress 2** (a Vue.js-based static site generator for documentation) and is deployed as a static site.

The repo has two distinct concerns:
1. **Hand-written documentation** in `docs/` (installation guides, configuration reference, advanced topics)
2. **Auto-generated device pages** in `docs/devices/` — thousands of Markdown files generated from the `zigbee-herdsman-converters` npm package via scripts in `docgen/`

---

## Setup

**Node version:** 24 (see `.nvmrc`). Use `nvm use` if you have nvm installed.

**Package manager:** `pnpm` (v10.12.1)

```bash
# Install dependencies (use frozen lockfile to stay consistent)
pnpm install --frozen-lockfile
```

---

## Development Commands

```bash
# Dev server — fast, excludes device pages
pnpm dev

# Dev server — includes all device pages (slow, uses 12 GB heap)
pnpm dev:devices

# Dev server with a single specific device page included
npx cross-env INCLUDE_DEVICE=<DEVICE_FILE_NAME> pnpm dev
# Example: npx cross-env INCLUDE_DEVICE=TS011F_plug_1 pnpm dev

# Dev server on a custom port (default is 8080)
npx cross-env DEV_PORT=15080 pnpm dev
```

---

## Build Command

```bash
# Build the full site to the dist/ directory
pnpm build
```

Build output goes to `dist/`. The build uses `--max_old_space_size=12000` due to the large number of device pages.

---

## Docgen (Device Page Generation)

Device pages are auto-generated from the `zigbee-herdsman-converters` package. Run docgen whenever device support data changes or after pulling upstream updates.

```bash
pnpm docgen
```

This runs `docgen/index.ts`, which:
1. Removes obsolete device pages
2. Generates/updates `docs/devices/*.md` (one file per device)
3. Updates the supported-devices list
4. Updates the settings reference page
5. Runs Prettier on all output

**Important:** The `## Notes` section inside each device page is **hand-written** and is preserved across docgen runs. It lives between `<!-- Notes BEGIN -->` and `<!-- Notes END -->` HTML comment markers. Do not edit anything outside that section in `docs/devices/*.md` — it will be overwritten by the next docgen run.

Hand-written notes that are merged into generated pages are kept in `docgen/device_page_notes/` (TypeScript files, not Markdown).

---

## Test Command

```bash
pnpm test
```

Runs five validation checks:
- `check-device-images` — flags devices with missing images
- `check-links` — checks for broken internal links (**requires a prior `pnpm build`**)
- `check-device-image-size` — validates image dimensions
- `check-notes-comment` — ensures Notes sections use correct comment markers
- `check-notes-html-tags` — validates HTML inside Notes sections

---

## Code Formatting

Prettier is enforced via a pre-commit hook (Husky).

```bash
pnpm pretty:write   # Format all files
pnpm pretty:check   # Check formatting without writing
```

Prettier config (`.prettierrc`):
- Single quotes
- Semicolons
- Trailing commas (all)
- Print width: 150
- Tab width: 4
- LF line endings

---

## Folder Structure

```
zigbee2mqtt.io/
├── docs/                          # All documentation content
│   ├── .vuepress/
│   │   ├── components/            # Custom Vue components (Configurator.vue, NetworkKeyConverter.vue)
│   │   └── styles/                # Custom SCSS stylesheets
│   ├── guide/                     # Main user guide (hand-written)
│   │   ├── getting-started/
│   │   ├── installation/
│   │   ├── configuration/
│   │   ├── usage/
│   │   ├── faq/
│   │   └── adapters/
│   ├── devices/                   # Auto-generated device pages — DO NOT EDIT directly
│   ├── advanced/                  # Advanced topics (hand-written)
│   │   ├── zigbee/
│   │   ├── support-new-devices/
│   │   ├── remote-adapter/
│   │   └── more/
│   ├── supported-devices/         # Device compatibility listing page
│   ├── how_tos/                   # How-to guides
│   ├── information/               # General info pages
│   └── images/                    # Images referenced in docs
│
├── docgen/                        # TypeScript scripts for generating device pages
│   ├── index.ts                   # Entry point — runs all generators
│   ├── generate_device.ts         # Generates a single device page
│   ├── generate_settings.ts       # Generates the settings reference
│   ├── generate_supported-devices.ts
│   ├── device_page_exposes.ts     # Templates for device feature tables
│   ├── device_page_options.ts     # Templates for device options sections
│   ├── device_page_notes/         # Hand-written notes merged into device pages
│   ├── tests/                     # Validation test scripts
│   └── utils.ts                   # Shared utilities
│
├── supported-devices-component/
│   └── SupportedDevices.vue       # Vue component for the devices overview page
│
├── public/                        # Static assets (logo, favicons, manuals)
├── vuepress.config.ts             # VuePress configuration (plugins, theme, build)
├── navbar.ts                      # Top navigation bar structure
├── sidebar.ts                     # Sidebar structure per documentation section
├── getBase.ts                     # Base URL helper (differs for develop vs master)
└── package.json
```

---

## Key Configuration Files

| File | Purpose |
|---|---|
| `vuepress.config.ts` | Main VuePress config: theme, plugins, page patterns, Vite options |
| `navbar.ts` | Top navigation links |
| `sidebar.ts` | Per-section sidebar trees |
| `getBase.ts` | Computes the site base URL; sets `isDevelop` flag based on `BRANCH` env var |
| `.prettierrc` | Prettier formatting rules |
| `.nvmrc` | Node.js version pin (24) |

---

## Coding Conventions

- **TypeScript** everywhere in `docgen/` and config files. No `any` unless unavoidable.
- **Vue 3** Composition API for components in `docs/.vuepress/components/` and `supported-devices-component/`.
- **Sass/SCSS** for styles in `docs/.vuepress/styles/`.
- Follow Prettier config strictly — the pre-commit hook will reject non-conforming files.
- Do not add comments to code unless the reason is non-obvious.
- Docgen output files (`docs/devices/*.md`) are machine-generated. Only edit the `## Notes` section within the `<!-- Notes BEGIN -->` / `<!-- Notes END -->` markers.

---

## Instructions for Future Claude Sessions

- **Never edit files in `docs/devices/` directly** except within `<!-- Notes BEGIN -->` / `<!-- Notes END -->` markers. All other content is overwritten by `pnpm docgen`.
- To update device data, run `pnpm docgen` — do not manually update device pages.
- To add or update navigation, edit `navbar.ts` or `sidebar.ts` at the repo root.
- To add a new documentation page, create a `.md` file in the appropriate `docs/` subdirectory and add it to `sidebar.ts`.
- After editing links or adding pages, run `pnpm build && pnpm test` to validate.
- Device notes that apply to a family of devices (not one specific model) belong in `docgen/device_page_notes/` as TypeScript, not in individual device `.md` files.
- The `dev` script excludes device pages for speed. Use `dev:devices` or `INCLUDE_DEVICE=<name>` only when you specifically need to preview a device page.
