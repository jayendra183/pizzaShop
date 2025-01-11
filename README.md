# Pizza Shop Management Application

A React-based pizza shop management system that helps track orders through different stages of preparation and delivery.

## Features

- Order placement with customizable options
- Real-time order tracking through different stages
- Automatic time tracking for each stage
- Order cancellation functionality
- Delivery tracking
- Responsive design for all devices
- Stage-wise organization of orders
- Time-based alerts for delayed orders

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- React Router

## Installation

1. Clone the repository
```bash
git clone https://github.com/jayendra183/pizzaShop.git

```

2. Install dependencies
```bash
npm install
```


## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Build for production:
```bash
npm run build
```

3. Preview production build:
```bash
npm run preview
```


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

The application will be available at `http://localhost:5173` (or a different port if 5173 is occupied)

## Project Structure

```
src/
  ├── components/            # React components
  │   ├── OrderForm.jsx     # Order placement form
  │   ├── PizzaCard.jsx     # Individual pizza order card
  │   ├── PizzaStagesSection.jsx   # Stages display section
  │   └── MainSection.jsx   # Main tracking section
  ├── redux/                # Redux state management
  │   ├── store.js         # Redux store configuration
  │   └── pizzaSlice.js    # Pizza-related reducers and actions
  ├── utils/               # Utility functions
  │   └── timeformat.js    # Time formatting utilities
  ├── App.jsx             # Main application component
  ├── main.jsx            # Application entry point
  └── index.css           # Global styles
```

## Usage

1. Navigate to the "Place Order" page to create new pizza orders
2. Select customization options:
   - Pizza Type (Veg/Non-Veg)
   - Size (Small/Medium/Large)
   - Base (Thin/Thick)

3. Track orders in the "Track Orders" page:
   - View orders in different stages
   - Monitor time spent in each stage
   - Cancel orders if needed
   - Track delivered orders count

## Key Features Explained

### Order States
- Order Placed
- Order in Making
- Order Ready
- Order Picked

### Time Tracking
- Each stage has a 3-minute threshold
- Orders are highlighted when delayed
- Total time spent is tracked for each order

### Order Management
- Maximum 10 concurrent orders
- Automatic sorting based on delays
- Cancel option available before the "Ready" state

## Common Issues and Solutions

1. If the application fails to start:
   - Check if all dependencies are installed
   - Verify Node.js version
   - Clear npm cache: `npm cache clean --force`

2. If styles are not loading:
   - Make sure your development server is running
   - Check for CSS compilation errors
   - Clear browser cache

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

User Interface Images:

![alt text](https://drive.google.com/uc?id=1orEpXpUJA-AiLQGC7JJ80A-MnIn7loDx)

![alt text](https://drive.google.com/uc?id=1YIyveDo3uKb7P4_kYEd3y0sIQT9aVNrB)

![alt text](https://drive.google.com/uc?id=1YtH7wmUgh2O8i_TlfWgCBoon218o7pEy)

