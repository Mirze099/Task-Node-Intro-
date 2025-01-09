import UserRoot from "../pages/UserRoot";
import Home from "../pages/home/Home";
import CarsDetail from "../pages/details/CarsDetail";
import AddCar from "../pages/addCars/AddCar";

const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/cars/:id",
        element: <CarsDetail />,
      },
      {
        path: "/addcar",
        element: <AddCar />,
      },
    ],
  },
];

export default ROUTES;
