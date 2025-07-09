# ALX Listing App

A modern Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This project demonstrates the creation of a property listing page with reusable components and a clean, scalable architecture.

## Project Overview

This application serves as the foundation for a property listing platform, featuring:
- Property cards with images, descriptions, and pricing
- Reusable UI components (Button, Card)
- TypeScript for type safety
- Responsive design with TailwindCSS
- Clean project structure following best practices

## Project Structure
alx-listing-app/
├── pages/                  # Next.js Pages Router
│   ├── _app.tsx           # App wrapper component
│   └── index.tsx          # Home page
├── components/
│   └── common/            # Reusable UI components
│       ├── Button.tsx     # Button component
│       └── Card.tsx       # Property card component
├── interfaces/
│   └── index.ts           # TypeScript type definitions
├── constants/
│   └── index.ts           # Application constants and sample data
├── public/
│   └── assets/            # Static images and SVG files
├── styles/
│   └── globals.css        # Global styles with TailwindCSS
└── README.md              # Project documentation



## Directory Explanations

- **`components/common/`**: Contains reusable UI components that can be used across different pages
- **`interfaces/`**: TypeScript interfaces for type safety and better code documentation
- **`constants/`**: Application constants, configuration settings, and sample data
- **`public/assets/`**: Static assets like images and SVG files
- **`pages/`**: Next.js pages using the Pages Router for file-based routing

## Technologies Used

- **Next.js**: React framework for production-ready applications
- **TypeScript**: Type safety and better developer experience
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-listing-app
Install dependencies:

bash
npm install
Run the development server:

bash
npm run dev
Open your browser and navigate to http://localhost:3000
Available Scripts
npm run dev: Start the development server
npm run build: Build the application for production
npm run start: Start the production server
npm run lint: Run ESLint to check code quality
Features
Responsive Design: Works seamlessly on desktop and mobile devices
Property Cards: Display property information with images, pricing, and amenities
Reusable Components: Modular Button and Card components
Type Safety: Full TypeScript integration for better code quality
Modern Styling: TailwindCSS for clean, consistent UI
Development Notes
The project uses the Pages Router (not App Router) for routing
All components are fully typed with TypeScript interfaces
TailwindCSS is configured for optimal performance and customization
Sample data is provided in constants for development purposes
Next Steps
Add property search functionality
Implement property filtering and sorting
Add property detail pages
Integrate with a backend API
Add user authentication
Implement booking functionality
Contributing
Fork the repository
Create a feature branch
Make your changes
Test thoroughly
Submit a pull request
License
This project is for educational purposes as part of the ALX program.



## STEP 11: Add Placeholder Assets

Create some placeholder images in your `public/assets/` folder. You can:

1. Download some property images from free stock photo sites
2. Save them as:
   - `cabin.jpg`
   - `apartment.jpg`
   - `placeholder.jpg` (fallback image)

Or create simple placeholder files for now and replace them later.

## STEP 12: Test Your Application

1. Make sure your development server is running:
```bash
npm run dev
Open http://localhost:3000 in your browser
You should see:
A header with "ALX Listing App"
A hero section with a gradient background
Property cards displaying your sample data
Working buttons with hover effects