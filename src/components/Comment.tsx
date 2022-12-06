import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface IComment {
    content: string;
    onDeleteComment: (content: string) => void;
}

export function Comment({ content, onDeleteComment }: IComment) {

    // const generateLikes = Math.floor(Math.random() * 10);

    const [likeCount, setLikeCount] = useState(5);

    const likeInitialCount = 5;

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment(){

        if (likeInitialCount == likeCount) {
            let a = likeCount + 1
            setLikeCount((state) => state + 1);
            return;
        }
        if (likeCount > likeInitialCount) {
            setLikeCount((state) => state - 1);
            return;
        }

    }

    const userLiked = likeCount > likeInitialCount

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time
                                dateTime="2022-12-02-05:01:12"
                                title="02 de Dezembro de 2022 ás 05:01"
                            >
                                Agora mesmo
                            </time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário"
                        >
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={() => handleLikeComment()}>
                        <ThumbsUp size={20} color={userLiked ? 'green' : 'gray'} />
                        Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}