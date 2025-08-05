import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Layout/Header"; // Adjust the import path as necessary
import Footer from "./Components/Layout/Footer"; // Adjust the import path as necessary
import Home from "./Components/Pages/Home"; // Create Home component
import About from "./Components/Pages/About"; // Create About component
import Contact from "./Components/Pages/Contact"; // Create Contact component
import Club from "./Components/Pages/Club"; // Create Contact component

import { LanguageProvider } from "./contexts/LanguageContext"; // Adjust the path

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/Club" element={<Club />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />

          {/* Auth Route */}
          <Route
            path="/login"
            element={
              user ? <Navigate to="/dashboard" replace /> : <LoginForm />
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/elections"
            element={
              <ProtectedRoute>
                <Elections />
              </ProtectedRoute>
            }
          />
          <Route
            path="/elections"
            element={
              <ProtectedRoute>
                <Elections />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Club"
            element={
              <ProtectedRoute>
                <Clubs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/complaints"
            element={
              <ProtectedRoute>
                <Complaints />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Latest"
            element={
              <ProtectedRoute>
                <Latest />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <div className="text-center py-12">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Analytics Dashboard
                  </h1>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <div className="text-center py-12">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    User Profile
                  </h1>
                  <p className="text-gray-600">Coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { background: "#363636", color: "#fff" },
        }}
      />
    </Router>
  );
}

export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
