import Homepage from "./homepage";
import Login from './login'
import Statusbar from "../components/statusbar";
import Navbar from "../components/navbar.jsx";
import Sidebar from "../components/sidebar.jsx";
import { useState, useEffect } from "react";
import DownNavbar from "../components/navfooter.jsx";
import ProfilePage from "../components/profilepage.jsx";

import { View, Text } from "react-native";

//Code to have it working on web

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setShowProfile(false);
    }
    if (showProfile) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen, showProfile]);

  const username = "Ahaan Desai";

  return (
    <>
      <View className="flex-1 bg-black">
        <Statusbar />
        {loggedIn ? (
          <>
            <Navbar
              setShowProfile={setShowProfile}
              showProfile={showProfile}
              username={username}
              setIsMenuOpen={setIsMenuOpen}
              isMenuOpen={isMenuOpen}
            />
            <Homepage username={username} />

            {showProfile ? <ProfilePage username={username} /> : <View />}

            {isMenuOpen ? (
              <Sidebar setLoggedIn={setLoggedIn} />
            ) : (
              <View />
            )}

            <DownNavbar />
          </>
        ) : (
          <Login setLoggedIn={setLoggedIn}/>
        )}
      </View>
    </>
  );
}
