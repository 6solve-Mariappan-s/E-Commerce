# 🛍️ E-Commerce Website with React.js and Bootstrap 5

A complete, beginner-friendly e-commerce website built with React.js, Bootstrap 5, and the Fake Store API.

## ✨ Features

- ✅ Responsive navbar with cart count badge
- ✅ Beautiful hero section
- ✅ Dynamic product list fetched from API
- ✅ Individual product cards with hover effects
- ✅ Add to cart functionality
- ✅ Shopping cart management (add, remove, increase/decrease quantity)
- ✅ Dynamic cart count and grand total calculation
- ✅ Responsive design for all devices
- ✅ Professional footer with social links
- ✅ Loading and error states
- ✅ Bootstrap Icons integration

## 📋 Project Structure

```
ecommerce-app/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with cart badge
│   │   ├── Hero.jsx            # Welcome section
│   │   ├── ProductList.jsx     # Products grid
│   │   ├── ProductCard.jsx     # Individual product card
│   │   ├── Cart.jsx            # Shopping cart view
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── Loading.jsx         # Loading spinner
│   │
│   ├── App.jsx                 # Main app with state management
│   ├── App.css                 # Custom styling
│   └── main.jsx                # Entry point
│
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Quick Start Guide

### Step 1: Create a New React Project with Vite

```bash
npm create vite@latest ecommerce-app -- --template react
cd ecommerce-app
```

### Step 2: Install Dependencies

```bash
npm install
npm install bootstrap bootstrap-icons
```

### Step 3: Create Project Structure

```bash
mkdir -p src/components
```

### Step 4: Copy All Component Files

Copy the following files from the code provided:

1. **src/main.jsx** - Entry point with Bootstrap imports
2. **src/App.jsx** - Main component with state management
3. **src/App.css** - All styling
4. **src/components/Navbar.jsx** - Navigation component
5. **src/components/Hero.jsx** - Hero section
6. **src/components/ProductList.jsx** - Products grid
7. **src/components/ProductCard.jsx** - Product card
8. **src/components/Cart.jsx** - Shopping cart
9. **src/components/Footer.jsx** - Footer
10. **src/components/Loading.jsx** - Loading spinner

### Step 5: Run the Project

```bash
npm run dev
```

The application will open at `http://localhost:5173/`

## 📦 Installation Details

### Bootstrap 5

```bash
npm install bootstrap bootstrap-icons
```

Bootstrap is already imported in `main.jsx`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
```

### Fake Store API

The app uses the **Fake Store API** to fetch real product data:

```
https://fakestoreapi.com/products?limit=8
```

This API returns products with:
- `id` - Product ID
- `title` - Product name
- `price` - Product price
- `description` - Product description
- `image` - Product image URL
- `category` - Product category

## 🎯 How to Use the App

### 1. Browse Products
- View all products on the main page
- Scroll through the product list

### 2. Add to Cart
- Click "Add to Cart" on any product
- If the product already exists in cart, quantity increases by 1
- Otherwise, product is added with quantity 1

### 3. View Cart
- Click the cart icon in the navbar
- See all items with quantities and prices

### 4. Manage Cart
- **Increase Quantity:** Click the **+** button
- **Decrease Quantity:** Click the **-** button (won't go below 1)
- **Remove Item:** Click the **Delete** button

### 5. View Totals
- **Cart Count:** Shows total quantity of all items (sum of all quantities)
- **Grand Total:** Sum of (price × quantity) for all items

## 💡 Key Concepts Explained

### useState Hook
```javascript
const [cart, setCart] = useState([])
// cart = current value
// setCart = function to update value
// useState([]) = starting value is empty array
```

### useEffect Hook
```javascript
useEffect(() => {
  // Fetch products from API
  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=8')
    const data = await response.json()
    setProducts(data)
  }
  fetchProducts()
}, [])
// Empty [] = runs only once when component loads
```

### Add to Cart Logic
```javascript
const addToCart = (product) => {
  // Check if product already exists
  const existingItem = cart.find(item => item.id === product.id)
  
  if (existingItem) {
    // Increase quantity
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ))
  } else {
    // Add new product
    setCart([...cart, { ...product, quantity: 1 }])
  }
}
```

### Calculate Cart Count
```javascript
// Sum of all quantities
const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
// Example: [qty:2, qty:3, qty:1] = 2+3+1 = 6
```

### Calculate Grand Total
```javascript
// Sum of (price × quantity) for all items
const grandTotal = cart.reduce((total, item) => 
  total + (item.price * item.quantity), 0
)
// Example: (100×2) + (50×3) + (75×1) = 200+150+75 = 425
```

## 🎨 Styling

The app uses **Bootstrap 5** for responsive layout and components:

- **Navbar:** Sticky navigation with hamburger menu
- **Grid System:** Responsive columns (col-12, col-sm-6, col-lg-3)
- **Cards:** Bootstrap cards for products
- **Buttons:** Styled buttons with hover effects
- **Badge:** Cart count badge
- **Table-like Layout:** Cart item display

Custom CSS (`App.css`) provides:
- Color scheme and gradients
- Hover effects and transitions
- Responsive media queries
- Custom animations

## 📱 Responsive Design

The app is fully responsive:

- **Mobile (< 576px):** Single column layout
- **Tablet (576px - 992px):** 2 column grid
- **Desktop (> 992px):** 3-4 column grid

All components adjust to screen size using Bootstrap classes.

## 🐛 Error Handling

The app handles errors gracefully:

1. **API Fetch Error:**
   - Shows error message to user
   - Falls back to dummy products
   - App continues to work normally

2. **Empty Cart:**
   - Shows "Your cart is empty" message
   - Provides "Continue Shopping" button

3. **Loading State:**
   - Shows loading spinner while fetching
   - Prevents UI from showing before data loads

## 📚 Learning Resources

### React Documentation
- [React Hooks](https://react.dev/reference/react)
- [useState](https://react.dev/reference/react/useState)
- [useEffect](https://react.dev/reference/react/useEffect)

### Bootstrap Documentation
- [Bootstrap 5 Grid](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Bootstrap Components](https://getbootstrap.com/docs/5.0/components/alerts/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

### API Documentation
- [Fake Store API](https://fakestoreapi.com/)

## 🤝 Component Communication

### Props Flow:
```
App.jsx (has all state)
  ├── Navbar (receives: cartCount, onCartClick)
  ├── Hero (no props)
  ├── ProductList (receives: products, onAddToCart)
  │   └── ProductCard (receives: product, onAddToCart)
  ├── Cart (receives: cartItems, onRemove, onIncrease, onDecrease, grandTotal)
  └── Footer (no props)
```

### State Management:
All state is managed in `App.jsx`:
- `products` - List of products from API
- `cart` - List of items in shopping cart
- `loading` - Whether data is loading
- `error` - Error message if API fails
- `showCart` - Show cart or products view

## ✅ Checklist for Understanding

- [x] What is React?
- [x] What is useState?
- [x] What is useEffect?
- [x] What is fetch()?
- [x] What are props?
- [x] How does map() work?
- [x] How does reduce() work?
- [x] How does filter() work?
- [x] How does Add to Cart work?
- [x] How does cart management work?
- [x] How are totals calculated?

See **BEGINNER_GUIDE.md** for detailed explanations of all concepts!

## 🎓 For Beginners

This project teaches:
1. **React Basics:** Components, hooks, state
2. **API Integration:** Fetching data with fetch()
3. **State Management:** Using useState for complex data
4. **Component Communication:** Passing data with props
5. **Array Methods:** map(), reduce(), filter()
6. **Bootstrap:** Building responsive layouts
7. **User Interactions:** Handling clicks and form inputs
8. **Real-world Features:** Shopping cart, product listing

## 🚀 Next Steps

After understanding this project, you can:

1. **Add More Features:**
   - Search/filter products
   - Product categories
   - Wishlist/favorites
   - User reviews and ratings

2. **Improve Backend:**
   - Use a real backend API
   - Database integration
   - User authentication

3. **Enhanced UI:**
   - Add animations
   - Dark mode toggle
   - Payment integration

4. **Performance:**
   - Code splitting
   - Lazy loading images
   - Optimize re-renders

## 📝 License

This project is free to use for learning and educational purposes.

## 💬 Support

For questions about the code:
1. Read the **BEGINNER_GUIDE.md** for concept explanations
2. Check React documentation
3. Look at code comments for clarification

---

**Happy Coding! 🎉**

Built with ❤️ for beginners learning React.