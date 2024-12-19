import Image from 'next/image';
import styles from './Ingredients.module.css';

const Ingredients = () => {
  const ingredients = [
    {
      title: 'Vitamin C',
      description: 'Vitamin C and ascorbic acid',
      image: '/vitaminc.jpg',
      bgColor: '#E8F7FC'
    },
    {
      title: 'Vitamin B3',
      description: 'Keeps the healthy gut and skin',
      image: '/vitaminb3.jpg',
      bgColor: '#E2F5FB'
    },
    {
      title: 'Magnesium',
      description: 'Boost energy and support',
      image: '/mag.jpg',
      bgColor: '#E8F7E8'
    },
    {
      title: 'Hyaluronic Acid',
      description: 'Supports skin health',
      image: '/hyla.jpg',
      bgColor: '#F5F5F5'
    },
    {
      title: 'Lactobacillus',
      description: 'Beneficial gut and',
      image: '/lacto.webp',
      bgColor: '#FFF8E1'
    }
  ];

  return (
    <div className={styles.container}>
      {/* First Card as Header */}
      <div className={styles.card} style={{ backgroundColor: 'white', color: 'white' }}>
        <div className={styles.content}>
          <span className={styles.label}>INGREDIENTS</span>
          <h2 className={styles.mainTitle}>Better Ingredients</h2>
          <p className={styles.description}>
            Only the best when you choose products offered on our platform - high-quality ingredients for high quality products!
          </p>
        </div>
      </div>

      {/* Ingredients Grid */}
      <div className={styles.grid}>
        {ingredients.map((ingredient, index) => (
          <div 
            key={index} 
            className={styles.card}
            style={{ backgroundColor: ingredient.bgColor }}
          >
            <div className={styles.content}>
              <h3>{ingredient.title}</h3>
              <p>{ingredient.description}</p>
              <button className={styles.button}>SEE MORE</button>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={ingredient.image}
                alt={ingredient.title}
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;