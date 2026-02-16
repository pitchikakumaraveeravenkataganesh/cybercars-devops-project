"use client";

import { useState } from "react";

export default function Cars() {

  const [activeCar,setActiveCar] = useState<any>(null);

  const cars = [
    {
      name:"Cyber Tesla",
      price:"$120,000",
      images:[
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
        "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
      ],
      desc:"AI powered electric performance car designed for futuristic mobility.",
      specs:["600km Range","Autopilot AI","Fast Charging","Glass Interior"]
    },
    {
      name:"Neon Lamborghini",
      price:"$450,000",
      images:[
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
        "https://images.unsplash.com/photo-1549924231-f129b911e442",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888"
      ],
      desc:"Cyberpunk hypercar with aggressive styling and V12 performance.",
      specs:["V12 Engine","350km/h Top Speed","Track Mode","Carbon Fiber"]
    },
    {
      name:"Future BMW",
      price:"$95,000",
      images:[
        "https://images.unsplash.com/photo-1555215695-3004980ad54e",
        "https://images.unsplash.com/photo-1603386329225-868f9b1ee6b9",
        "https://images.unsplash.com/photo-1590362891991-f776e747a588"
      ],
      desc:"Luxury intelligent hybrid driving with futuristic cockpit.",
      specs:["Hybrid Drive","Digital Cockpit","Adaptive Suspension"]
    },
    {
      name:"Hyper Audi",
      price:"$130,000",
      images:[
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
      ],
      desc:"German engineering fused with advanced AWD technology.",
      specs:["Quattro AWD","Laser Lights","Sport Mode+"]
    },
    {
      name:"Quantum Porsche",
      price:"$210,000",
      images:[
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
        "https://images.unsplash.com/photo-1502877338535-766e1452684a",
        "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2"
      ],
      desc:"Precision racing DNA with next-generation turbo power.",
      specs:["Twin Turbo","Active Aero","Track Mode"]
    },
    {
      name:"Neo Mercedes AMG",
      price:"$180,000",
      images:[
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
      ],
      desc:"Luxury AMG performance with futuristic aerodynamic design.",
      specs:["AMG Performance","Dynamic Exhaust","Night Interior"]
    }
  ];

  return (
    <main style={{background:"#000",color:"white"}}>

      {/* 🔥 FLOATING CINEMATIC HERO */}
      <section style={{
        height:"95vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        background:"linear-gradient(180deg,#001111,#000)",
        textAlign:"center"
      }}>
        <h1 style={{
          fontSize:"90px",
          color:"cyan",
          letterSpacing:"6px",
          textShadow:"0 0 60px cyan"
        }}>
          CYBERCAR SHOWROOM
        </h1>

        <p style={{marginTop:"20px",fontSize:"24px",opacity:0.8}}>
          FINAL NEXT-LEVEL CINEMATIC EXPERIENCE
        </p>
      </section>

      {/* 🔥 CAR GRID */}
      <section style={{padding:"80px"}}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
          gap:"60px"
        }}>
          {cars.map((car,i)=>(
            <div key={i}
              style={{
                borderRadius:"20px",
                overflow:"hidden",
                background:"rgba(255,255,255,0.05)",
                transition:"0.4s"
              }}
              onMouseOver={(e:any)=>{
                e.currentTarget.style.transform="perspective(1200px) rotateY(10deg) scale(1.05)";
                e.currentTarget.style.boxShadow="0 0 50px cyan";
              }}
              onMouseOut={(e:any)=>{
                e.currentTarget.style.transform="none";
                e.currentTarget.style.boxShadow="none";
              }}
            >

              <img
                src={car.images[0]+"?auto=format&fit=crop&w=900&q=70"}
                style={{
                  width:"100%",
                  height:"260px",
                  objectFit:"cover"
                }}
              />

              <div style={{padding:"25px"}}>
                <h2 style={{color:"cyan"}}>{car.name}</h2>
                <p>{car.price}</p>

                <button
                  onClick={()=>setActiveCar(car)}
                  style={{
                    marginTop:"15px",
                    padding:"12px 25px",
                    borderRadius:"30px",
                    background:"transparent",
                    border:"1px solid cyan",
                    color:"cyan",
                    cursor:"pointer",
                    boxShadow:"0 0 15px cyan"
                  }}>
                  View Details
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 🔥 PREMIUM MODAL */}
      {activeCar && (
        <div
          onClick={()=>setActiveCar(null)}
          style={{
            position:"fixed",
            inset:0,
            background:"rgba(0,0,0,0.9)",
            backdropFilter:"blur(12px)",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            zIndex:999
          }}
        >
          <div
            onClick={(e)=>e.stopPropagation()}
            style={{
              background:"#000",
              borderRadius:"20px",
              padding:"40px",
              width:"85%",
              maxHeight:"90vh",
              overflowY:"auto",
              boxShadow:"0 0 60px cyan"
            }}
          >
            <h1 style={{fontSize:"50px",color:"cyan"}}>
              {activeCar.name}
            </h1>

            <h2>{activeCar.price}</h2>

            <div style={{
              display:"flex",
              gap:"20px",
              overflowX:"auto",
              marginTop:"20px"
            }}>
              {activeCar.images.map((img:string,i:number)=>(
                <img
                  key={i}
                  loading={i===0?"eager":"lazy"}
                  src={img+"?auto=format&fit=crop&w=900&q=70"}
                  style={{
                    height:"260px",
                    borderRadius:"15px",
                    transition:"0.4s"
                  }}
                  onMouseOver={(e:any)=>e.currentTarget.style.transform="scale(1.1)"}
                  onMouseOut={(e:any)=>e.currentTarget.style.transform="scale(1)"}
                />
              ))}
            </div>

            <p style={{marginTop:"30px",fontSize:"20px"}}>
              {activeCar.desc}
            </p>

            <div style={{marginTop:"20px"}}>
              {activeCar.specs.map((s:string,i:number)=>(
                <div key={i}
                  style={{
                    marginTop:"10px",
                    borderLeft:"3px solid cyan",
                    paddingLeft:"15px"
                  }}>
                  {s}
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </main>
  );
}

