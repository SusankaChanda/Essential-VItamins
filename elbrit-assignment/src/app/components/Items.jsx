import styles from './items.module.css';
import Image from 'next/image';

const Items = () => {
  const features = [
    {
      icon: '/clinic.png',
      title: 'Clinically Studied',
      description: 'All products that we offer have undergone lab and safety tests'
    },
    {
      icon: '/leaves.png',
      title: 'Vegetarian Friendly',
      description: 'We have a wide selection of vegetarian products to meet your needs'
    },
    {
      icon: '/wheel.png',
      title: 'Made In India',
      description: 'Shop local and explore health products made right here in India'
    },
    {
      icon: '/freeship.png',
      title: 'Free Shipping',
      description: 'We deliver to your door with no shipping costs on your orders'
    },
    {
      icon: '/norisk.png',
      title: 'No Risk',
      description: 'We ensure that all products are safe and within their use-by date'
    },
    {
      icon: '/gmo.png',
      title: 'GMO Free',
      description: 'Natural, no modified products and derivatives for those who need it'
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.iconWrapper}>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={40}
                height={40}
                className={styles.icon}
              />
            </div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;

