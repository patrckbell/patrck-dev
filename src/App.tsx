import React from 'react';
import './App.css';
import { motion } from "framer-motion";

function App() {
  return (<motion.div
    className="container"
    whileHover={{ scale: 1.2, rotate: 180}}
    whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}>
      <img src="../LOGO2.png"></img>
    </motion.div>);
}

export default App;
