# 🛒 FakeStore E-Commerce App (React + Redux)


## 📸 Screenshots

![Photo](/public/screenshots/photo-1.png)

![Photo](/public/screenshots/photo-2.png)

![Photo](/public/screenshots/photo-3.png)

![Photo](/public/screenshots/photo-4.png)

![Photo](/public/screenshots/photo-5.png)


A modern, responsive e-commerce web app built with **React**, **Redux Toolkit**, and the **FakeStore API**.  
It allows users to browse products, view details, add items to the cart, and manage authentication — all in one smooth UI.

---

## 🌐 Live Demo

🚀 **Live Site:** [https://fakestore-ecommerce-react-redux.netlify.app](https://fakestore-ecommerce-react-redux.netlify.app)

💻 **GitHub Repository:** [https://github.com/rojanagunoori/fakestore-ecommerce-react-redux](https://github.com/rojanagunoori/fakestore-ecommerce-react-redux)

---

## ✨ Features

- 🧍 User authentication (login/logout)
- 🛍️ Browse products by category (Men, Women, Electronics, Jewelery)
- 🔍 View detailed product pages
- 🛒 Add/remove items from cart
- ⚙️ Global state management with Redux Toolkit
- 💬 Toast notifications (React Toastify)
- 🎠 Hero section with Swiper.js carousel
- 💅 SCSS module-based styling
- 🧭 Routing via React Router v6
- 📱 Fully responsive layout

---

## 🧩 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React (CRA) |
| **State Management** | Redux Toolkit |
| **Routing** | React Router DOM |
| **Styling** | SCSS Modules |
| **Notifications** | React Toastify |
| **Carousel** | Swiper.js |
| **API** | [FakeStore API](https://fakestoreapi.com/) |
| **Deployment** | Netlify |

---

## 🌐 API Integration

This project uses the **[FakeStore API](https://fakestoreapi.com/)** to fetch products, categories, and user data.

### 🔹 Example Endpoints
- 🛍️ `https://fakestoreapi.com/products` — fetch all products  
- 👕 `https://fakestoreapi.com/products/category/men's clothing` — fetch products by category  
- 👩‍💼 `https://fakestoreapi.com/users` — fetch user details  
- 🔐 `https://fakestoreapi.com/auth/login` — authenticate user

### 🔹 Example Code (in Redux Thunk)
```js
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/rojanagunoori/fakestore-ecommerce-react-redux.git
cd fakestore-ecommerce-react-redux
```
2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Start the development server
```bash
npm start
```
4️⃣ Build for production
```bash
npm run build
```
## 🧱 Folder Structure
```bash
src/
 ├── app/
 │    └── store.js
 ├── components/
 │    ├── components/
 │    └── layouts/
 ├── features/
 │    ├── auth/
 │    ├── cart/
 │    └── product/
 ├── pages/
 │    ├── Home/
 │    ├── Catalog/
 │    ├── Product/
 │    ├── Cart/
 │    └── Login/
 ├── routes/
 │    └── Routes.js
 ├── data/
 │    └── images.js
 ├── App.js
 ├── index.js
 └── index.scss
 ```
## ☁️ Deployment (Netlify)
### Live URL:
🔗 https://fakestore-ecommerce-react-redux.netlify.app

### Build Settings:

| Setting               | Value           |
| --------------------- | --------------- |
| **Build Command**     | `npm run build` |
| **Publish Directory** | `build`         |


## 🧑‍💻 Author
👩‍💻 Roja nagunoori

🔗 GitHub Profile: [https://github.com/rojanagunoori/fakestore-ecommerce-react-redux](https://github.com/rojanagunoori/fakestore-ecommerce-react-redux)

📧 Email: nagunooriroja@gmail.com

## 🤝 Contributing
Contributions are welcome! 🎉
To contribute:

Fork this repository

Create a new branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add new feature")

Push to the branch (git push origin feature-name)

Open a Pull Request

## 📜 License
This project is licensed under the MIT License — feel free to use and modify it.

## ⭐ If you like this project, don’t forget to give it a star on GitHub!