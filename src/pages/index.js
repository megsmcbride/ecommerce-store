import React from 'react';
import { Product, Banner, Footer } from '../../components';
import  { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url";

 const client = createClient({
  projectId: 'ierfacgj',
  dataset: 'production',
  apiVersion: '2023-04-04',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});


const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);

export const getServerSideProps = async() => { 
  const query = '*[_type == "product"]'
  const productsData = await client.fetch(query)
  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)
  
  return {
   props: {
    productsData,
    bannerData
   }
  }
}


export default function Home({ productsData, bannerData}) {
  return (
    <>
      <Banner banner = {bannerData[0]}/>
      <div className='product-homepage'>
        <h2>Featured Collection</h2>
        <p> Find your balance & nourish your soul</p>
      </div>
    {/* could turn this into a products component */}
      <div>
        {productsData?.map(product => product.name)}
        
      </div>
      <Footer />
    </>
  );
}

