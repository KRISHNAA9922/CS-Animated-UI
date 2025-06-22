# Contentstack Setup for GyngerClone Project

This document outlines the steps to set up Contentstack as the headless CMS for the GyngerClone project, including content model design and fetching images from the CMS.

---

## 1. Contentstack Account and Stack Setup

- Sign up or log in to [Contentstack](https://www.contentstack.com/).
- Create a new Stack for the GyngerClone project.
- Note the API keys (API Key, Delivery Token, Environment) from the Stack settings for integration.

---

## 2. Single Content Model Design for Homepage

Based on your codebase, here is a guide to create a single comprehensive content model in Contentstack that matches your components and data structure:

### Homepage Content Model Fields

- **header** (Group)
  - **logo** (File - Image)
  - **navigation_links** (Group - Multiple entries)
    - **label** (Text) — e.g., "For buyers", "For sellers"
    - **url** (Text or URL) — e.g., "#"
  - **dropdown_menus** (Group - Multiple entries)
    - **name** (Text) — e.g., "Products", "Solutions", "Resources", "Company"
    - **items** (Group - Multiple entries)
      - **name** (Text) — e.g., "Payment Solutions", "For Startups"
      - **href** (Text or URL) — e.g., "#"
  - **auth_buttons** (Group)
    - **sign_in_text** (Text) — e.g., "Sign In"
    - **get_started_text** (Text) — e.g., "Get Started"

- **hero** (Group)
  - **title** (Text)
  - **subtitle** (Text or Rich Text)
  - **background_image** (File - Image)
  - **call_to_action_text** (Text)
  - **call_to_action_link** (Text or URL)

- **moving_logos** (Group)
  - **logos** (Group - Multiple entries)
    - **name** (Text)
    - **image** (File - Image)

- **growth_section** (Group)
  - **header_text** (Text)
  - **button_text** (Text)
  - **cards** (Group - Multiple entries)
    - **title** (Text)
    - **description** (Text or Rich Text)
    - **image** (File - Image)

- **gynger_pay_section** (Group)
  - **title** (Text)
  - **description** (Text or Rich Text)
  - **button_text** (Text)
  - **offer_details** (Text or Rich Text)

- **gynger_card** (Group)
  - **title** (Text)
  - **description** (Text or Rich Text)
  - **image** (File - Image)
  - **capital_info** (Number or Text)

- **gynger_solution** (Group)
  - **title** (Text)
  - **cards** (Group - Multiple entries)
    - **title** (Text)
    - **image** (File - Image)
    - **items** (List of Text)
    - **link_text** (Text)
    - **link_url** (Text or URL)

- **footer** (Group)
  - **footer_text** (Text or Rich Text)
  - **social_links** (Group - Multiple entries)
    - **platform** (Text)
    - **url** (Text or URL)

---
## 3. Creating Entries

Below is an example of how you can create a single entry for the homepage content model with the content you have written directly, structured by groups and their entries:

### Header (Group)
- logo: Upload your logo image file
- navigation_links (Group)
  - label: "Home", url: "/"
  - label: "About", url: "/about"
  - label: "Contact", url: "/contact"

### Footer (Group)
- footer_text: "© 2024 GyngerClone. All rights reserved."
- social_links (Group)
  - platform: "Twitter", url: "https://twitter.com/gyngerclone"
  - platform: "LinkedIn", url: "https://linkedin.com/company/gyngerclone"

### Hero (Group)
- title: "Master your cash flow"
- subtitle: "Flexible payments and embedded financing solutions for buyers and sellers of technology."
- background_image: Upload your hero background image file
- call_to_action_text: "Get in touch"
- call_to_action_link: "/contact"

### MovingLogos (Group)
- logos (Group)
  - name: "ZoomInfo", image: Upload logo image file
  - name: "VMware", image: Upload logo image file
  - ... (add all logos)

### GrowthSection (Group)
- header_text: "Your blueprint for lasting growth"
- button_text: "Talk to us"
- cards (Group)
  - title: "Control Burn", description: "Description for Control Burn card", image: Upload image
  - title: "Accelerate Revenues", description: "Description for Accelerate Revenues card", image: Upload image
  - title: "Grow With Confidence", description: "Description for Grow With Confidence card", image: Upload image

### GyngerPaySection (Group)
- title: "Gynger Pay"
- description: "Extend flexible payment offers to your customers while getting paid up front."
- button_text: "Explore Gynger Pay"
- offer_details: "Details about offers"

### GyngerCard (Group)
- title: "Gynger Capital"
- description: "Access fast, non-dilutive capital with Gynger Capital's embedded AP and AR financing solutions."
- image: Upload Gynger Card image
- capital_info: 80000

### GyngerSolution (Group)
- title: "Find your solution"
- cards (Group)
  - title: "BUYERS", image: Upload image, items: ["Smooth out your payables", "Conserve your cash", "Grow your business"], link_text: "Learn more →", link_url: "#"
  - title: "SELLERS", image: Upload image, items: ["Offer flexible payments", "Pull cash forward", "Optimize financial workflows"], link_text: "Learn more →", link_url: "#"
  - title: "CFOs", image: Upload image, items: ["Shorten DSO", "Unlock working capital", "Master cash flow conversion"], link_text: "Learn more →", link_url: "#"
  - title: "CROs", image: Upload image, items: ["Close deals faster", "Streamline renewals", "Differentiate your offers"], link_text: "Learn more →", link_url: "#"

---

## 4. Fetching Images from Contentstack

- Use the Contentstack SDK or REST API to fetch the homepage entry.
- Image fields return URLs that can be used directly in your React components.
- Example: `<img src={entry.hero.background_image.url} alt="Hero Background" />`

---

## 5. Integration in Next.js

- Install Contentstack SDK: `npm install contentstack`
- Configure Contentstack client with API keys.
- Fetch the homepage entry in `getStaticProps` or `getServerSideProps` or client-side as needed.
- Pass fetched data as props to components and render dynamically.

---

## 6. Additional Notes

- Use environment variables to store API keys securely.
- Implement caching or incremental static regeneration for performance.
- Refer to Contentstack documentation for advanced features like localization, webhooks, and extensions.

---

If you need help with the actual integration code or further customization, please let me know.
