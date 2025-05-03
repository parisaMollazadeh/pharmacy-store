# 💊 Pharmacy Shop – Next.js / TypeScript / Tailwind

## 🚀 Technologies

- **Next.js 15** (Page Router with ISR)
- **React 19**
- **TypeScript** with strict typing (no `any`)
- **Tailwind CSS** (RTL support + professional custom theme)
- **ESLint** (max 100 lines per file, strict rules)
- **json-server** (mock API with pagination support)

---

## 📁 Project Structure

```
src/
├── api/               # API logic abstraction
├── components/        # UI components (ProductCard, Header, CartBadge...)
├── context/           # Cart context provider (React context API)
├── layouts/           # App layout with dynamic header
├── pages/
│   ├── index.tsx             # Redirect to /product-list/1
│   ├── cart.tsx              # Cart page
│   └── product-list/
│       ├── [page].tsx        # Paginated product list
│       └── index.tsx         # Redirect to first page
├── styles/
│   └── globals.css
├── types/
│   └── medicine.ts           # Type for Medicine
├── utils/
│   └── price.ts              # Format price utility
```

---

## ✅ Implemented Features

- Paginated medicine list (`/product-list/[page]`) using ISR
- Shopping cart with full item info (name, price, image)
- Cart context with add/remove/clear/getTotalPrice methods
- Responsive and modular UI components
- Fixed dynamic header (`menu` or `back`) with shadow
- Clean UI layout with IRANSans font and custom Tailwind theme
- Redirect logic for `/` and `/product-list` to default page

---

## 🔧 Mock API with json-server

Install:
```bash
npm install --save-dev json-server
```

Run:
```bash
npx json-server --watch db.json --port 3001
```

Test:
```bash
curl -H "Accept: application/json" http://localhost:3001/medicines?_page=2&_limit=4
```

Make sure `X-Total-Count` is included in the response header.

---

## 🔄 Git Flow

### Main Branches:
- `master`: production-ready code
- `develop`: development base branch

### Feature Branch:
```bash
git checkout -b feature/your-feature-name
# work, commit, and merge into develop
```

### Bugfix Branch:
```bash
git checkout -b bugfix/your-bug-name
# fix, commit, and merge into develop
```

### Release:
```bash
git checkout master
git merge develop
git tag -a v1.0.0 -m "Initial release"
```

---

## 🧪 ESLint Rules

- Max 100 lines per file
- No use of `any`
- Enforce SOLID principles

---

## 📜 Script Commands

```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "serve": "json-server --watch db.json --port 3001"
}
```

### 💻 Dev Server
```bash
npm run dev
```

### 🏗️ Build for Production
```bash
npm run build
```

### 🚀 Start Production Server
```bash
npm run start
```

### 🔍 Lint Check
```bash
npm run lint
```

### 🧪 Run Mock API
```bash
npm run serve
```

---

## ▶️ Getting Started

Follow these steps to run the project locally:

1. **Clone the repo**
```bash
git clone https://github.com/your-username/pharmacy-shop.git
cd pharmacy-shop
```

2. **Install dependencies**
```bash
npm install
```

3. **Run mock API** (in a separate terminal tab)
```bash
npm run serve
```

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to access the app.

---

## 👨‍💻 Developed by

Parisa Mollazadeh – Frontend Developer :)
