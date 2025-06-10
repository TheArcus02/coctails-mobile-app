# Cocktails Mobile App

A React Native mobile application for browsing cocktail recipes with a built-in timer and SMS sharing functionality.

## Prerequisites

- Node.js (v18 or newer)
- pnpm
- Expo Go app on your mobile device

## Installation

1. Clone the repository:

```bash
git clone https://github.com/TheArcus02/coctails-mobile-app.git
cd coctails-mobile-app
```

2. Install dependencies:

```bash
pnpm install
```

## Running the App

1. Start the development server:

```bash
pnpm start
```

2. Scan the QR code with your mobile device

## Tech Stack

- React Native
- Expo
- TypeScript
- TailwindCSS (via NativeWind)
- Lottie for animations
- lucide-react-native for icons
- expo-sms for SMS functionality

## Project Structure

```
src/
  ├── app/              # Main app views
  ├── components/       # React components
  │   ├── cocktails/    # Cocktail-related components
  │   ├── features/     # Main features
  │   ├── navigation/   # Navigation components
  │   └── ui/          # UI components
  ├── hooks/           # Custom React hooks
  ├── lib/             # Libraries and tools
  ├── types/           # TypeScript definitions
  └── utils/           # Utility functions
```
