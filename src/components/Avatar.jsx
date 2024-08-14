import styles from './Avatar.module.css'

//utilizando o processo de desestruturação
// const user = { name: "Diego" }
// const { name } = user
// é como se eu arrancasse o { name } do objeto user
export function Avatar({hasBorder = true, src}) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} />
    )
}