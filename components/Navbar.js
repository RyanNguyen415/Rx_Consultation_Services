// import React from 'react'
import Link from 'next/link'
import { useRef, useState, useContext } from 'react'
import styles from '../styles/navbar.module.css'
import {ContextApi} from './context'

function Navbar() {

    const mobileNavContainer = useRef()
    const mobileNav = useRef()

    const {carts} = useContext(ContextApi)

    async function showMobileNav(){
        mobileNavContainer.current.style.display='block'
        const body = document.querySelector('body');
        body.style.height='100vh'
        body.style.overflow='hidden'
        setTimeout(()=>{
            mobileNav.current.style.marginLeft='0%'
        },100)
    }
    async function hideMobileNav(){
        mobileNav.current.style.marginLeft='-150%';
        await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('done')
            },200)
        })
        mobileNavContainer.current.style.display='none'
        const body = document.querySelector('body');
        body.style.height='auto'
        body.style.overflow='visible'
        
    }

    return (
        <>
        <div className={styles.navbar}>
                <div>
                    <Link href={'/cart'}>
                        <div id={styles.cartIcon2}>
                            <i className="fas fa-shopping-cart"></i>
                            {(carts && carts.length>0) && (
                                <div id={styles.counter}>{carts.length}</div>
                            )}
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div id={styles.logoArea}>
                            <div className={styles.logo}>
                                Ryan's
                            </div>
                            <p>Pharmacy</p>
                        </div>
                    </Link>
                    <ul className={styles.ul}>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <a href="mailto:ryanlongnguyen415@gmail.com">
                            email us
                            </a>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <a href="tel:0111111111">call us today</a>
                        </li>
                    </ul>
                    <div onClick={showMobileNav} id={styles.burgerMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            <nav className={styles.navigation}>
                <ul>
                    <li tabIndex='1'>
                        <p>Men's Health</p>
                        <ul className={styles.subMenu}>
                            <li><Link href={'/treatments/3'}><a >Erectile Dysfunction</a></Link></li>
                            <li><Link href={'/treatments/5'}><a >Hair Loss</a></Link></li>
                                                    </ul>
                    </li>
                    <li tabIndex='2'>
                        <p>Women's Health</p>
                        <ul className={styles.subMenu}>
                            <li>
                                <Link href={'/treatments/7'}><a >Period Delay</a></Link>
                            </li>
                            <li>
                                <Link href={'/treatments/2'}><a>Weight Loss</a></Link>
                            </li>
                            <li>
                                <Link href={'/treatments/9'}><a>Acne</a></Link>
                            </li>
                            <li>
                                <Link href={'/treatments/6'}><a>Migraine</a></Link>
                            </li>
                        </ul>
                    </li>
                    <li tabIndex='3'>
                        <p>Common Treatments</p>
                        <ul className={styles.subMenu}>
                            <li>
                                <Link href={'/treatments/1'}><a>Acid Reflux</a></Link>
                            </li>
                            <li>
                                <Link href={'/treatments/4'}><a>Asthma</a></Link>
                            </li>
                        </ul>
                    </li>
                    <li id={styles.cartIcon}>
                        <Link href={'/cart'}>
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        {(carts && carts.length>0) && (
                                <div id={styles.counter}>{carts.length}</div>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
        <div ref={mobileNavContainer} id={styles.mobileNav}>
            <nav ref={mobileNav}>
                <ul id={styles.contactUs}>
                    <li>
                        <a href="mailto:amoswings7@gmail.com">
                            <i className="fas fa-envelope"></i>
                        email us
                        </a>
                    </li>
                    <li>
                        <a href="tel:0814599837">
                            <i className="fas fa-phone-alt"></i>
                            call us today
                        </a>
                    </li>
                </ul>
                <ul id={styles.mobileNavigations}>
                    <li tabIndex={"1"}>
                        <p>
                            MEN'S HEALTH
                        </p>
                        <ul className={styles.submenu}>
                            <li onClick={hideMobileNav}><Link href={'/treatments/3'}><a >Erectile Dysfunction</a></Link></li>
                            <li onClick={hideMobileNav}><Link href={'/treatments/5'}><a >Hair Loss</a></Link></li>
                            <li onClick={hideMobileNav}><Link href={'/treatments/8'}><a >Premature Ejaculation</a></Link></li>
                        </ul>
                    </li>
                    <li tabIndex={"2"}>
                        <p>
                            WOMEN'S HEALTH
                        </p>
                        <ul className={styles.submenu}>
                            <li onClick={hideMobileNav}>    
                                <Link href={'/treatments/7'}><a >Period Delay</a></Link>
                            </li>
                            <li onClick={hideMobileNav}>
                                <Link href={'/treatments/2'}><a>Weight Loss</a></Link>
                            </li>
                            <li onClick={hideMobileNav}>
                                <Link href={'/treatments/9'}><a>Acne</a></Link>
                            </li>
                            <li onClick={hideMobileNav}>
                                <Link href={'/treatments/6'}><a>Migraine</a></Link>
                            </li>
                        </ul>
                    </li>
                    <li tabIndex={"3"}>
                        <p>
                            MORE COMMON TREATMENTS
                        </p>
                        <ul className={styles.submenu}>
                            <li onClick={hideMobileNav}>
                                <Link href={'/treatments/1'}><a>Acid Reflux</a></Link>
                            </li>
                            <li onClick={hideMobileNav}>
                                <Link href={'/treatments/4'}><a>Asthma</a></Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div onClick={hideMobileNav} id={styles.closeBtn}>
                <span></span>
                <span></span>
            </div>
        </div>
        </>
    )
}

export default Navbar
