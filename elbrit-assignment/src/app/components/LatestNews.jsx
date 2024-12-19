import React from "react";
import styles from "./Latest.module.css";

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      title: "The Covid19 Epidemic in 2022 Is Back",
      date: "20 APR",
      image: "/turmeric.png",
    },
    {
      id: 2,
      title: "The Covid19 Epidemic in 2023 Is Back",
      date: "20 APR",
      image: "/tablets.png",
    },
    {
      id: 3,
      title: "Hac hendrerit mus non semper suspendisse",
      date: "17 MAR",
      image: "/tablets.png",
    },
    {
      id: 4,
      title: "The Covid19 Epidemic in 2023 Is Back",
      date: "20 APR",
      image: "/turmeric.png",
    },
  ];

  return (
    <div className={styles.imageGalleryContainer}>
      {newsData.map((item, index) => (
        <div
          key={item.id}
          className={`${styles.imageGalleryItem} ${
            index === 0 || index === 2 ? styles.largeItem : ""
          }`}
        >
          <img src={item.image} alt={item.title} />
          <div className={styles.tag}>
            <p style={{ margin: 0 }}>{item.date}</p>
          </div>
          <div className={styles.title}>
            <h2 style={{ margin: 0 }}>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestNews;
