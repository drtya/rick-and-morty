import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Provider } from "react-redux";
import store from "@/app/store";
import Layout from "./layout";
import EpisodeById from "@/pages/EpisodeById";
import Episodes from "@/pages/Episodes";

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
