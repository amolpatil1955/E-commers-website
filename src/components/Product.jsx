"use client";
import React, { useState, useMemo } from "react";
import Style from "../components/Style"
import Footer from "../components/Footer";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/Taskslice.jsx';
import { ToastContainer , toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SAMPLE_PRODUCTS = [
  { id: 1, name: "Casual Denim Jacket", category: "Clothes", price: 2400, image: "https://images.unsplash.com/photo-1602810318383-e7f0b57d1b8a?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Smartphone X Pro", category: "Electronics", price: 79999, image: "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Running Shoes", category: "Sports", price: 5999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Elegant Dress", category: "Fashion", price: 4999, image: "https://images.unsplash.com/photo-1520975916806-6d1f2b7b4f7f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Bluetooth Headphones", category: "Electronics", price: 8999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Sports Jersey", category: "Sports", price: 1799, image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Classic T-Shirt", category: "Clothes", price: 999, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Leather Handbag", category: "Fashion", price: 6999, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Gaming Laptop", category: "Electronics", price: 129999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Sports Watch", category: "Sports", price: 9999, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Hoodie Jacket", category: "Clothes", price: 1999, image: "https://images.unsplash.com/photo-1603781051189-b9a91a3c6f37?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "4K Ultra TV", category: "Electronics", price: 54999, image: "https://images.unsplash.com/photo-1606813902910-5e7bbfdf586e?q=80&w=800&auto=format&fit=crop" },
];


function Navbar({ cartCount, onToggleFilters, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
 

 

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-2 rounded-lg bg-white/30 hover:bg-white/40 transition"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="toggle menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="text-2xl font-extrabold tracking-tight text-gray-900">ShopSphere</div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a className="hover:text-gray-900 transition" href="#home">Home</a>
          <a className="hover:text-gray-900 transition" href="#products">Products</a>
          <a className="hover:text-gray-900 transition" href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleFilters}
            className="hidden md:inline-block px-3 py-1 rounded-lg bg-white/30 hover:bg-white/40 transition"
          >
            Filters
          </button>

          <button onClick={onOpenCart} className="relative p-2 rounded-lg bg-white/30 hover:bg-white/40 transition">
            <span className="text-xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">{cartCount}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/30 backdrop-blur-md border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            <a className="py-2" href="#home">Home</a>
            <a className="py-2" href="#products">Products</a>
            <a className="py-2" href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

function SidebarFilter({ open, onClose, currentCategory, setCategory, price, setPrice, onApply, maxPrice }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-72 z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} bg-white/60 backdrop-blur-lg border-r border-white/20 shadow-lg`}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button onClick={onClose} className="p-1 rounded hover:bg-white/30">&times;</button>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Category</h4>
          <div className="space-y-2">
            {["All", "Clothes", "Electronics", "Sports", "Fashion"].map((c) => (
              <label key={c} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="category"
                  value={c}
                  checked={currentCategory === c}
                  onChange={() => setCategory(c)}
                  className="rounded text-black"
                />
                <span className="text-sm">{c}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Price (up to)</h4>
          <div className="px-2">
            <input
              type="range"
              min="0"
              max={Math.ceil(maxPrice)}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>₹0</span>
              <span>₹{Math.ceil(maxPrice)}</span>
            </div>
            <div className="mt-2 font-semibold">Selected: ₹{price}</div>
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={onApply} className="flex-1 bg-black text-white px-4 py-2 rounded-lg">Apply</button>
          <button onClick={() => { setCategory("All"); setPrice(Math.ceil(maxPrice)); }} className="flex-1 border border-gray-300 px-4 py-2 rounded-lg">Reset</button>
        </div>
      </div>
    </aside>
  );
}

function ProductCard({ item, onAdd }) {
      const dispatch = useDispatch();
  return (
    <div className="relative group bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden p-3 hover:shadow-2xl hover:scale-[1.02] transition-transform">
      <div className="h-48 w-full flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-tr from-white/10 to-white/5">
        <img src={item.image} alt={item.name} className="h-full object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.category}</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">₹{item.price.toLocaleString()}</div>
            {item.discount && <div className="text-sm text-yellow-500 font-medium">{item.discount}</div>}
          </div>
          <button
            onClick={() => {
              dispatch(addToCart(item) ); toast.success(`${item.name}added to cart!🛒`);  }}
            className="bg-black text-white px-3 py-2 rounded-lg shadow hover:opacity-95"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* subtle offer badge */}
      {item.badge && (
        <div className="absolute top-3 left-3 bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-semibold">
          {item.badge}
        </div>
      )}
    </div>
  );
}

function ProductGrid({ products, onAdd }) {
  if (products.length === 0) {
    return <div className="p-6 text-center text-gray-600">No products match filters.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} item={p} onAdd={onAdd} />
      ))}
    </div>
  );
}

function CartDrawer({ open, onClose, cartItems, updateQty, removeItem }) {
  const subtotal = cartItems.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-[420px] z-50 transform transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}>
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white/90 backdrop-blur-lg h-full p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Your Cart</h3>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100">&times;</button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600 mt-12">Your cart is empty.</div>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((ci) => (
                <div key={ci.id} className="flex gap-3 items-center bg-white/50 border border-white/20 rounded-lg p-3">
                  <img src={ci.image} alt={ci.name} className="w-16 h-16 object-cover rounded-md" />
                  <div className="flex-1">
                    <div className="font-medium">{ci.name}</div>
                    <div className="text-sm text-gray-600">₹{ci.price.toLocaleString()}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => updateQty(ci.id, Math.max(1, ci.qty - 1))} className="px-3 py-1 bg-gray-100 rounded">-</button>
                      <div className="px-3">{ci.qty}</div>
                      <button onClick={() => updateQty(ci.id, ci.qty + 1)} className="px-3 py-1 bg-gray-100 rounded">+</button>
                      <button onClick={() => removeItem(ci.id)} className="ml-auto text-sm text-red-500">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600">Subtotal</div>
                <div className="text-lg font-semibold">₹{subtotal.toLocaleString()}</div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [products] = useState(SAMPLE_PRODUCTS.map((p, i) => ({
    ...p,
    badge: i % 3 === 0 ? "Hot" : (i % 4 === 0 ? "New" : null),
    discount: i % 2 === 0 ? `${10 + (i*5)}% OFF` : null
  })));
  const maxPrice = useMemo(() => Math.max(...products.map(p => p.price)), [products]);

  // UI state
  const [filterOpen, setFilterOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // filter state
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(Math.ceil(maxPrice));

  // cart state
  const [cart, setCart] = useState([]);

  // Filtering logic
  const filtered = useMemo(() => {
    return products.filter(p => {
      const catOk = category === "All" ? true : p.category === category;
      const priceOk = p.price <= price;
      return catOk && priceOk;
    });
  }, [products, category, price]);

  const handleAddToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(it => it.id === product.id);
      if (exists) {
        return prev.map(it => it.id === product.id ? { ...it, qty: it.qty + 1 } : it);
      }
      return [{ ...product, qty: 1 }, ...prev];
    });
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(it => it.id === id ? { ...it, qty } : it));
  };

  const removeItem = (id) => {
    setCart(prev => prev.filter(it => it.id !== id));
  };

  const applyFilters = () => {
    setFilterOpen(false);
    // product list is derived from state so changes are reactive
  };

  return (
    <div className="min-h-screen  from-gray-50 to-gray-100 text-gray-900 bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb] ">
      <Navbar
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onToggleFilters={() => setFilterOpen(true)}
        onOpenCart={() => setCartOpen(true)}
      />

      <SidebarFilter
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        currentCategory={category}
        setCategory={setCategory}
        price={price}
        setPrice={setPrice}
        onApply={applyFilters}
        maxPrice={maxPrice}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cart}
        updateQty={updateQty}
        removeItem={removeItem}
      />

      {/* Page content */}
      <main className="pt-24 max-w-7xl mx-auto bg-gradient-to-r from-purple-100 to-indigo-200 ..." >
        {/* Hero / banner */}
        <section className="px-4 md:px-6">
          <div className="rounded-2xl overflow-hidden relative grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-tr from-white/40 to-white/10 backdrop-blur-md">
              <h1 className="text-4xl md:text-5xl font-extrabold">Discover latest deals</h1>
              <p className="mt-3 text-gray-700 max-w-xl">Clothes, Electronics, Fashion & Sports — curated discounts every day. Use filters to narrow results and add to cart with one click.</p>
              <div className="mt-6 flex gap-3">
                <button onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })} className="bg-black text-white px-5 py-3 rounded-lg">Shop Now</button>
                <button onClick={() => setFilterOpen(true)} className="bg-white/60 px-5 py-3 rounded-lg">Open Filters</button>
              </div>
            </div>

            <div className="p-6 md:p-0">
              <div className="grid grid-cols-2 gap-3 p-4">
                <div className="rounded-xl overflow-hidden h-40 bg-white/20 backdrop-blur-md">
                  <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01k2bzbwesfc79s8pzjvs2epvz%2F1754896247_img_1.webp?st=2025-08-11T05%3A18%3A18Z&se=2025-08-17T06%3A18%3A18Z&sks=b&skt=2025-08-11T05%3A18%3A18Z&ske=2025-08-17T06%3A18%3A18Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=g1kK5i26t2IaqaXMrh%2FK6ttgV3vZ7z13beLdUVVmOKw%3D&az=oaivgprodscus" alt="clothes" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-40 bg-white/20 backdrop-blur-md">
                  <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" alt="electronics" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-40 bg-white/20 backdrop-blur-md">
                  <img src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=800&auto=format&fit=crop" alt="sports" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-40 bg-white/20 backdrop-blur-md">
                  <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop" alt="fashion" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product grid */}
        <section id="products" className="mt-8">
          <div className="px-4 md:px-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Products</h2>
              <div className="text-sm text-gray-600">Showing {filtered.length} results</div>
            </div>
          </div>

          <ProductGrid products={filtered} onAdd={handleAddToCart} />
        </section>

    
      </main>
      <Style/>
      <Footer/>
      <ToastContainer
        position="top-center"
        autoClose={1800}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable
        pauseOnHover={false}
        toastClassName="ios-toast"
        bodyClassName="ios-toast-body"
      />
    </div>
    
  );
}
