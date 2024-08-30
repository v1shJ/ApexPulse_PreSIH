import Homepage from './homepage'
// import Login from './login'
import Statusbar from '../components/statusbar';
import Navbar from '../components/navbar.jsx';
import Sidebar from '../components/sidebar.jsx';
import { useState } from "react";
import DownNavbar from '../components/navfooter.jsx';
import ProfilePage from '../components/profilepage.jsx';

import {
  View,
} from "react-native";

//Code to have it working on web

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});


export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const [showProfile, setShowProfile] = useState(false);

  // Initially should be false
  // Here auth code should be placed

  // if (loggedIn) {
  //   return <Homepage />
  // }
  // else {
  //   return <Login />
  // }
  const username= "Ahaan Desai";

  return(
    <>
     <View className="flex-1 bg-black p-4">
      <Statusba
      <Navbar setShowProfile={setShowProfile} showProfile={showProfile} username={username}/>
      {showProfile ? (
       <ProfilePage username={username}/>
        ) :(
          <Homepage username={username} />
        )}
     </View>
    <DownNavbar/>
    </>
  );

}