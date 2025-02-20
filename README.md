# Next.js 15 - next/link issue with dynamic imports

This repository demonstrates an unexpected behavior with `next/link` when used inside a component that is dynamically imported in Next.js 15.  The link does not function correctly when the component is lazy-loaded.

## Bug Description
The `next/link` component does not navigate as expected when the parent component is loaded dynamically.  This appears to be related to how Next.js handles client-side routing and dynamic imports.

## Steps to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click on the 'About Us' link.  The navigation will not work as expected.

## Solution
The solution involves ensuring that `next/link` is used within a properly hydrated component after the dynamic import.

See `bugSolution.js` for a corrected version.