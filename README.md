# nuxt-pinia-vuetify-tailwind-template  

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**Nuxt.js starter template integrated with Pinia, Vuetify, and Tailwind CSS.**

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [⚙️ Installation](#%EF%B8%8F-installation)
- [🚀 Usage](#-usage)
- [📁 API Structure](#-api-structure)
- [🧩 Components](#-components)
- [📄 Pages](#-pages)
- [🎨 Icons](#-icons)
- [🗄️ Stores](#%EF%B8%8F-stores)
- [📑 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

- **Nuxt.js SSR/SSG** — flexible page and API generation.
- **Pinia** — lightweight yet powerful state management.  
- **Vuetify** — ready-to-use components.  
- **Tailwind CSS** — utility-first styling.  
- **TypeScript** — strict typing support.  
- **ESLint & Prettier** — consistent code style and automated formatting.  

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kazbekaskarov/nuxt-pinia-vuetify-tailwind-template.git
   cd nuxt-pinia-vuetify-tailwind-template
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

---

## 🚀 Usage

Run in development mode:
```bash
npm run dev
# or
yarn dev
```
Open `http://localhost:3000` in your browser.

Build and run in production:
```bash
npm run build
npm run start
```  

---

## 📁 API Structure

```
api/
├─ api.ts          # API class registration
├─ index.ts        # Controller imports
└─ controllers/    # Controller implementations
   └─ [controllerName].ts
```

- **api/api.ts** — registers all API classes.  
- **api/index.ts** — imports all controllers.  
- **api/controllers/** — contains methods for interacting with external and internal services.

> Controllers should only handle request dispatch and response return. Use Pinia stores for logic, error handling, and data transformation.

---

## 🧩 Components

All `.vue` components in the `components/` directory are auto-imported.  

To add additional directories for auto-import:
```js
// nuxt.config.ts
export default {
  components: [
    { path: '~/components', pathPrefix: true },
    { path: '~/src/widgets', pathPrefix: false, prefix: 'Widget' },
  ],
};
```

---

## 📄 Pages

Pages for development:
- `pages/dev/icons-list.vue` —  icon list .  
- `pages/dev/routes.vue` — route list.


---

## 🎨 Icons

Organize icons as follows:
```
assets/icons/
├─ 001/001.svg
├─ 001/002.svg
└─ ...

<nuxt-icon filled name="001/001" />
```



Configure icon paths and display in `pages/dev/icons-list.vue`.

---


## 🗄️ Stores

Store directory:
```
stores/
└─ user.ts   # Pinia store
```

### Example store:
```ts
// stores/user.ts
import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
  state: () => ({ profile: null as User | null, loading: false }),
  actions: {
    async loadUser() {
      this.loading = true;
      try {
        this.profile = await $fetch<User>('/api/user');
      } finally {
        this.loading = false;
      }
    },
  },
});
```

Use in a component:
```vue
<template>
  <div v-if="!user.loading">{{ user.profile?.name }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '~/stores/user';
const user = useUserStore();
user.loadUser();
</script>
```

---

## 📑 Contributing

Interested in contributing? Please follow our guidelines:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Commit your changes (git commit -m "feat: Describe your feature").

Push to the branch (git push origin feature/YourFeature).

Open a pull request.

---

## 📜 License

This project is licensed under the MIT License. 

---


