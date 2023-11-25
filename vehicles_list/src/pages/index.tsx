import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeComp from "@/components/homeComp/HomeComp";
import { carsData } from "../../carsData";
import { useEffect, useState } from "react";
import LayOut from "@/components/layout/LayOut";
import { useRouter } from "next/router";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle");
}

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { query } = router;

  const [itemsCount, setItemsCount] = useState(carsData.length);
  const [Cars, setCars] = useState([]);

  //this function handle search and sort on all data 
  const handleSortAndSearch = (searchTerm: any, sortBy: any) => {
    let filtered = carsData;
  
    // Handle search
    if (searchTerm?.length > 2) {
      const term = searchTerm.toLowerCase();
      filtered = carsData.filter(
        (car) =>
          car.Title.toLowerCase().includes(term) ||
          car.Category.toLowerCase().includes(term)
      );
    }
  
    // Handle sort
    if (sortBy === 'price') {
      filtered = [...filtered].sort((a: any, b: any) => {
        const priceA = parseFloat(a.CurrentPriceStr.replace(/,/g, ''));
        const priceB = parseFloat(b.CurrentPriceStr.replace(/,/g, ''));
        return priceA - priceB;
      });
    } else if (sortBy === 'years') {
      filtered = [...filtered].sort((a: any, b: any) => {
        return b.Year - a.Year;
      });
    } else if (sortBy === 'endDate') {
      filtered = [...filtered].sort((a: any, b: any) => {
        const dateA = new Date(a.FilterEndDateStr).getTime();
        const dateB = new Date(b.FilterEndDateStr).getTime();
        return dateA - dateB;
      });
    }

    setCars(filtered);
    setItemsCount(filtered.length !== 0 ? filtered.length : carsData.length);
  };
  
  useEffect(() => {
    handleSortAndSearch(query?.q , query?.orderby);
  }, [query]);
  
  return (
    <>
      <Head>
        <title>Vechicles</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <LayOut itemsCount={itemsCount}>
          <HomeComp carsData={Cars.length !== 0 ? Cars : carsData} />
        </LayOut>
      </main>
    </>
  );
}
