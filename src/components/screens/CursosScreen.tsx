import { useEffect, useState } from "react"
import { getCursos } from "../../http/api"
import { CursoCard } from "../ui/CursoCard"
import styles from "./CursosScreen.module.css"

interface Estudiante {
    id: number
    nombre: string
    edad: number
}
interface Curso {
    id: number
    nombre: string
    estudiantes: Estudiante[]
}
export const CursosScreen = () => {
    const [cursos, setCursos] = useState<Curso[]>([]) //guardo los cursos de la API

    useEffect(() => {
        //traigo los cursos 
        getCursos().then(setCursos)
    }, []
    )

    return (
        <div className={styles.container}>
            <div className={styles.containerContent}>
                <div className={styles.TitleContent}>
                    <h1>Lista de Cursos</h1>
                </div>
                <div className={styles.cardContainer}>
                    {cursos.map((curso) => (
                        <CursoCard
                        key={curso.id}
                        id={curso.id}
                        nombre= {curso.nombre}
                        cantidadEstudiantes={curso.estudiantes.length}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
