const namespace = 'card'

export const Card = (props) => {
  const {content, author} = props;
  return (
    <article className={namespace}>
      <p>{content}</p>
      <span>{author}</span>
    </article>
  )
}
