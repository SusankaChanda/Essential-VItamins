import Image from "next/image";
import styles from "./vitamin.module.css";

const Vitamin = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeading}>Essential Vitamins</h1>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <p className={styles.subheading}>Online Medical Supplies</p>
          <div className={styles.ctaSection}>
            <h2>Get Your Vitamins & Minerals</h2>
            <button className={styles.exploreButton}>EXPLORE</button>
          </div>
        </div>
        
        <div className={styles.centerContent}>
          <Image 
            src='/bottle.png' 
            alt="Vitamin Bottle"
            width={500}
            height={500}
            className={styles.bottleImage}
          />
        </div>

        <div className={styles.rightContent}>
          <div className={styles.features}>
            <div className={styles.featureItem}>
              <Image 
                src="/weight.png" 
                alt="Vitamins"
                width={24}
                height={24}
                className={styles.featureIcon}
              />
              <div className={styles.featureText}>
                <h3>Vitamins</h3>
                <p>Increased Vitamins and minerals in your diet</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Image 
                src="/weight.png" 
                alt="Weight Loss"
                width={24}
                height={24}
                className={styles.featureIcon}
              />
              <div className={styles.featureText}>
                <h3>Weight Loss</h3>
                <p>Find scientifically proven solutions</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <Image 
                src="/funct.png" 
                alt="Functional Foods"
                width={24}
                height={24}
                className={styles.featureIcon}
              />
              <div className={styles.featureText}>
                <h3>Functional Foods</h3>
                <p>From protein powers to baby formula</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitamin;
