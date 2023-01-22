import { format, formatDistanceToNow } from 'date-fns';
import enGB from 'date-fns/locale/en-GB';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css'

export function Post({author, content, publishedAt}) {
  
  const publishDateFormatted = format(publishedAt, "d'th' LLLL 'at' HH:mm'h'", {
    locale: enGB,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enGB,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/LeonardoMarquesDias.png" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Your feedback</strong>

        <textarea 
          placeholder='your comment...'
        />

        <footer>
          <button type="submit">Post Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}> 
        <Comment />
        <Comment />
      </div>
    </article>
  )
}

