This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API Documentation
### menuItem endpoints
- GET /api/menuItems (gets all of the menu items)
- GET /api/menuItems?restaurantId=[id] (gets all menu items for a restaurant)
- GET /api/menuItems?menuItemId=[id]&restaurantId=[id] (gets menu item based on both restaurant id and menu item id... we shouldn't need the restaurantId to get a menu item but for now that's how it is if its a problem, just let me know and I can fix it)
- POST /api/menuItems?restaurantId=[id] (create a menu item under a certain restaurant
Example body
{
  "name": "Spaghetti Bolognese",
  "src": "https://example.com/images/spaghetti_bolognese.jpg",
  "description": "Classic spaghetti dish with a hearty meat sauce"
}
)

### restaurant endpoints
- GET /api/restaurants (get all restaurants)
- GET /api/restaurants?id=[id] (get restaurant by id)
- POST /api/restaurants (create a restaurant with no menu items
Example body
{
  "name": "Delicious Eats",
  "description": "A great restaurant serving delicious food.",
  "image": "https://example.com/images/delicious-eats.jpg"
}
)
- PUT /api/restaurants?id=[id] (update restaurant by id same body structure as post found above)

I tested all of them manually but let me know if anything is broken and I can fix it (there might be an issue with cors that shouldn’t be a big deal, but just let me know). If you have any questions about why this is the interface I chose, I leaned into the agile pillar of responding to change over following a plan and this is where we ended up. 