---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "🚚 LaraDumps" 
  tagline: Welcome to LaraDumps, a friendly app designed to boost your PHP coding and debugging experience.
  
  image:
    src: 'https://raw.githubusercontent.com/laradumps/laradumps-docs/2.x/docs/_media/homepage.png'
    alt: LaraDumps

  actions:
    - theme: brand
      text: Get started
      link: /README.md
    - theme: alt
      text: Source code
      link: https://github.com/laradumps/laradumps

---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #F7E27E 70%, #E1DAE6 40%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
