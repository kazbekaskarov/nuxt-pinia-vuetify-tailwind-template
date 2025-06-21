# nuxt-pinia-vuetify-tailwind-template

**A Nuxt.js starter template integrated with Pinia, Vuetify, and Tailwind CSS.**

---

## 📁 API Structure

- **Register API class** in `api/api.ts`.
- **Controller files** located in `api/controllers/[controllerName]`.

> Controllers should only send requests and return responses. Use stores for error handling and data processing.

---

## 🧩 Components

- All components in the `components/` folder are auto-registered.
- To enable auto-import from other directories, configure `nuxt.config.ts`:
  ```js
  export default {
    components: [
      { path: '~/components', pathPrefix: true },
      // { path: '~/single-use/test', pathPrefix: true, prefix: 'test' },
    ],
  }

## 📄 Pages

Pages for development:

pages/dev/icons-list.vue — icon list.

pages/dev/routes.vue — pages list.

## 🎨 Icons

Store icons in assets/icons/ with numeric folders and filenames:

assets/icons/001/001.svg
assets/icons/002/002.svg

Customize icon paths and display in pages/dev/icons-list.vue as needed.

## 🗄️ Stores (Pinia)

Place store files in stores/[storeName].ts.

It’s recommended to match the store name with the controller name for clarity.

> Handle business logic (errors, data transformations) inside stores — use store methods and state in Vue templates instead of calling API in components.

