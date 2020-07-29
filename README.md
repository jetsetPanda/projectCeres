## [Demo: NextJS Product Page](https://fe-assignment-ompv24rt9.vercel.app/)
######*by: Omar Ong*
##### Deployed Link: [https://fe-assignment-ompv24rt9.vercel.app/](https://fe-assignment-ompv24rt9.vercel.app/)

___
### Highlights

- Built on NextJS framework - Deployed to Vercel
- Modern React:
  >hooks, statelful/less functional components ("no-class" approach, just like facebook wants us to do...) and fetch api used
- CSS Frameworks: 
  >I used `styled-components` for the components and a global SCSS file for styles in the remaining items in the main index file, mainly using flexbox as layout model.  
- API
  > - used NextJS method `getServerSideProps`, which fetches data every request time. I imagine that SKUS inventory and other datapoints can change dynamically, otherwise if the data would be more static, I will use `getStaticProps` as the cached static props will be more economical on the api side. 
  > - *[Created New Endpoint](https://demo4893163.mockable.io/)* : The original demo api only had non-"quickship" items, so I tweaked it to set some SKUs to `is_quick_ship: true` so you can confirm that my...
- **Quickship Filter Toggle** is implemented (useEffect hook)
- enabled three row line for product description, append ellipses for concatenated lengthier descriptions, see `ProductDescription.js`
- **Show More / Show Less** button functionality implemented w/ quickship


---
###What Could Be Done Further (*time permitting*)

- use context api to avoid prop drilling
- implement dropdown multi checkbox select filter, and clear all button functionality (!)
- cleanup CSS and layout
- further componentize `products.js` into statelss functional components styled with styled-components
- improved UX, e.g. animated cues (mobile modal ease, scroll up/down onclick Show More, button hover states, etc)
- create responsive components to display on mobile using custom hooks to utilize ResizeObserver
- unit tests (Jest)
- annotate or build components in bit.dev or Storybook