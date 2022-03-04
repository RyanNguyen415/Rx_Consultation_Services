import Navbar from '../components/Navbar'
import IntroComponent from '../components/IntroComponent'
import CategorySection from '../components/CategorySection'
import { useEffect } from 'react';


export default function Home({data}) {

  return (
      <>
      <IntroComponent/>
      <CategorySection data={data}/>
      </>
  )
}



export async function getStaticProps(){
  const fs = require('fs');
  const path = require('path');
  const pathDir = path.join(__dirname,'..','..','..','data','data.json')

  const data = fs.readFileSync(pathDir,'utf8')

  return {
    props:{data:JSON.parse(data)}
  }
}