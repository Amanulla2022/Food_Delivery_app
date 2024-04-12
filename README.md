# Food Delivery App

This is a simple e-commerce application built using React.js. It allows users to browse through products, add them to the cart, and proceed to checkout. The application also includes authentication functionality using Firebase authentication.

## [Hosted_Link](https://food-delivery-app-ruby-seven.vercel.app/)

## Project Structure
The project structure is organized as follows:
src/: Contains all the source code for the application.
components/: Reusable UI components used throughout the app.
context/: Context providers for managing global state.
pages/: Top-level pages of the application.
firebase/: Firebase configuration and authentication setup.
images/: Image assets used in the application.
data/: Static data files for menu items.
App.js: Main entry point of the application.
Layout.js: Layout component containing header, footer, and routing setup.

## Features
User Authentication: Users can sign up for an account or log in using their email and password.
Browse Categories: Users can explore various food categories to find their desired items.
Shopping Cart: Users can add items to their shopping cart and view their cart contents.
Order Placement: Users can proceed to checkout and place orders, providing delivery information.
Order Summary: Users can view a summary of their placed orders and payment information.

### Pages
Home: Landing page of the application, displaying featured products and promotions.
Categories: Page displaying different product categories. Users can browse products within each category.
ProductDetail: Page displaying details of a specific product.
OrderDetails: Page for entering delivery information and placing orders.
OrderSummary: Page displaying order summary and payment information.
PageNotFound: Page displayed when a route is not found.

##### Context
CartContext: Context provider for managing the shopping cart state.

###### Dependencies
react: JavaScript library for building user interfaces.
react-router-dom: React router library for handling routing.
firebase: Firebase SDK for authentication.
react-icons: Library providing icons for React applications.

###### Technologies Used
React: Frontend framework for building the user interface.
React Router: For handling client-side routing.
Firebase: Backend service for authentication and data storage.
Tailwind CSS: Utility-first CSS framework for styling.

##### Usage
Explore featured products and promotions on the Home page.
Navigate to different product categories using the Categories page.
Click on a product to view its details on the ProductDetail page.
Add products to the cart and proceed to checkout.
Sign in or sign up to manage your account and view order history.
