import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import assets from "../../assets";
export default function Splash() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, []);

  return (
    <LottieView
    source={require("../Assets/theme/animations/food_animation.json")}
    autoPlay
    style={{ 
      width: '100%',
      height: '100%',
      backgroundColor:'white'
    }}
  />
  
  );
}