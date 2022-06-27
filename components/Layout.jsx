import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import BurgerMenu from "../public/js/index"
const Layout = ({ title, description, }) => {
    return (
      <>
    <Head>
        <title>{title}</title>
        <meta name="description"
        content={description}
        />
        </Head>
        <header>
          <div className="header">
            <div className="container">
              <div className="logo">
                <Link href='/'>
                  <a>
                    <Image
                  src='/Лого.png'
                  width={138}
                  height={46}
                ></Image>

                  </a>
                  
                </Link>
                
              </div>
              <div className="search">
                <input type="text" name="" id="" placeholder="Я ищу..." />
                <button className="search-btn">Найти</button>
              </div>
              <div className="contacts-link">
                <div className="tel">
                  <h2>телефон</h2>
                  <a href="tel:+74958312222">+7 (495) 831-22 -22</a>
                </div>
                <div className="mail">
                  <h2>email</h2>
                  <a href="mailto:siteadressmail@mail.ru">siteadressmail@mail.ru</a>
                </div>
                <div className="burger" onClick={BurgerMenu()}>
                  <span></span>
                </div>
              </div>
            </div>
            
          </div>
          <div className="nav">
            <div className="container">
              <nav>
                <ul className="nav-list">
                  <li className="nav-link"><Link  href="#"><a>УЗИ аппараты</a></Link></li>
                  <li className="nav-link"><Link  href="#"><a>Датчики</a></Link></li>
                  <li className="nav-link"><Link  href="#"><a>Рейтинги</a></Link></li>
                  <li className="nav-link"><Link  href="#"><a> Статьи</a></Link></li>
                  <li className="nav-link"><Link  href="#"><a>Производители</a></Link></li>
                  <li className="nav-link"><Link  href="#"><a>Контакты</a></Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* <script>
          document.addEventListener("click",()=>{
            console.log('hello')});
        </script> */}
        <Script src='../public/js/index.js'></Script>

    </>  
    )
    
};

export default Layout
