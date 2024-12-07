import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmPage from "./pages/OrderConfirmPage";
import ProfilePage from "./pages/ProfilePage";
import AuthPage from "./pages/AuthPage";
import PasswordResetPage from "./pages/PasswordResetPage";
import SearchResultPage from "./pages/SearchResultPage";
import WishlistPage from "./pages/WishlistPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ErrorPage from "./pages/ErrorPage";
import Filterwala from "./components/Filterwala";
import IntroModal from "./components/IntroModal";
import HeroSection from "./components/HeroSection";

export const routes = [
  { path: "/", element: HomePage },
  { path: "/products", element: ProductListPage },
  { path: "/product/:id", element: ProductDetailPage },
  { path: "/cart", element: CartPage },
  { path: "/checkout", element: CheckoutPage },
  { path: "/order/:orderId", element: OrderConfirmPage },
  { path: "/account", element: ProfilePage },
  { path: "/auth", element: AuthPage },
  { path: "/password-reset", element: PasswordResetPage },
  { path: "/search?q=:query", element: SearchResultPage },
  { path: "/wishlist", element: WishlistPage },
  { path: "/privacypolicy", element: PrivacyPolicyPage },
  { path: "/filterwala", element: Filterwala },
  { path: "/intromodal", element: IntroModal },
  { path: "/herosection", element: HeroSection },
  { path: "/error", element: ErrorPage },
  { path: "*", element: ErrorPage },
];

