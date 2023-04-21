const namespace = 'title-description';

export const TitleDescription = (props) => {
  const { title, description } = props;
  return (
    <header className={namespace}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};
