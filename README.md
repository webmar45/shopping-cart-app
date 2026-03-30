# 🛍 Shopping Cart Application

## 📌 Project Overview

This is a modern **Shopping Cart Web Application** built using **React, Redux Toolkit, TypeScript, and Tailwind CSS**.
The application allows users to browse products, add them to the cart, manage quantities, and view a dynamically calculated bill with special offers applied.

---

## 🚀 Features

* 🛒 Add products to cart
* ➕ Increase / ➖ Decrease quantity
* ❌ Remove items from cart
* 💸 Automatic discount calculation
* 🧾 Subtotal, Savings, and Final Total display
* 🏷 Display available offers on product cards
* 🎨 Elegant and responsive UI using Tailwind CSS
* ⚡ State management using Redux Toolkit
* 🔒 Type safety using TypeScript
* 🧪 Unit testing using Vitest

---

## 🎯 Special Offers Implemented

1. 🧀 **Cheese Offer**

   * Buy 1 Get 1 Free

2. 🍞 **Soup & Bread Offer**

   * Buy Soup → Get Bread at 50% off

3. 🧈 **Butter Offer**

   * Get Butter at 1/3 off

---

## 🏗 Tech Stack

* **Frontend:** React (Vite)
* **State Management:** Redux Toolkit
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Testing:** Vitest + jsdom

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   └── store.ts
│
├── features/
│   └── cart/
│       ├── cartSlice.ts
│       ├── cartTypes.ts
│       ├── cartUtils.ts
│       └── __tests__/
│           ├── cartSlice.test.ts
│           └── cartUtils.test.ts
│
├── components/
│   ├── ProductList.tsx
│   ├── Basket.tsx
│   ├── CartItem.tsx
│
├── data/
│   └── products.ts
│
├── hooks/
│   └── reduxHooks.ts
│
├── App.tsx
└── main.tsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd shopping-cart-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

---

## 🧪 Running Tests

### Run all tests

```bash
npx vitest
```

### Run with coverage

```bash
npx vitest run --coverage
```

---

## 🧠 How It Works

* Products are defined in a static data file.
* Redux Toolkit manages cart state globally.
* Users can:

  * Add items
  * Update quantity
  * Remove items
* Business logic for offers is handled in `cartUtils.ts`.
* The application dynamically calculates:

  * Subtotal
  * Savings from offers
  * Final total

---

## 🎨 UI Highlights

* Responsive layout
* Smooth hover animations
* Gradient backgrounds
* Card-based design
* Clean and modern interface

---

## 📚 Best Practices Followed

* ✅ Modular folder structure
* ✅ Separation of concerns (UI, logic, state)
* ✅ Type-safe Redux implementation
* ✅ Reusable components
* ✅ Clean and readable code
* ✅ Unit testing for reliability

---

## 🏁 Conclusion

This project demonstrates how to build a **scalable and maintainable shopping cart system** using modern web technologies.
It integrates **state management, business logic, and UI design** effectively to provide a smooth user experience.

---

## 👨‍💻 Author

**Chaithra P**

---


