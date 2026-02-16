"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.div
      initial={{ y:-60 }}
      animate={{ y:0 }}
      style={{
        position:"fixed",
        top:0,
        width:"100%",
        backdropFilter:"blur(20px)",
        background:"rgba(0,0,0,0.4)",
        display:"flex",
        justifyContent:"center",
        gap:"40px",
        padding:"20px",
        zIndex:100,
        color:"cyan",
        letterSpacing:"2px",
        fontWeight:"bold"
      }}
    >
      <Link href="/">HOME</Link>
      <Link href="/cars">CARS</Link>
    </motion.div>
  );
}
