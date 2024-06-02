import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardView from "@/views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";

// TODO: PARA PODER AGREGAR LOS @ DELANTE DE LOS COMPONENTES ES UNA DEPENDENCIA QUE SE LLAMA @types/node

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<DashboardView />} index />
                <Route path="/projects/create" element={<CreateProjectView />}  />
                <Route path="/projects/:projectId/edit" element={<EditProjectView />}  />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}