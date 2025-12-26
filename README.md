# Football Club Website - Learning Project

## 📚 Project Purpose

This project is a **learning-focused web development course project** designed to help students understand and practice modern web technologies. It's a full-featured football club management website that serves as a practical platform to learn:

- **Frontend Development**: Building interactive user interfaces with React
- **State Management**: Managing application state with Redux Toolkit
- **Data Caching**: Implementing smart caching strategies to optimize performance
- **Routing**: Creating multi-page applications with React Router
- **Styling**: Responsive design with Tailwind CSS
- **Backend Integration**: Connecting to Firebase for authentication and data management
- **API Integration**: Fetching and displaying data from external football APIs
- **Build Tools**: Using modern development tools like Vite
- **Version Control**: Working with Git and collaborative development

## 🛠️ Technologies Used

This project incorporates a modern web development stack:

### Core Technologies
- **React 19** - Frontend JavaScript library for building user interfaces
- **Redux Toolkit 2** - Official Redux toolset for efficient state management
- **React-Redux** - Official React bindings for Redux
- **Vite 7** - Next-generation build tool for faster development
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **React Router 7** - Client-side routing for navigation

### Additional Libraries
- **Firebase 12** - Backend services (Authentication, Database)
- **Axios** - HTTP client for API requests
- **Swiper** - Modern touch slider for image/content carousels
- **Lucide React** - Beautiful icon library
- **React Content Loader** - Loading skeleton components

### Development Tools
- **ESLint** - Code linting and quality checks
- **Autoprefixer** - Automatic CSS vendor prefixing

## 🌟 Features

This football club website includes:

- **Home Page**: Landing page with hero banner and highlights (with Redux caching)
- **News Section**: Browse and read club news articles
- **Fixtures & Results**: View upcoming matches and past game results (cached with Redux)
- **Standings**: League table and team rankings (smart data caching)
- **Club Information**: Browse all clubs in the league (optimized loading)
- **Club Details**: Detailed club information with breadcrumb navigation
- **Players & Coaches**: Team roster with player and manager information (cached data)
- **Legend Players**: Hall of fame section
- **Videos**: Multimedia content gallery
- **User Authentication**: Login, Register, and Password Recovery
- **User Profiles**: Personal user account management
- **Admin Dashboard**: Administrative panel for content management

### ⚡ Performance Features
- **Smart Caching**: Data cached in Redux store to prevent unnecessary API calls
- **Stale Data Detection**: Automatic re-fetch after 5 minutes
- **Optimized Navigation**: No loading screens when revisiting pages with cached data
- **Loading States**: Skeleton loaders for better UX during initial data fetch

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager (comes with Node.js)
- **Git** - Version control system
- A code editor like **VS Code**
- Basic knowledge of JavaScript and React

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd cfl_wct_course_s1
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### 3. Firebase Configuration

Create a Firebase project and add your configuration:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Get your Firebase config credentials
4. Update `src/firebase/firebaseClient.js` with your credentials

### 4. Run the Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (default Vite port).

## 📜 Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
src/ (Redux integrated)
│   ├── FixturesPage.jsx # Fixtures listing (Redux cached)
│   ├── ResultsPage.jsx  # Results listing (Redux cached)
│   ├── StandingPage.jsx # League standings (Redux cached)
│   ├── Club.jsx         # Clubs listing (Redux cached)
│   ├── ClubDetails.jsx  # Club details page (Redux cached)
│   ├── CoachPlayers.jsx # Team squad page (Redux cached)
│   ├── NewsPage.jsx # News listing
│   ├── Login.jsx    # Authentication pages
│   └── admin/       # Admin-specific pages
├── routes/          # Route configuration
├── services/        # API services and mock data
│   ├── API.js       # Football API integration
│   └── mockData.js  # Fallback mock data
├── store/           # Redux store configuration
│   ├── store.js     # Redux store setup
│   └── slices/      # Redux slices
│       └── footballSlice.js  # Football data state management
├── firebase/        # Firebase configuration
├── App.jsx          # Main application component
└── main.jsx         # Application entry point (Redux Provider)
│   ├── Login.jsx    # Authentication pages
│   └── admin/       # Admin-specific pages
├── routes/          # Route configuratiouseDispatch, useSelector, and custom hooks
3. **Redux State Management**: Centralized state with Redux Toolkit
   - Creating slices and reducers
   - Async operations with createAsyncThunk
   - Selecting data from the store with useSelector
   - Dispatching actions with useDispatch
4. **Smart Caching Strategies**: Implementing time-based cache invalidation
5. **Routing & Navigation**: Multi-page application with React Router
6. **Responsive Design**: Mobile-first approach with Tailwind CSS
7. **Authentication**: User login/register with Firebase
8. **Data Fetching**: Async operations and API integration with caching
9. **Performance Optimization**: Reducing unnecessary API calls and re-renders
10. **Form Handling**: Input validation and submission
11. **Deployment**: Building and deploying a production application
and Redux DevTools browser extensions
- **Console**: Check browser console for errors and warnings
- **Redux DevTools**: Install the extension to inspect state changes and time-travel debug
- **Cache Strategy**: Data is cached for 5 minutes - clear localStorage if testing fresh fetches
- **API Rate Limits**: Be mindful of API rate limits when testing

## 📊 Redux DevTools

To inspect Redux state and actions:

1. Install [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools)
2. Open your browser's developer tools
3. Navigate to the Redux tab
4. Inspect state, actions, and time-travel through state change

This project uses **Redux Toolkit** for state management with the following benefits:

### Why Redux?
- ✅ **Prevents re-fetching**: Data persists across page navigation
- ✅ **Centralized state**: Single source of truth for all football data
- ✅ **Smart caching**: Automatic stale data detection (5-minute cache)
- ✅ **Better UX**: Instant page loads when data is cached
- ✅ **Scalable**: Easy to add new data slices as the app grows

### Redux Store Structure
```javascript
state = {
  football: {
    // Landing page data
    fixtures: [],
    standings: [],
    topScorers: [],
    lastFetched: timestamp,
    
    // Full fixtures data
    allFixtures: [],
    allFixturesLastFetched: timestamp,
    
    // Results data
    results: [],
    resultsLastFetched: timestamp,
    
    // Full standings
    fullStandings: [],
    fullStandingsLastFetched: timestamp,
    
    // Clubs data
    clubs: [],
    clubsLastFetched: timestamp,
    
    // Team details (cached by team ID)
    teamDetails: {
      [teamId]: { manager, players, lastFetched }
    }
  }
}
```

By working on this project, you will learn:

1. **Component-Based Architecture**: Break down UI into reusable components
2. **React Hooks**: useState, useEffect, and custom hooks
3. **Routing & Navigation**: Multi-page application with React Router
4. **Responsive Design**: Mobile-first approach with Tailwind CSS
5. **Authentication**: User login/register with Firebase
6. **Data Fetching**: Async operations and API integration
7. **State Management**: Managing and sharing data across components
8. **Form Handling**: Input validation and submission
9. **Deployment**: Building and deploying a production application

## 🔧 Development Tips

- **Hot Reload**: Changes are reflected immediately in the browser
- **Component Development**: Build components in isolation before integrating
- **Styling**: Use Tailwind utility classes for consistent styling
- **Debugging**: Use React Developer Tools browser extension
- **Console**: Check browser console for errors and warnings

## 🤝 Contributing

This is a learning project. Feel free to:

- Experiment with new features
- Improve existing functionality
- Refactor code for better practices
- Add comments to explain complex logic
- Create branches for different features

## 📝 License

This project is created for educational purposes as part of a web development course.

## 👥 Team

**Year 03 - Semester 01 Web Development Course**  
Royal University of Phnom Penh (RUPP)

---

**Happy Coding! 🚀**

*Remember: The best way to learn is by doing. Don't be afraid to break things and experiment!*

