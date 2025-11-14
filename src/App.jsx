import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NewsPage from "./pages/NewsPage";
import FixturesPage from "./pages/FixturesPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-1 w-full min-w-0">
          <Routes>
            <Route path="/" element={<NewsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/fixtures" element={<FixturesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
