import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/routes";
const routes = createBrowserRouter(ROUTES);
import "./App.css";
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
