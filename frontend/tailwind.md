
latest unstable : 
-------------------
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init (error)
npm install -D @tailwindcss/cli
npx @tailwindcss/cli init


stable : 
-------------------
npm uninstall tailwindcss
npm install -D tailwindcss@3
npx tailwindcss init




src/global.css
-------------------
@tailwind base;
@tailwind components;
@tailwind utilities;


postcss.config.js
-------------------
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


tailwind.config.js
-------------------
export default {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {},
  },
  plugins: [],
}



vite.config.js
-------------------
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  plugins: [svelte()],
}


main.js
-------------------
import './global.css'

