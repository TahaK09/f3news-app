import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/custom/Nav";
import Footer from "./components/custom/Footer";

import { useUser } from "@clerk/clerk-react";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    // Handle loading state
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        THis is loading
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
