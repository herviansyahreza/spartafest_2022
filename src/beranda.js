import React from "react";
import './beranda.css'
import hill1 from './New folder/hill1.png'
import hill2 from './New folder/hill2.png'
import hill3 from './New folder/hill3.png'
import hill4 from './New folder/hill4.png'
import hill5 from './New folder/hill5.png'
import tree from './New folder/tree.png'
import tree1 from './New folder/tree1.png'
import tree2 from './New folder/tree2.png'
import leaf from './New folder/leaf.png'
import plant from './New folder/plant.png'
import badminton from './image/V2_BADMINTON.png'
import band from './image/V2_BAND.png'
import basket from './image/V2_BASKET.png'
import dancing from './image/V2_DANCING.png'
import debat from './image/V2_DEBAT.png'
import lari from './image/V2_LARI.png'
import olimpiade from './image/V2_OLIMPIADE MATEMATIKA.png'
import painting from './image/V2_PAINTING.png'
import renang from './image/V2_RENANG.png'
import robotic from './image/V2_ROBOTIC.png'
import bola from './image/V2_SEPAK BOLA.png'
import voli from './image/V2_VOLI.png'
import deni from './image/deni.JPG'
import luthfi from './image/luthfi.JPG'
import reza from './image/reza.JPG'
import { useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";


const Beranda = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = React.useState(false)
    React.useEffect(()=> {
        let username = localStorage.getItem('username')
        let id = localStorage.getItem('id')
        let email = localStorage.getItem('email')
        let token = localStorage.getItem('token')

        const verifikasi = async() => {
            try {
                const response = await axios.post(`https://backendspartafest-production.up.railway.app/verify`, {token : localStorage.getItem('token')})
                console.log(localStorage.getItem('token'))
                if (response.status == 200){
                    setIsLogin(true)
                } else {
                    navigate('/login')
                }
            } catch (error) {
                console.log(error)
            }
        }
        verifikasi()
    }, []);

    const handleLogout = async () => {
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        localStorage.removeItem('name')
        localStorage.removeItem('email_ketua');
        localStorage.removeItem('email_satu');
        localStorage.removeItem('email_dua')

        await axios.post(`https://backendspartafest-production.up.railway.app/logout`,{
            token: localStorage.getItem('token')
        }).then((_res) => {
            alert('Logout Success');
        })
        localStorage.removeItem('token')
        window.location.href = './';
    }
    if(isLogin) {
        
    }
    return (
        <div className="body">
            <ScrollToTop
        smooth
        viewBox="5 2 10 20"
        svgPath="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21"
      />
            <div className="header">
                <a href="/login" class="logo">SPARTA FEST 2022</a>
                <nav class="navigation">
                    <a href="#" class="active">Beranda</a>
                    <a href="#cabang">Cabang Perlombaan</a>
                    <a href="#hubungi">Narahubung</a>
                </nav>
            </div>

            <section class="parallax">
                <img src={hill1} id="hill1" />
                <img src={hill2} id="hill2" />
                <img src={hill3} id="hill3" />
                <img src={hill4} id="hill4" />
                <img src={hill5} id="hill5" />
                <img src={tree} id="tree" />
                <img src={tree1} id="tree1" />
                <img src={tree2} id="tree2" />

                <h2 id="text">SPARTA FEST 2022</h2>
                <h4 id="text1">"DISCOVER THE WONDERLAND OF INDONESIA"</h4>
                <button class="button-82-pushable" role="button" id="tomboldaftarpribadi" onClick={() => { navigate('/perorangan') }}>
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                        Daftar Perorangan
                    </span>
                </button>

                <button class="button-82-pushable" role="button" id="tomboldaftarkelompok" onClick={() => { navigate('/ketua') }}>
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                        Daftar Kelompok
                    </span>
                </button>
                <button class="button-82-pushable" role="button" id="tombolkeluar" onClick={handleLogout}>
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                        Keluar
                    </span>
                </button>

                <img src={leaf} id="leaf" />
                <img src={plant} id="plant" />
            </section>

            <section class="sec" id="cabang">

                <div class="container" id="sport">
                    <div class="title">
                        <h1>SPORTS</h1>
                        <h3>SPORTS</h3>
                    </div>

                    <div class="row">

                        <div class="image">
                            <img src={badminton} alt="" />
                            <div class="details">
                                <h2>BADM<span>INTON</span></h2>
                                <p>
                                    Badminton adalah salah satu cabang olahraga yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 25-30 Februari 2022 di GOR Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                    <a href="https://drive.google.com/uc?id=1lO8mUKzHDU0o2yf84tFerVMAsw3n8P-D&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={basket} alt="" />
                            <div class="details">
                                <h2>BASKET <span>BALL</span></h2>
                                <p>
                                    BasketBall adalah salah satu cabang olahraga yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 23-30 Februari 2022 di GOR Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                    <a href="https://drive.google.com/uc?id=1y6QbUClgdNoCBWSbJq4GAMSUlMiBrPh3&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={lari} alt="" />
                            <div class="details">
                                <h2>athl<span>ETIC</span></h2>
                                <p>
                                    Atletik adalah salah satu cabang olahraga yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 25-27 Februari 2022 di Stadion Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1oSrtLx5bMyeERXrYO99rA_d7aYKAp4K7&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">

                        <div class="image">
                            <img src={renang} alt="" />
                            <div class="details">
                                <h2>SWIM<span>MING</span></h2>
                                <p>
                                    Renang adalah salah satu cabang olahraga yang dipertandingkan pada
                                    ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan pada
                                    tanggal 26-29 Februari 2022 di Kolam Renang Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1vrvONQ2Cc_O7ii3uyJdjPbxUbd1jHkBP&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={bola} alt="" />
                            <div class="details">
                                <h2>FOOT<span>BALL</span></h2>
                                <p>
                                    Sepakbola adalah salah satu cabang olahraga yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 26-30 Februari 2022 di Stadion Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1oeyxYBn2VhHPGA_PlgmvClk1zc26esq0&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={voli} alt="" />
                            <div class="details">
                                <h2>VOLLY <span>BALL</span></h2>
                                <p>
                                    Vollyball adalah salah satu cabang olahraga yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 25-28 Februari 2022 di GOR Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1NpzjUPJjX5wkU7TNfr6k0Wa1AYN1Hox9&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="container" id="arts">
                    <div class="title">
                        <h1>ARTS</h1>
                        <h3>ARTS</h3>
                    </div>

                    <div class="row">

                        <div class="image">
                            <img src={band} alt="" />
                            <div class="details">
                                <h2>BA<span>ND</span></h2>
                                <p>
                                    Band adalah salah satu Seni tarik suara yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 25-26 Februari 2022 di Aula Serbaguna Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1MtiIilYi38W0eHmjtUD5FTcf2xqGGzlq&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={dancing} alt="" />
                            <div class="details">
                                <h2>DAN<span>CE</span></h2>
                                <p>
                                    Tari Tradisional adalah salah satu cabang seni yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 27-28 Februari 2022 di Aula Serbaguna Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1geAay_eLkwhEX4kKLWufJyLrnAkeBP7e&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={painting} alt="" />
                            <div class="details">
                                <h2>PAIN<span>TING</span></h2>
                                <p>
                                    Melukis adalah salah satu cabang Seni yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 29 Februari 2022 di Aula Serbaguna Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1Rtri0YDcKvpLdoHsRbERtb2oC9n2jPwa&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="container" id="academic">
                    <div class="title">
                        <h1>ACADEMIC</h1>
                        <h3>ACADEMIC</h3>
                    </div>

                    <div class="row">

                        <div class="image">
                            <img src={debat} alt="" />
                            <div class="details">
                                <h2>DEB<span>ATE</span></h2>
                                <p>
                                    Debat adalah salah satu Cabang Akademik yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 25-26 Februari 2022 di Hall Universitas Pertahanan Republik Indonesia.

                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1--aMyii4LURRw8TbWtYj1EHS9OWFgagN&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={olimpiade} alt="" />
                            <div class="details">
                                <h2>OLIMP<span>IADE</span></h2>
                                <p>
                                    Olimpiade adalah salah satu cabang Akademik yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 29 Februari 2022 di Universitas Pertahanan
                                    Republik Indonesia.
                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1FPI-OSGEhfdeAWkaT8kT_v8l2SH9u4zm&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                        <div class="image">
                            <img src={robotic} alt="" />
                            <div class="details">
                                <h2>ROB<span>OTIC</span></h2>
                                <p>
                                    Robotic adalah salah satu cabang Akademik yang dipertandingkan
                                    pada ajang SPARTA FEST 2022 ini. Perlombaan ini akan dilaksanakan
                                    pada tanggal 28 Februari 2022 di Auditorium Universitas Pertahanan

                                </p>
                                <div class="more">
                                <a href="https://drive.google.com/uc?id=1Uwv4QfdCDl9hQmZuHXPg38Dt4MHolVsX&export=download" class="read-more">Read <span>More</span></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="hubungi">
                    <h1>Narahubung</h1>
                    <h3>Narahubung</h3>
                </div><div className="contact">
                    <div class="buatcontact">


                        <div class="card">
                            <div class="content">
                                <div class="imgBx" id="selainluthfi">
                                    <img src={deni} alt="" />
                                </div>
                                <div class="contentbox">
                                <h3>Alfiano Deni<br /><span>Full-Stack Developer</span><br /><span>0822-xxxx-xxxx</span><br /><span><a href="https://t.me/alfiano_deni">Click Here !</a></span></h3>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="content">
                                <div class="imgBx" id="luthfi">
                                    <img src={luthfi} alt="" />
                                </div>
                                <div class="contentbox">
                                <h3>Fahrianda Luthfi<br /><span>Front-End Developer</span><br /><span>0823-xxxx-xxxx</span><br /><span><a href="https://t.me/enumeration91">Click Here !</a></span></h3>
                                </div>
                            </div>

                        </div>

                        <div class="card">
                            <div class="content">
                                <div class="imgBx" id="selainluthfi">
                                    <img src={reza} alt="" />
                                </div>
                                <div class="contentbox">
                                <h3>Reza Herviansyah<br /><span>Back-End Developer</span><br /><span>0853-xxxx-xxxx</span><br /><span><a href="https://t.me/herviansyahreza">Click Here !</a></span></h3>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <footer class="footer">
                    <div class="waves">
                        <div class="wave" id="wave1"></div>
                        <div class="wave" id="wave2"></div>
                        <div class="wave" id="wave3"></div>
                        <div class="wave" id="wave4"></div>
                    </div>
                    <ul class="social-icon">
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <i class="fa-brands fa-facebook"></i>
                        </a></li>
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a></li>
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <i class="fa-brands fa-youtube"></i>
                        </a></li>
                        <li class="social-icon__item"><a class="social-icon__link" href="#">
                            <i class="fa-brands fa-instagram"></i>
                        </a></li>
                    </ul>
                    <ul class="menu">
                        <li class="menu__item"><a class="menu__link" href="#">Beranda</a></li>
                        <li class="menu__item"><a class="menu__link" href="#cabang">Cabang Lomba</a></li>
                        <li class="menu__item"><a class="menu__link" href="#hubungi">Narahubung</a></li>

                    </ul>
                    <p>&copy;2022 K1ubK1ub0m3 | All Rights Reserved</p>
                </footer>

            </section>


        </div>

    )
}
export default Beranda;