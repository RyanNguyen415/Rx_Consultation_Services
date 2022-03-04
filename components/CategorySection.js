import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../styles/introSection.module.css'




function CategorySection({data}) {

    const [categories,setCategories]=useState(data)


    return (
        <div id={styles.categoryContainer}>
            <div className={styles.header}>
                <h1 className={styles.h1}>COMMON TREATMENTS</h1>
                <div>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div id={styles.categoryHolder}>
                {categories && categories.map(obj => (
                    <Link key={Math.floor(Math.random()*256830912)} href={'/treatments/'+obj.id.toString()}>
                        <a>
                            <div className={styles.category}>
                                <Image id={styles.image} width={250} height={200} src={"/treatments/"+obj.imageURL} alt='treatment'/>
                                <p>{obj.name}</p>
                            </div>
                        </a>
                    </Link>         
                ))} 
            </div>
            <div className={styles.btnContainer}>
                <button id={styles.viewMoreBtn}>
                    <i className="far fa-plus-square"></i>
                    VIEW MORE TREATMENTS
                </button>
            </div>            
        </div>
    )
}



export default CategorySection
