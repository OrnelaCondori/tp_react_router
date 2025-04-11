import { useNavigate } from "react-router-dom"
import styles from "./CursoCard.module.css"

interface CursoCardProps {
    id: number,
    nombre: string,
    cantidadEstudiantes: number
}

export const CursoCard = ({id, nombre, cantidadEstudiantes}: CursoCardProps) => {
    const navigate = useNavigate() // para redirigir a la pagina de estudiantes
    return (
        <div className={styles.containerCard}>
            <div className={styles.contentCard}>
                <div className={styles.containerContent}>
                    <div>
                        <h2>{nombre}</h2>
                        <p>Estudiantes: {cantidadEstudiantes}</p>
                    </div>
                    <button onClick={() => navigate(`/estudiantes/${id}`)}>Ver estudiantes</button>
                </div>
            </div>
        </div>
    )
}
