import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CursosScreen } from "../components/screens/CursosScreen"
import { EstudiantesScreen } from "../components/screens/EstudiantesScreen"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/cursos" />} />
                <Route path="/cursos" element={<CursosScreen />} />
                <Route path="/estudiantes/:cursoId" element={<EstudiantesScreen />} />
            </Routes>
        </BrowserRouter>
    )
}
