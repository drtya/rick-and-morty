import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Episodes from "../pages/episodes/Episodes";
import EpisodeById from "../pages/episodes/EpisodeById";
import { Provider } from "react-redux";
import store from "@/app/store";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Episodes },
      {
        path: "/episode/:episodeId",
        Component: EpisodeById,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
