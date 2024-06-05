"use client"

import Banner from "@/components/molecules/Banner";
import Category from "@/components/atoms/Category";
import { categoryData } from "@/utils/staticVariable";
import TopNav from "@/components/molecules/TopNav";
import News from "@/components/molecules/News";

export default function Home() {
  return (
    <main className="min-h-screen">
      <link rel="icon" href="logo.png" />
      <TopNav/>
      <Banner text="Bangkit dan Produktif Untuk Lombok Barat Mantap"/>
      <div className="p-20 flex flex-row justify-between">
        {categoryData && categoryData.length > 0 ? categoryData.map((item, index) => {
          return (
            <div key={index}>
              <Category imgUrl={item.img} imgAlt={item.label} text={item.label} onClick={() => window.location.href = item.permalink}/>
            </div>
          )
          }) : ''}
      </div>
      <div className="p-10"> 
        <News section="Berita Aktual" title="Pusat Media Pemerintah Kabupaten Lombok Barat" showButton={true} className="mb-12"/>
        <News section="Wisata Alam" title="Wisata Lombok Barat" showButton={false}/>
      </div>
    </main>
  );
}
