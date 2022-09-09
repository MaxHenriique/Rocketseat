import { FunnelSimple, Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media-exp1.licdn.com/dms/image/C4E03AQHDIxZEmX8ZjA/profile-displayphoto-shrink_200_200/0/1645044169687?e=1666224000&v=beta&t=AJtW6d_xkpNy98l3yoI92bnuCEXjWUOdh5OR1sZCQgI" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Henrique Fontes</strong>
                            <time title="17 de agosto ás 09:28" dateTime="2022-08-17 09:27:30">Cerca de 1h atrás</time>
                        </div>


                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>


                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}