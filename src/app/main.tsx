import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Episodes from "../pages/episodes/Episodes";
import EpisodeById from "../pages/episodes/EpisodeById";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Episodes,
  },
  {
    path: "episode",
    children: [
      {
        path: ":episodeId",
        Component: EpisodeById,
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
    <RouterProvider router={router} />
);
