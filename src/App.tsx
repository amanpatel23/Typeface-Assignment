import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Chat from "./pages/Chat";
import { AppProvider } from "./contexts/appContext";

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
      path: "/chat/:id",
      element: <Chat />,
    },
  ]);

  return (
    <AppProvider>
      <div className="relative bg-[#dcf8c6] m-auto w-[450px] h-screen">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </AppProvider>
  );
}

export default App;
