
// adicionar imagens por import 
// import Hero from 'public/hero.png'
// <Image className={styles.img} src={Hero} alt='banner home'/>

// --------------------------------------------------------------------------------
// Adicionar imagem externa
//  1- vá em next.config.js
//  2- adicione seus domains dessa forma:
// const nextConfig = {
  //   images:{
//     domains:[
  //       "images.pexels.com",
  //       "example.com"
//     ]
//   }
// }
//  3- adicione a url da imagem no seu src=""
// <Image width={500} height={500} src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg" alt='banner home'/>

// ---------------------------------------------------------------------------------

import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from "@/components/Button/Button"

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>

          <h1 className={styles.title}>Better design for your original products.</h1>

          <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
          </p>

          <Button url="./portfolio/page.jsx" text="See Our Works" />
        </div>
        <div className="imgContainer">
        <Image className={styles.img} src={Hero}  alt='banner home'/>
      </div>
    </div>
  )
}
