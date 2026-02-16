"use client";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "system-ui",
      }}
    >
      {/* 🔥 CAR BACKGROUND */}
      <img
        src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(60%)",
          zIndex: -2,
        }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg,rgba(0,0,0,0.8),rgba(0,0,0,0.9))",
          zIndex: -1,
        }}
      />
     <div style={{
  position:"fixed",
  top:0,
  width:"100%",
  display:"flex",
  justifyContent:"center",
  gap:"30px",
  padding:"20px",
  color:"white",
  zIndex:10
}}>
  <Link href="/">Home</Link>
  <Link href="/cars">Cars</Link>
</div>


      {/* HERO CONTENT */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#00ffff",
          padding: "20px",
        }}
      >
        {/* MAIN TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "80px",
            fontWeight: "900",
            letterSpacing: "4px",
            textTransform: "uppercase",
            textShadow:
              "0px 0px 20px rgba(0,255,255,0.8),0px 0px 40px rgba(0,255,255,0.4)",
          }}
        >
          CYBERCARS
        </motion.h1>

        {/* SUB TITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            fontSize: "24px",
            color: "#fff",
            marginTop: "20px",
            letterSpacing: "2px",
          }}
        >
          EXPERIENCE THE FUTURE OF DRIVING
        </motion.p>

        {/* BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: "40px",
            padding: "15px 35px",
            borderRadius: "50px",
            border: "1px solid cyan",
            background: "transparent",
            color: "cyan",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(0,255,255,0.6)",
          }}
        >
          Explore Cars →
        </motion.button>
      </div>
    </main>
  );
}

