# Handloom Waste Marketplace - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Etsy**: Artisan marketplace aesthetic with warm, handcrafted feel and trust indicators
- **Airbnb**: Clean product cards, generous whitespace, storytelling through imagery
- **Shopify Storefronts**: Proven e-commerce patterns for product browsing and checkout

**Core Design Principles:**
1. **Celebrate Craft Heritage**: Honor the traditional handloom artistry through rich imagery and tactile visual elements
2. **Mobile-First Accessibility**: Optimize for rural users with limited digital literacy - large touch targets, simple navigation, clear hierarchy
3. **Trust & Transparency**: Build confidence through verified seller badges, secure payment indicators, and clear product information
4. **Sustainability Storytelling**: Weave eco-impact messaging throughout the experience, not just in a dashboard

## Typography

**Primary Font Stack:**
- **Headings**: Inter (Google Fonts) - 700 weight for primary headings, 600 for subheadings
- **Body Text**: Inter (Google Fonts) - 400 weight for regular text, 500 for emphasis
- **Accent/Traditional Elements**: Playfair Display (Google Fonts) - 600-700 weight for storytelling sections and heritage callouts

**Type Scale (Mobile-First):**
- Hero Headline: text-4xl md:text-6xl (36px → 60px)
- Section Headers: text-3xl md:text-5xl (30px → 48px)
- Card Titles: text-xl md:text-2xl (20px → 24px)
- Body Text: text-base md:text-lg (16px → 18px)
- Supporting Text: text-sm md:text-base (14px → 16px)
- Labels/Meta: text-xs md:text-sm (12px → 14px)

**Line Height:**
- Headings: leading-tight (1.25)
- Body: leading-relaxed (1.75)
- Captions: leading-normal (1.5)

## Layout System

**Spacing Primitives** - Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24:
- Micro spacing (within components): p-2, p-4, gap-2
- Component padding: p-4, p-6, p-8
- Section padding: py-12 md:py-20, py-16 md:py-24
- Container gaps: gap-6, gap-8, gap-12

**Grid System:**
- Product Cards: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Feature Sections: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Dashboard Stats: grid-cols-2 lg:grid-cols-4

**Container Widths:**
- Full-width sections: max-w-7xl mx-auto px-4 md:px-6
- Content sections: max-w-6xl mx-auto
- Product detail: max-w-5xl mx-auto
- Form containers: max-w-2xl

**Touch Targets** (Critical for mobile):
- Minimum button height: h-12 (48px)
- Card tap areas: min-h-16 (64px)
- Navigation items: h-14 (56px)

## Component Library

### Navigation
**Mobile Header:**
- Fixed top navigation with hamburger menu, logo center, cart/profile icons right
- Bottom navigation bar for primary actions (Home, Browse, Sell, Profile)
- Sticky search bar below header on browse pages

**Desktop Header:**
- Horizontal navigation with logo left, primary links center, auth/cart right
- Mega-menu dropdown for category browsing
- Persistent search bar integrated into header

### Product Cards (Marketplace Listings)
**Standard Card Structure:**
- Aspect ratio 4:3 product image with rounded corners (rounded-lg)
- Eco-badge overlay (top-left): "Handloom" or "Verified Weaver"
- Product title (2-line truncate)
- Material tags (fabric type, color) as small pills
- Quantity available + unit price
- Weaver name with location
- Heart icon (wishlist) top-right
- Hover state: Subtle lift with shadow-lg
- Card padding: p-4, gap-3

### Hero Section
**Home Page Hero:**
- Full-width background: Warm, earthy tone or subtle textile pattern
- Large hero image (right side on desktop): Hands weaving on traditional loom or colorful yarn bundles
- Left-aligned content: Headline + supporting text + dual CTAs
- Mobile: Stacked layout with image above content
- Height: min-h-[600px] md:min-h-[700px]
- CTAs with blurred backgrounds (backdrop-blur-sm bg-white/20) if over image

### Impact Dashboard
**Eco-Metrics Display:**
- Large numerical stats in grid layout
- Animated counters showing waste diverted (kg), transactions, artisans supported
- Visual elements: Progress circles, bar charts using simple SVG illustrations
- Celebratory micro-copy emphasizing environmental impact
- Card-based layout with gentle shadows

### Forms & Input Fields
**Consistent Implementation:**
- Labels: text-sm font-medium mb-2
- Input fields: h-12, px-4, rounded-lg, border with focus ring
- Textareas: min-h-32, p-4
- File upload: Drag-drop zone with dashed border, image preview thumbnails
- Error states: Red accent with descriptive text below field
- Success states: Green checkmark with confirmation message

### Buttons
**Primary Action:**
- Large touch-friendly: h-12 px-8 rounded-lg
- Font: font-semibold text-base
- Icon + text combinations where appropriate (Heroicons)

**Secondary Action:**
- Outlined style with border-2
- Same height as primary for consistency

**Icon Buttons:**
- Square: w-12 h-12 with icon centered
- Used for wishlist, share, menu toggles

### Product Detail Page
**Layout Structure:**
- Image gallery (left 60%): Primary image large with thumbnail carousel below
- Product info (right 40%): Title, weaver info, material specs, quantity selector, price, add to cart
- Mobile: Stacked with image carousel top
- Tabs below fold: Description, Materials, Weaver Story, Reviews
- Related products carousel at bottom

### Shopping Cart & Checkout
**Cart Summary:**
- Line items with thumbnail, title, quantity selector, remove option
- Sticky order summary sidebar (desktop)
- Clear pricing breakdown: Subtotal, shipping, total
- Trust badges near payment section
- Progress indicator for checkout steps

### Profile Pages
**Weaver Dashboard:**
- Profile header with verification badge, photo, bio
- Tabs: Active Listings, Sold Items, Analytics, Settings
- Quick stats cards: Total sales, active listings, rating
- Listing management table with inline edit options

**Buyer Profile:**
- Purchase history with order status
- Saved items/wishlist grid
- Delivery addresses management
- Impact tracker showing personal contribution

## Images

### Hero Images
**Homepage:**
- Large hero image: Close-up of weaver's hands working on traditional loom with vibrant threads - warm, inviting, authentic
- Position: Right side on desktop (50%), full-width on mobile above content
- Treatment: Subtle vignette to ensure text readability

**About/Impact Pages:**
- Wide banner: Rural weaving community, showcasing artisans at work
- Used as section backgrounds with overlay for text readability

### Product Images
**Listing Cards:**
- High-quality photos of yarn bundles, fabric scraps showing texture, color, and scale
- Consistent aspect ratio 4:3, well-lit, neutral backgrounds or lifestyle shots
- Multiple angles in product detail galleries

### Supporting Imagery
**Feature Sections:**
- Icons from Heroicons for features (secure payment, tracking, verified sellers)
- Illustrative photos showing: yarn textures, color palettes, weaving process
- Before/after impact visuals (waste → repurposed products)

**Trust Elements:**
- Weaver profile photos (authentic, smiling portraits)
- Certification badges and awards
- Customer testimonial photos

### Eco-Impact Visuals
- Simple illustrated infographics showing waste reduction journey
- Progress visualization using organic shapes and natural motifs
- Celebratory imagery when milestones reached

## Mobile-First Considerations

**Navigation Priority:**
- Bottom tab bar for core actions (always accessible)
- Simplified top navigation (logo + essentials)
- Full-screen mobile menu with large tap targets

**Content Adaptation:**
- Single-column layouts default, 2-column only where truly beneficial
- Generous vertical spacing (py-8 to py-12) between sections
- Image-first product cards (image dominates, info below)

**Interaction Patterns:**
- Swipe gestures for image carousels
- Pull-to-refresh on listing pages
- Sticky CTAs on product detail (fixed bottom bar)
- Collapsible filters (drawer from side or bottom sheet)

**Performance:**
- Lazy loading for product images
- Progressive image loading (placeholder → full resolution)
- Minimal animations (subtle fades, no complex transitions)

## Design Enrichment

**Header Elements:**
- Trust indicators: "Trusted by 5,000+ Weavers" or "₹50L+ Waste Diverted" in navigation area
- Notification badges for new messages, order updates
- Multi-currency support indicator

**Footer Richness:**
- Multi-column layout: About, Support, Weavers, Buyers, Legal
- Newsletter signup: "Join the Circular Economy Movement" with email field
- Social media links with platform icons
- Impact summary ticker: Live counter of waste diverted
- Regional language selector
- Trust badges: Secure payments, verified artisans, sustainable practices

**Section Enhancements:**
- Feature cards include: Icon + title + description + "Learn more" link
- Testimonials with customer photos, ratings, location, purchase details
- Category cards with representative images and item counts
- Weaver spotlights: Photo, name, location, specialties, story snippet

This design balances modern e-commerce best practices with respect for traditional craftsmanship, ensuring accessibility for rural artisans while creating an engaging, trustworthy marketplace for eco-conscious buyers.