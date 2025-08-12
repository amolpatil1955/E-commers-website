import React, { useState, useEffect } from 'react';


const slides = [
  {
    id: 1,
    heading: "Discover Your New Style",
    subheading: "Shop the trendiest collections and express yourself.",
    category: "Style",
    imageUrl: "https://sdmntprnortheu.oaiusercontent.com/files/00000000-5830-61f4-b054-a8f0794e9d37/raw?se=2025-08-12T08%3A55%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=5da2d220-da87-5c98-8190-633733278913&skoid=a3412ad4-1a13-47ce-91a5-c07730964f35&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-11T18%3A22%3A55Z&ske=2025-08-12T18%3A22%3A55Z&sks=b&skv=2024-08-04&sig=gweR9CSAf6zD1mQrChD8XgsK/RkjRDVxm0ugwgLtjYM%3D"
  },
  {
    id: 2,
    heading: "Unleash the Power of Tech",
    subheading: "Find the latest electronics for a smarter life.",
    category: "Electronics",
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k2emwh5hfhx815cy80q1msbz%2F1754985956_img_0.webp?st=2025-08-12T06%3A22%3A17Z&se=2025-08-18T07%3A22%3A17Z&sks=b&skt=2025-08-12T06%3A22%3A17Z&ske=2025-08-18T07%3A22%3A17Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=EbTR9NthyZcPZMNn8s75A1qdjBJRZDf%2FshxRXqgFfDU%3D&az=oaivgprodscus"
  },
  {
    id: 3,
    heading: "Elevate Your Game",
    subheading: "Premium sports gear for peak performance.",
    category: "Sports",
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k2enfdc9e7t9qsv83v5mwre7%2F1754986574_img_1.webp?st=2025-08-12T07%3A05%3A43Z&se=2025-08-18T08%3A05%3A43Z&sks=b&skt=2025-08-12T07%3A05%3A43Z&ske=2025-08-18T08%3A05%3A43Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=xuw3KajSdnz7SzKOA0H6OoUKjIX7c%2FWpIcieqQ%2BSCWc%3D&az=oaivgprodscus"
  },
  {
    id: 4,
    heading: "Season of Joyful Celebrations",
    subheading: "Special festive collections for every occasion.",
    category: "Festival Offers",
    imageUrl: "https://videos.openai.com/vg-assets/assets%2Ftask_01k2ep6g6tf7v8gcx95b78a5z1%2F1754987269_img_0.webp?st=2025-08-12T07%3A15%3A32Z&se=2025-08-18T08%3A15%3A32Z&sks=b&skt=2025-08-12T07%3A15%3A32Z&ske=2025-08-18T08%3A15%3A32Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=0CAUwoYu8s3aHn4ElEuF9%2FhqAKAU9lrAgKeiLnwmYBA%3D&az=oaivgprodscus"
  },
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 7000); // 3 seconds interval

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container w-90% h-[550px]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="overlay"></div>
          <div className="slide-content">
            <h1 className="slide-heading">{slide.heading}</h1>
            <p className="slide-subheading">{slide.subheading}</p>
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      ))}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;