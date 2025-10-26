# ⚡ Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Start Development Server
```bash
npm run dev
```
Open browser to: **http://localhost:5173/**

### Step 2: Customize Content
Edit these files first:

#### **Update Contact Info** (Most Important!)
1. `src/components/Contact.jsx` - Lines 22-26
2. `src/components/Plans.jsx` - Line 61

Replace:
- WhatsApp number
- Email address
- Instagram handle

#### **Replace Images**
1. `src/components/Hero.jsx` - Hero background image
2. `src/components/About.jsx` - Portrait photo
3. `src/components/Testimonials.jsx` - Client photos

#### **Edit Text Content**
Look for `EDIT THIS:` comments in each component file:
- Hero heading and subheading
- About bio and core values
- Plan prices and features
- Testimonials
- Motivational quotes

### Step 3: Deploy
```bash
# Build for production
npm run build

# Deploy to Vercel or Netlify (see README.md)
```

---

## 📝 Essential Files to Edit

| Priority | File | What to Change |
|----------|------|----------------|
| 🔴 **HIGH** | `src/components/Contact.jsx` | WhatsApp, Email, Instagram |
| 🔴 **HIGH** | `src/components/Plans.jsx` | WhatsApp number, prices |
| 🟡 **MEDIUM** | `src/components/Hero.jsx` | Background image, text |
| 🟡 **MEDIUM** | `src/components/About.jsx` | Portrait, bio text |
| 🟡 **MEDIUM** | `src/components/Testimonials.jsx` | Client photos, quotes |
| 🟢 **LOW** | `tailwind.config.js` | Color scheme |
| 🟢 **LOW** | `index.html` | SEO metadata |

---

## 🎨 Where Everything Lives

```
src/
├── components/
│   ├── Hero.jsx         ← Full-screen landing section
│   ├── Navbar.jsx       ← Top navigation bar
│   ├── About.jsx        ← About Nicole section
│   ├── Plans.jsx        ← Pricing cards
│   ├── Testimonials.jsx ← Client reviews
│   ├── Contact.jsx      ← Contact info & CTAs
│   └── Footer.jsx       ← Bottom footer
├── App.jsx              ← Combines all components
└── index.css            ← Global styles & fonts
```

---

## 🔧 Common Tasks

### Change Background Image
**File:** `src/components/Hero.jsx` (Line ~30)
```javascript
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)'
```

### Update Pricing
**File:** `src/components/Plans.jsx` (Lines ~27-55)
```javascript
price: '$99',  // ← Change this
```

### Change Colors
**File:** `tailwind.config.js` (Lines 9-21)
```javascript
primary: {
  50: '#f5f5f5',  // ← Edit these hex values
  900: '#0a0a0a',
}
```

### Update Bio
**File:** `src/components/About.jsx` (Lines ~53-70)
```javascript
<p className="text-lg text-primary-600 mb-8 leading-relaxed">
  YOUR BIO TEXT HERE
</p>
```

---

## ✅ Pre-Launch Checklist

Before deploying, make sure you've:

- [ ] **Replaced WhatsApp number** (2 places)
- [ ] **Updated email address**
- [ ] **Updated Instagram handle**
- [ ] **Changed all placeholder images**
- [ ] **Updated bio text**
- [ ] **Set correct pricing**
- [ ] **Tested all contact links**
- [ ] **Checked mobile responsiveness**

---

## 🆘 Need Help?

- **Detailed Guide**: See `CUSTOMIZATION_GUIDE.md`
- **Full Documentation**: See `README.md`
- **VS Code**: Each file has helpful comments

---

## 🎉 That's It!

**Current Status:** ✅ Website is running at http://localhost:5173/

**Next:** Customize the content and deploy! 🚀
