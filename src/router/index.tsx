import AppLayout from "@/views/app/AppLayout";
import Main from "@/views/app/AppLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} />
  )
)