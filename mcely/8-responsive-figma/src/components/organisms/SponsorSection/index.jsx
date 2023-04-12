import { TitleDescription } from '@components/atoms';
import { Card } from '@components/molecules';

const namespace = 'sponsor-section';

const titleDescripProps = {
  title: 'Testimonials',
  description: 'What other people are saying',
};

const cards = [
  {
    content: `"Adrian's design skills are amazing! On top of that, he's great at web development. It's not very often that you get a chance to learn from someone skilled in both areas.”`,
    author: 'Web Dev Simplified',
  },
  {
    content: `"Adrian's design skills are amazing! On top of that, he's great at web development. It's not very often that you get a chance to learn from someone skilled in both areas.”`,
    author: 'Web Dev Simplified',
  },
  {
    content: `"It’s very hard these days to find someone who understands both the technical side of development just as well as the UI/UX aspect."`,
    author: 'DevEd',
  },
];

export const SponsorSection = () => {
  return (
    <section className={namespace}>
      <TitleDescription {...titleDescripProps} />
      <div className={`${namespace}__cards`}>
        {cards.map((cardProps) => (
          <Card {...cardProps} />
        ))}
      </div>
    </section>
  );
};
