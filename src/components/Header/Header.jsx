import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <header>
          <div className="first_section">
            <div className="rent_onchain_logo">
              <img src="./headerLogo.png" alt="" />
            </div>
            <div className="check_box_items">
              <div className="set_language">
                <select className="select_header" name="" id="">
                  <option className="option_header" value="">
                    esp
                  </option>
                  <option className="option_header" value="">
                    eng
                  </option>
                </select>
              </div>
              <div className="search_icons">
                <SearchIcon color="white" />
              </div>
            </div>
          </div>
          <div className="menu_body">
            <ul className="ul_menu">
              <li className="menu">PROYECTO</li>
              <li className="menu">beneficios</li>
              <li className="menu">inmuebles</li>
              <li className="menu">Riviera Maya</li>
              <li className="menu">VIDEOS </li>
              <li className="menu">Fortalezas</li>
              <li className="menu">EQUIPO</li>
              <li className="menu">FAQ</li>
              <li className="menu">sale</li>
            </ul>
          </div>
        </header>
        <div className="body_header">
          <div className="txt_about">
            <p className="big_txt">
              INVERSIÓN INMOBILIARIA EN EL PARAÍSO, UNA OPORTUNIDAD ÚNICA
            </p>
            <div className="form_about">
              <div className="como">
                <p>DESCUBRE CÓMO PUEDES DISFRUTAR</p>
                <p className="puprle">
                  DEL CARIBE SIN PREOCUPACIONES Y SIN LAS COMPLICACIONES
                </p>
                <p>QUE COMPORTA GESTIONAR UN INMUEBLE</p>
              </div>
              <button className="submit">únete ahora</button>
            </div>
          </div>
        </div>
        <div className="video_items">
          <img src="./video.png"></img>
          <div className="icon_play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="48.8889"
                stroke="white"
                stroke-width="2.22222"
              />
              <path
                d="M68.8906 51.1111L38.8906 68.4316L38.8906 33.7906L68.8906 51.1111Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="introduccionalBody">
          <div className="main_int">
            <p className="proyecto">INTRODUCCIÓN AL PROYECTO</p>
          </div>
          <div className="main_int">
            <p className="proyecto"></p>
          </div>
          <div className="decription">
            <p className="first">
              Bienvenido a una inversión inmobiliaria en la Riviera Maya (Playa
              del Carmen, Tulum, Cancún).
            </p>
            <p className="second">
              Nuestras viviendas te ofrecen la libertad de poder disfrutar del
              Caribe sin los problemas tradicionales.
            </p>
          </div>
        </div>
        <div className="slider_main">
          <div className="slider">
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={54}
              slidesPerView={1}
              navigation
            >
              <SwiperSlide>
                <img src="./1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./2.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./3.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./4.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./5.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="./6.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="question">
          <div className="question_body">
            <p className="por">
              ¿Por qué nuestro modelo de inversión inmobiliaria es único?
            </p>
            <div className="block_body">
              <h2 className="blockcahin">
                ¡Bienvenido a Rent Onchain, la vanguardia en inversiones
                inmobiliarias del futuro!
              </h2>
              <p className="en">
                En Rent Onchain, tu seguridad financiera es nuestra principal
                prioridad. Cada transacción en nuestra plataforma está
                respaldada por la tecnología Blockchain
                <span className="purple">*</span> más avanzada y por contratos
                inteligentes impenetrables, inmutables y auto-ejecutables.
              </p>
              <div className="form_more">
                <form action="" className="more_info">
                  <div className="info">
                    <label>
                      <input
                        className="text_input"
                        defaultValue="Nombre*"
                        type="text"
                      />
                    </label>
                    <label>
                      <input
                        className="text_input"
                        defaultValue="E-mail*"
                        type="text"
                      />
                    </label>
                    <label>
                      <input
                        className="text_input"
                        defaultValue="Telefono*"
                        type="text"
                      />
                    </label>
                  </div>
                  <div className="chekbox">
                    <input type="checkbox" name="" id="" />
                    <div className="some_text">
                      <p className="robot">No soy un robot.</p>
                      <p className="some"> Pulse para continuar.</p>
                    </div>
                  </div>
                  <button className="button_submit">
                    <p>únete ahora</p>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="advantages">
          <div className="advantages_body">
            <p>Obtendrás los siguientes beneficios</p>
            <div className="description_advantages">
              <div className="description_advantages_body">
                <ul>
                  <li>
                    <span>+</span>Invierte a partir de 10.000€ y adquiere el
                    derecho de vivir y disfrutar de una semana al año, durante
                    todos los años de tu vida, en una maravillosa vivienda en el
                    caribe. ¡Este derecho es tuyo de por vida!
                  </li>
                  <li>
                    <span>+</span>Plusvalía<span className="purple">*</span>{" "}
                    anual elevada.
                  </li>
                  <li>
                    <span>+</span>Libertad total, vive en el Caribe sólo cuando
                    lo desees.
                  </li>
                  <li>
                    <span>+</span>Podrás invertir con dolares, euros o con
                    criptomoneda, ¡tú decides!
                  </li>
                  <li>
                    <span>+</span>Tu inversión se realizará en la Blockchain*
                    por lo que estará en una base de datos descentralizada,
                    inmutable, pública y encriptada.
                  </li>
                  <li>
                    <span>+</span>A partir del 3er año, podrás disfrutar también
                    de otros destinos en nuestra plataforma.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="inmuebles">
          <div className="inmuebles_body">
            <img src="./bronze.png" alt="" />
            <div className="option">
              <div className="option_main">
                <div className="option_header_body">
                  <div className="status_main">
                    <p className="status">Pre-Venta</p>
                    <p className="status2">BRONZE</p>
                  </div>
                  <div className="price">
                    <div className="price_head">
                      <p className="price">10.000 €</p>
                      <p className="price2">10.000 €</p>
                    </div>
                    <div className="discount_body"></div>
                  </div>
                </div>
              </div>
              <div className="inmuebles_body_description">
                <div className="inmueblesDescription">
                  <p className="specifications">País</p>
                  <p
                    className="notification
                  "
                  >
                    Caribe (Riviera Maya)
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Lugar</p>
                  <p
                    className="notification
                  "
                  >
                    México
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Habitaciones</p>
                  <p className="notification">1</p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">lazas para dormir</p>
                  <p
                    className="notification
                  "
                  >
                    4
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Tipo de inmueble</p>
                  <p
                    className="notification
                  "
                  >
                    Apartamento
                  </p>
                </div>
              </div>
              <div className="atention">
                <p>
                  *La fotografía puede no coincidir con el apartamento asignado
                  pero, éste, tendrá las mismas características y estará
                  publicado antes de la adquisición final.
                </p>
              </div>
            </div>
          </div>
          <div className="inmuebles_body">
            <img src="./bronze.png" alt="" />
            <div className="option">
              <div className="option_main">
                <div className="option_header_body">
                  <div className="status_main">
                    <p className="status">Pre-Venta</p>
                    <p className="status2">BRONZE</p>
                  </div>
                  <div className="price">
                    <div className="price_head">
                      <p className="price">10.000 €</p>
                      <p className="price2">10.000 €</p>
                    </div>
                    <div className="discount_body"></div>
                  </div>
                </div>
              </div>
              <div className="inmuebles_body_description">
                <div className="inmueblesDescription">
                  <p className="specifications">País</p>
                  <p
                    className="notification
                  "
                  >
                    Caribe (Riviera Maya)
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Lugar</p>
                  <p
                    className="notification
                  "
                  >
                    México
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Habitaciones</p>
                  <p className="notification">1</p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">lazas para dormir</p>
                  <p
                    className="notification
                  "
                  >
                    4
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Tipo de inmueble</p>
                  <p
                    className="notification
                  "
                  >
                    Apartamento
                  </p>
                </div>
              </div>
              <div className="atention">
                <p>
                  *La fotografía puede no coincidir con el apartamento asignado
                  pero, éste, tendrá las mismas características y estará
                  publicado antes de la adquisición final.
                </p>
              </div>
            </div>
          </div>
          <div className="inmuebles_body">
            <img src="./bronze.png" alt="" />
            <div className="option">
              <div className="option_main">
                <div className="option_header_body">
                  <div className="status_main">
                    <p className="status">Pre-Venta</p>
                    <p className="status2">BRONZE</p>
                  </div>
                  <div className="price">
                    <div className="price_head">
                      <p className="price">10.000 €</p>
                      <p className="price2">10.000 €</p>
                    </div>
                    <div className="discount_body"></div>
                  </div>
                </div>
              </div>
              <div className="inmuebles_body_description">
                <div className="inmueblesDescription">
                  <p className="specifications">País</p>
                  <p
                    className="notification
                  "
                  >
                    Caribe (Riviera Maya)
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Lugar</p>
                  <p
                    className="notification
                  "
                  >
                    México
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Habitaciones</p>
                  <p className="notification">1</p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">lazas para dormir</p>
                  <p
                    className="notification
                  "
                  >
                    4
                  </p>
                </div>
                <div className="inmueblesDescription">
                  <p className="specifications">Tipo de inmueble</p>
                  <p
                    className="notification
                  "
                  >
                    Apartamento
                  </p>
                </div>
              </div>
              <div className="atention">
                <p>
                  *La fotografía puede no coincidir con el apartamento asignado
                  pero, éste, tendrá las mismas características y estará
                  publicado antes de la adquisición final.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="form_more2">
          <form action="" className="more_info2">
            <div className="info2">
              <label>
                <input
                  className="text_input2"
                  defaultValue="Nombre*"
                  type="text"
                />
              </label>
              <label>
                <input
                  className="text_input2"
                  defaultValue="E-mail*"
                  type="text"
                />
              </label>
              <label>
                <input
                  className="text_input2"
                  defaultValue="Telefono*"
                  type="text"
                />
              </label>
            </div>
            <div className="chekbox2">
              <input type="checkbox" name="" id="" />
              <div className="some_text">
                <p className="robot">No soy un robot.</p>
                <p className="some"> Pulse para continuar.</p>
              </div>
            </div>
            <button className="button_submit2">
              <p>únete ahora</p>
            </button>
          </form>
        </div>
        <div className="why">
          <div className="why_body">
            <div className="question">
              <h3>¿Por qué invertir ahora en la Riviera Maya?</h3>
              <img src="./palm.png" alt="" />
            </div>
            <div className="reception">
              <div className="reception_body">
                <div className="flex">
                  <div className="cart_body ">
                    <div className="cart">
                      <div className="cart_header">
                        <h2>Destino</h2>
                        <div className="icon">
                          <img src="./Trophy.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription pad">
                        México es el 6º país más visitado del mundo.
                      </div>
                    </div>
                  </div>
                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header ">
                        <h2 className="white">Tendencias</h2>
                        <div className="icon">
                          <img src="./Building_02.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription ">
                        En el año 2022 se incrementó un 68% la búsqueda online
                        de inmuebles en la Riviera Maya.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header">
                        <h2 className="white">Seguridad</h2>
                        <div className="icon">
                          <img src="./Shield_Check.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription pad2">
                        El estado de Quintana Roo es uno de los más seguros de
                        México.
                      </div>
                    </div>
                  </div>
                  <div className="cart_body">
                    <div className="cart blue">
                      <div className="cart_header">
                        <h2>plusvalía</h2>
                        <div className="icon">
                          <img src="./Chart_Line.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription">
                        La plusvalía de los inmuebles se ha incrementado en
                        estos últimos años un 25% anual.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="cart_body">
                    <div className="cart orange">
                      <div className="cart_header">
                        <h2>Ubicación</h2>
                        <div className="icon">
                          <img src="./globe-02.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription">
                        Excelente ubicación y conexiones diarias con las
                        principales ciudades del mundo.
                      </div>
                    </div>
                  </div>

                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header">
                        <h2>Clima</h2>
                        <div className="icon">
                          <img src="./Sun.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription">
                        Clima tropical todo el año con una temperatura media de
                        27ºC.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header">
                        <h2>Cosmopolita</h2>
                        <div className="icon">
                          <img src="./smiley-happy.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription">
                        Con más de 15.000 extranjeros viviendo en Quintana Roo.
                      </div>
                    </div>
                  </div>

                  <div className="cart_body">
                    <div className="cart green">
                      <div className="cart_header">
                        <h2>Clima</h2>
                        <div className="icon">
                          <img src="./Sun.png" alt="" />
                        </div>
                      </div>
                      <div className="cart_decsription">
                        Clima tropical todo el año con una temperatura media de
                        27ºC.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
