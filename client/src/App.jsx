import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/custom/Nav";
import Footer from "./components/custom/Footer";
import { OrbitProgress } from "react-loading-indicators";

import { useUser } from "@clerk/clerk-react";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    // Handle loading state
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <OrbitProgress
          variant="track-disc"
          color="#2db6da"
          size="small"
          text=""
          textColor=""
        />
      </div>
    );
  }

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
