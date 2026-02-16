import { useEffect } from "react";
import { useNavigate } from "react-router";

// export default function Main() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect to login after 3 seconds
//     const timer = setTimeout(() => {
//       navigate("/signup");
//     }, 3000);

//     // Clean up the timer
//     return () => clearTimeout(timer);
//   }, [navigate]);

//   return (
//     <main className="bg-[#2E0A8C] h-screen flex flex-col items-center justify-center">
//       <h3 className="text-5xl font-bold text-white animate-pulse tracking-wide">
//         cignifi
//       </h3>

//       {/* Optional spinner */}
//       <div className="mt-6 w-12 h-12 border-4 border-white border-t-indigo-300 rounded-full animate-spin"></div>
//     </main>
//   );
// }
// import React from "react";

import React from "react";

export default function Main() {
  return (
    <main className="bg-[#2E0A8C] h-screen flex items-center justify-center">
      <h3 className="text-5xl font-bold text-white animate-pulse tracking-wide">
        cignifi
      </h3>
    </main>
  );
}
