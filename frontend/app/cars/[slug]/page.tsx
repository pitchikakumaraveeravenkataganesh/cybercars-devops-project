export const cars:any = {

  "cyber-tesla": {
    name:"CYBER TESLA",
    price:"$120,000",
    images:[
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
      "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    ],
    desc:"Cyber Tesla blends AI intelligence with futuristic electric performance and premium design.",
    specs:["0-100 km/h: 2.9s","Range: 600km","Autopilot AI","Fast Charging"]
  },

  "neon-lambo": {
    name:"NEON LAMBORGHINI",
    price:"$450,000",
    images:[
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
      "https://images.unsplash.com/photo-1549924231-f129b911e442",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888"
    ],
    desc:"Cyberpunk inspired V12 hypercar with aggressive styling.",
    specs:["V12 Engine","Top Speed 350km/h","Track Mode","Active Aero"]
  },

  "future-bmw": {
    name:"FUTURE BMW",
    price:"$95,000",
    images:[
      "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      "https://images.unsplash.com/photo-1603386329225-868f9b1ee6b9",
      "https://images.unsplash.com/photo-1590362891991-f776e747a588"
    ],
    desc:"Hybrid intelligent driving meets luxury innovation.",
    specs:["Hybrid Drive","Digital Cockpit","Adaptive Suspension"]
  },

  "hyper-audi": {
    name:"HYPER AUDI",
    price:"$130,000",
    images:[
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
    ],
    desc:"German engineering fused with futuristic AWD performance.",
    specs:["Quattro AWD","Laser Lights","Sport Mode+"]
  },

  "quantum-porsche": {
    name:"QUANTUM PORSCHE",
    price:"$210,000",
    images:[
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a",
      "https://images.unsplash.com/photo-1584345604476-8ec5f452d1f2"
    ],
    desc:"Precision racing DNA with next-generation turbo performance.",
    specs:["Twin Turbo","Track Mode","Active Aero"]
  }

};

export function generateStaticParams() {
  return Object.keys(cars).map(slug => ({ slug }));
}

export default function CarDetails({ params }: any) {

  const car = cars[params?.slug];

  if(!car){
    return (
      <main style={{background:"#000",color:"white",padding:"100px"}}>
        <h1>Loading Car Details...</h1>
      </main>
    );
  }

  return (
    <main style={{background:"#000",color:"white",minHeight:"200vh"}}>

      {/* 🚀 ULTRA FAST IMAGE STRIP */}
      <div style={{
        display:"flex",
        gap:"20px",
        overflowX:"auto",
        padding:"30px"
      }}>
        {car.images.map((img:string,i:number)=>(
          <img
            key={i}
            loading={i===0 ? "eager" : "lazy"}   // 🔥 FAST LOADING TRICK
            src={img + "?auto=format&fit=crop&w=900&q=70"} // 🔥 IMAGE OPTIMIZATION
            style={{
              height:"320px",
              borderRadius:"20px",
              objectFit:"cover",
              transition:"0.4s",
              cursor:"pointer"
            }}
            onMouseOver={(e:any)=>e.currentTarget.style.transform="scale(1.08)"}
            onMouseOut={(e:any)=>e.currentTarget.style.transform="scale(1)"}
          />
        ))}
      </div>

      <section style={{padding:"80px"}}>

        <h1 style={{
          fontSize:"70px",
          color:"cyan",
          letterSpacing:"4px",
          textShadow:"0 0 20px cyan"
        }}>
          {car.name}
        </h1>

        <h2 style={{
          fontSize:"40px",
          marginTop:"20px",
          color:"#00ffff"
        }}>
          {car.price}
        </h2>

        <p style={{
          marginTop:"30px",
          fontSize:"22px",
          lineHeight:"1.8",
          maxWidth:"900px",
          color:"#ddd"
        }}>
          {car.desc}
        </p>

        <div style={{marginTop:"60px"}}>
          {car.specs.map((s:string,i:number)=>(
            <div key={i} style={{
              marginTop:"20px",
              fontSize:"24px",
              borderLeft:"3px solid cyan",
              paddingLeft:"20px"
            }}>
              {s}
            </div>
          ))}
        </div>

      </section>

    </main>
  );
}

