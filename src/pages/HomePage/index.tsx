// const HomePage=()=> {
//     return (
//       <header>
//         <h1>Home page Vite + React</h1>
//       </header>
//     );
//   }
//   export default HomePage
import React, { useState, useEffect } from "react";
import AddStockForm from "@/components/AddStockForm";
import StockList from "@/components/StockList";
// import useWebSocket from "@/hooks/useWebSocket"; // Import the custom hook

const App: React.FC = () => {
  // const WebSocket = require('ws');

  return (
    <div>
      <h1>Stock App</h1>
      <AddStockForm />
      <StockList />
    </div>
  );
};

export default App;
