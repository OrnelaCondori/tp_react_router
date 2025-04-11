import styles from "./EstudianteCard.module.css"

interface EstudianteCardProps {
    id: number,
    nombre: string,
    edad: number
}

export const EstudianteCard = ({ nombre, edad}: EstudianteCardProps) => {
    return (
        <div className={styles.containerCard}>
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
        </div>
    )
}
