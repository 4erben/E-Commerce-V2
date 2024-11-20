import React from 'react';
import styles from "./homepage.module.css";


import HomeHeroSection from './sections/Hero.Section';
import FeaturedHomeSection from './sections/Featured.Section';
import ShopexHomeSection from './sections/Shopex.Section';
import LatestHomeSection from './sections/Latest.Section';
import UniqueSection from './sections/Unique.Section';
import TrendingSection from './sections/Trending.Section';
import TopCategoriesSection from './sections/TopCategories.Section';
import DiscountSection from './sections/Discount.Section';
import NewsletterSection from './sections/Newsletter.Section';


export default function Home() {
  return (
    <div className={`${styles.homepage} flex flex-col justify-center items-center `}>
      
      <HomeHeroSection />
      <FeaturedHomeSection />
      <LatestHomeSection />
      <ShopexHomeSection />
      <UniqueSection />
      <TrendingSection />
      <DiscountSection />
      <TopCategoriesSection/>
      <NewsletterSection />
    </div>
  )
}
