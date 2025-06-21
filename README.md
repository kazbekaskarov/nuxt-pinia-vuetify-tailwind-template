# nuxt-pinia-vuetify-tailwind-template  

[![Build Status](https://img.shields.io/github/actions/workflow/status/kazbekaskarov/nuxt-pinia-vuetify-tailwind-template/ci.yml?branch=main)](https://github.com/kazbekaskarov/nuxt-pinia-vuetify-tailwind-template/actions)  [![npm version](https://img.shields.io/npm/v/nuxt-pinia-vuetify-tailwind-template)](https://www.npmjs.com/package/nuxt-pinia-vuetify-tailwind-template)  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**A high-performance Nuxt.js starter template integrated with Pinia, Vuetify, and Tailwind CSS.**

Built for rapid prototyping, SSR/SSG support, TypeScript out of the box, and an optimized developer experience.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [⚙️ Installation](#-installation)
- [🚀 Usage](#-usage)
- [📁 API Structure](#-api-structure)
- [🧩 Components](#-components)
- [📄 Pages & Routing](#-pages--routing)
- [🎨 Icons](#-icons)
- [🔧 Composables](#-composables)
- [🗄️ Stores (Pinia)](#-stores-pinia)
- [📑 Contributing](#-contributing)
- [📜 License](#-license)
- [📝 Changelog](#-changelog)

---

## ✨ Features

- **Nuxt.js SSR/SSG** — flexible page and API generation.
- **Pinia** — lightweight yet powerful state management.  
- **Vuetify** — ready-to-use Material Design components.  
- **Tailwind CSS** — utility-first styling.  
- **TypeScript** — strict typing support.  
- **ESLint & Prettier** — consistent code style and automated formatting.  
- **Auto-import** of components, composables, and stores.

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
Preview documentation (if available): `npm run docs:dev`.

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

All `.vue` components in the `components/` directory are auto-registered.  

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

## 📄 Pages & Routing

Nuxt automatically creates routes based on the file structure in `pages/`.

Demo pages for development:
- `pages/dev/icons-list.vue` — configurable icon list preview.  
- `pages/dev/routes.vue` — visual route mapping demo.

Example mapping:
```text
/pages/dev/routes.vue  →  http://localhost:3000/dev/routes
```  

---

## 🎨 Icons

Organize icons as follows:
```
assets/icons/
├─ 001/001.svg
├─ 001/002.svg
└─ ...
```

<details>
<summary>Icons preview example</summary>

![Icons preview](./docs/icons-preview.png)

</details>

Configure icon paths and display in `pages/dev/icons-list.vue`.

---

## 🔧 Composables

All files in the `composables/` directory are auto-imported.

### Example `useFetch` composable:
```ts
// composables/useFetch.ts
import { ref } from 'vue';
export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  async function fetchData() {
    loading.value = true;
    try {
      data.value = await $fetch<T>(url);
    } catch (e) {
      error.value = e as Error;
    } finally {
      loading.value = false;
    }
  }

  return { data, error, loading, fetchData };
}
```

Use in a component:
```vue
<script setup lang="ts">
const { data, fetchData, loading, error } = useFetch<User>('/api/users');
fetchData();
</script>
```

---

## 🗄️ Stores (Pinia)

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

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details on contributing, issue reporting, and pull requests.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a list of changes and version history.
