// This snippet file was generated by processing the source file:
// ./analytics-next/ecommerce.js
//
// To make edits to the snippets in this file, please edit the source

// [START analytics_ecommerce_add_cart_modular]
import { getAnalytics, logEvent } from "@firebase/analytics";

// Specify order quantity
const item_jeggings_quantity = {
  ...item_jeggings,
  quantity: 2
};

// Prepare ecommerce bundle
const params4 = {
  currency: 'USD',
  value: 19.98,
  items: [item_jeggings_quantity]
};

// Log event when a product is added to a wishlist
const analytics = getAnalytics(firebaseApp);
logEvent(analytics, 'add_to_wishlist', params4);

// Log event when a product is added to the cart
logEvent(analytics, 'add_to_cart', params4);
// [END analytics_ecommerce_add_cart_modular]