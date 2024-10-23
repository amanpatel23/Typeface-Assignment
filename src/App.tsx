import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Chat from "./pages/Chat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
  ]);

  return (
    <div className="relative bg-[#dcf8c6] m-auto w-[450px] h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
