// // components/BackgroundSymbols.tsx
// "use client"; // في حالة استخدام Next.js App Router

// import { useEffect, useState } from "react";

// const symbols = ["</>", "{}", "=>", ";", "'", '"', "/", "\\"];

// function CodePatternBackground() {
//   const [items, setItems] = useState<any[]>([]);

//   useEffect(() => {
//     const generate = () => {
//       const generated = Array.from({ length: 1200 }, (_, i) => {
//         const symbol = symbols[Math.floor(Math.random() * symbols.length)];
//         const x = Math.random() * 100;
//         const y = Math.random() * 100;
//         const fontSize = Math.random() * 12 + 10;
//         const rotate = Math.random() * 360;
//         const delay = Math.random();

//         return (
//           <text
//             key={i}
//             x={`${x}%`}
//             y={`${y}%`}
//             fill="white"
//             fontSize={fontSize}
//             fontFamily="monospace"
//             transform={`rotate(${rotate})`}
//             style={{
//               opacity: 0,
//               animation: `fade-in 0.1s ease ${delay}s forwards`,
//             }}
//           >
//             {symbol}
//           </text>
//         );
//       });
//       setItems(generated);
//     };

//     requestAnimationFrame(generate);
//   }, []);

//   return (
//     <>
//       <svg
//         className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
//         style={{ background: "transparent" }}
//       >
//         {items}
//       </svg>

//       <style jsx>{`
//         @keyframes fade-in {
//           to {
//             opacity: 0.05;
//           }
//         }
//       `}</style>
//     </>
//   );
// }
// export default CodePatternBackground;
