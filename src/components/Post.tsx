import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'


interface IPost{
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: {
        type: string;
        content: string;
    }[];
    publishedAt: Date;
}



export function Post({author, content, publishedAt}: IPost){

    const [comments, setComments] = useState(['Top, parabéns Paulo!'])
    const [newCommentText, setNewCommentText] = useState('')


    const publishedDateFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()

        setComments(state => [...state, newCommentText])
        setNewCommentText('')
    }
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event?.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }



    function deleteComment(commentToDelete: string){
        // console.log(content)
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event?.target.setCustomValidity('Esse campo é obrigatório')
    }

    const isNewCommentInputEmpty = !newCommentText.length;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    dateTime={publishedAt.toISOString()}
                    title={publishedDateFormatted}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    switch (line.type) {
                        case "paragraph":
                            return <p key={line.content}>{line.content}</p>;
                        case "link":
                            return (
                                <p key={line.content}>
                                    <a target="_blank" href="https://phpaulohenrique.github.io/doctor-care_nlw-return-origin/">{line.content}</a>
                                </p>
                            );
                        default:
                            return null;
                    }
                    // if(line.type === 'paragraph'){
                    //     return <p>{line.content}</p>s
                    // }else if(line.type === 'link'){
                    //     return <p><a href="#">{line.content}</a></p>
                    // }
                })}
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}
            >
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                    name="comment"
                    id="comment"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    required
                    onInvalid={handleNewCommentInvalid}
                />

                <footer>
                    <button type="submit" disabled={isNewCommentInputEmpty}>
                        Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    );
}