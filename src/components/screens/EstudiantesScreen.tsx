import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCursoPorId } from "../../http/api"
import { EstudianteCard } from "../ui/EstudianteCard"
import styles from "./EstudiantesScreen.module.css"

//declaro los datos que uso
type Estudiante = {
    id: number
    nombre: string
    edad: number
}
type Curso = {
    id: number
    nombre: string
    estudiantes: Estudiante[]
}
export const EstudiantesScreen = () => {
    const {cursoId} = useParams() //obtengo el id desde la URL

    const [curso, setCurso] = useState<Curso | null>(null) 

    useEffect(() => {
        if (cursoId) {
        //pido el curso a la API usando el id
        getCursoPorId(cursoId)
            .then(data => setCurso(data)) //lo guardo en el estado
            .catch(err => console.error("Error al cargar el curso", err))
        }
    }, [cursoId])
    return (
        <div className={styles.containerScreen}>
            <div className={styles.containerContent}>
                <h1>Estudiantes</h1>
                {curso ? (
                    <div>
                        <h2>{curso.nombre}</h2>

                        <div className={styles.containerCard}>
                            {curso.estudiantes.map(est => (
                                <EstudianteCard
                                key={est.id}
                                id={est.id}
                                nombre={est.nombre}
                                edad={est.edad}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No se encontró el curso o no hay parámetro en la URL.</p>
                )}
            </div>
        </div>
    )
}
