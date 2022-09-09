import styles from './Avatar.module.css';

// Desestruturação
// const user = { name: "Max" }
// const { name } = user;


export function Avatar({ hasBorder = true, src }) {

    // const hasBorder = props.hasBorder != false; pode ser usado tambem
    
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
        />
    )
}





