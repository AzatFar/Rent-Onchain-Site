import React from "react";
import "./Header.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Accardion from "../Accardion/Accardion";

export default function Header() {
  const accordionData = [
    {
      id: 1,
      title: "Desarrolladores",

      images: [
        {
          path: "./devolop/1p.png",
          description: [
            {
              name: "Anton Polenyaka",
              job_title: "CEO/CTO",
              work_date: "05.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/2p.png",
          description: [
            {
              name: "Lorenzo Gabriel Vignolo",
              job_title: "Blockchain/ Backend",
              work_date: "05.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/3p.png",
          description: [
            {
              name: "Juan David Marin Sanchez",
              job_title: "Blockchain",
              work_date: "06.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/nophoto.png",
          description: [
            {
              name: "Alexey Glazunov",
              job_title: "Backend",
              work_date: "08.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/nophoto.png",
          description: [
            {
              name: "Nariman Islamov",
              job_title: "Blockchain",
              work_date: "06.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/4p.png",
          description: [
            {
              name: "Antonio Palou",
              job_title: "Blockchain",
              work_date: "06.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/5p.png",
          description: [
            {
              name: "Mansur Vakhabov",
              job_title: "Blockchain",
              work_date: "08.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/6p.png",
          description: [
            {
              name: "Viacheslav Demchenko",
              job_title: "Blockchain",
              work_date: "08.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/7p.png",
          description: [
            {
              name: "Ivan Krasnoshchekov",
              job_title: "Blockchain",
              work_date: "09.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/nophoto.png",
          description: [
            {
              name: "Kirill Padalitsa",
              job_title: "IOS móvil",
              work_date: "08.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/8p.png",
          description: [
            {
              name: "Iñaki Balaguer",
              job_title: "Blockchain/ Backend",
              work_date: "05.2023 - 10.2023",
            },
          ],
        },
        {
          path: "./devolop/9p.png",
          description: [
            {
              name: "Oleg Bedrin",
              job_title: "Blockchain",
              work_date: "08.2023 - 10.2023",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "diseño",

      images: [
        {
          path: "./desino/1d.png",
          description: [
            {
              name: "Anastasia Borodaenko",
              job_title: "CDO",
              work_date: "05.2023 - presente",
            },
          ],
        },
        {
          path: "./desino/2d.png",
          description: [
            {
              name: "Natalia Provorova",
              job_title: "WEB ",
              work_date: "05.2023 - presente",
            },
          ],
        },
        {
          path: "./desino/3d.png",
          description: [
            {
              name: "Roman Ivanov",
              job_title: "WEB",
              work_date: "05.2023 - presente",
            },
          ],
        },
        {
          path: "./desino/4d.png",
          description: [
            {
              name: "Kseniya Ramanchyk",
              job_title: "WEB",
              work_date: "05.2023 - presente",
            },
          ],
        },
        {
          path: "./desino/5d.png",
          description: [
            {
              name: "Maxim Sidorov",
              job_title: "Móvil",
              work_date: "07.2023 - presente",
            },
          ],
        },
        {
          path: "./devolop/nophoto.png",
          description: [
            {
              name: "Anatoli Kozel",
              job_title: "Móvil",
              work_date: "07.2023 - presente",
            },
          ],
        },
        {
          path: "./desino/6d.png",
          description: [
            {
              name: "Marina Kukharenko",
              job_title: "Creación de marca",
              work_date: "07.2023 - presente",
            },
          ],
        },
        {
          path: "./desino/7d.png",
          description: [
            {
              name: "Julia Vinogradova",
              job_title: "Creación de marca",
              work_date: "07.2023 - presente",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "operación",

      images: [
        {
          path: "./operacion/1o.png",
          description: [
            {
              name: "Maxim Nekrasov",
              job_title: "COO",
              work_date: "05.2023 - presente",
            },
          ],
        },
        {
          path: "./operacion/2o.png",
          description: [
            {
              name: "Antonio Navarro",
              job_title: "CRO ",
              work_date: "07.2023 - presente",
            },
          ],
        },
        {
          path: "./operacion/1o.png",
          description: [
            {
              name: "Daniil Lazukov",
              job_title: "Gerente de proyectos ",
              work_date: "07.2023 - presente",
            },
          ],
        },
      ],
    },
  ];
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
                <p>
                  DESCUBRE CÓMO PUEDES DISFRUTAR
                  <span className="puprle">
                    DEL CARIBE SIN PREOCUPACIONES Y SIN LAS COMPLICACIONES
                  </span>
                  <span> </span>QUE COMPORTA GESTIONAR UN INMUEBLE
                </p>
              </div>
              <button className="submit">
                <p>únete ahora</p>
              </button>
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
              <div className="palm">
                <img src="./palm.png" alt="" />
              </div>
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
                      <div className="cart_decsription ">
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
        <div className="question">
          <div className="question_body">
            <p className="por">
              ÚNETE A LA REVOLUCIÓN DE LAS INVERSIONES INMOBILIARIAS{" "}
            </p>
            <div className="block_body">
              <h2 className="blockcahin2"></h2>
              <p className="en">
                No pierdas la oportunidad de disfrutar del paraíso. únete a
                nosotros y descubre cómo puedes invertir de manera inteligente y
                sin preocupaciones.
              </p>
              <div className="form_more">
                <form action="" className="more_info">
                  <div className="info">
                    <label>
                      <input
                        className="text_input"
                        type="text"
                        value="Nombre*"
                      />
                    </label>
                    <label>
                      <input
                        className="text_input"
                        type="text"
                        value="E-mail*"
                      />
                    </label>
                    <label>
                      <input
                        className="text_input"
                        type="text"
                        value="Telefono*"
                      />
                    </label>
                  </div>
                  <div className="chekbox">
                    <input type="checkbox" name="" id="" />
                    <div className="some_text">
                      <p className="robot">No soy un robot.</p>
                      <p className="some">Pulse para continuar.</p>
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
        <div className="mira">
          <div className="mira_body">
            <div className="mira_text">
              <p className="videos">MIRA NUESTROS VIDEOS PROMOCIONALES</p>
              <p className="promocionales">
                Para conocer más sobre nuestra propuesta, mira nuestros videos
                promocionales.
              </p>
            </div>

            <div className="video_items">
              <img src="./ocean.png"></img>
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
          </div>
        </div>
        <div className="why2">
          <div className="why_body">
            <div className="question2">
              <h3 className="question_text">Fortalezas de nuestra empresa</h3>
              <div className="palm2">
                <img src="./rent_table.png" alt="" />
              </div>
            </div>
            <div className="reception">
              <div className="reception_body">
                <div className="flex">
                  <div className="cart_body ">
                    <div className="cart">
                      <div className="cart_header">
                        <h2>Experiencia</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription ">
                        Expertos en diferentes areas empresareales se juntaron
                        en un equipo integral para un éxito asegurado{" "}
                      </div>
                    </div>
                  </div>
                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header ">
                        <h2 className="white">Diversidad</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription ">
                        Equipo multidisciplinario con amplia gama de habilidades
                        y experiencias
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header">
                        <h2 className="white">Rentabilidad</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription pad2">
                        Posibilidad de generar ingresos alqulando vuestas
                        semanas a otras personas
                      </div>
                    </div>
                  </div>
                  <div className="cart_body">
                    <div className="cart ">
                      <div className="cart_header">
                        <h2>Escalabilidad</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription">
                        Nuestro modelo de negocios es altamente escalable, nos
                        permite expandirse a nuevos paises con facilidad
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="cart_body">
                    <div className="cart ">
                      <div className="cart_header">
                        <h2>Innovación</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription">
                        Pensamos de forma creativa y como solucionar problemas
                        de maneras nuevas y efectivas.
                      </div>
                    </div>
                  </div>

                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header">
                        <h2>Fidelización</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription">
                        Nuestro objetivo es relación a largo plazo con los
                        clientes gracias a excelente servicio y transparencia
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="cart_body">
                    <div className="cart white">
                      <div className="cart_header">
                        <h2>Alianzas</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription">
                        Asociación con otras empresas de la industria de la
                        hospitalidad o del turismo amplía nuestas ofertas{" "}
                      </div>
                    </div>
                  </div>

                  <div className="cart_body">
                    <div className="cart ">
                      <div className="cart_header">
                        <h2>Liquidez</h2>
                        <div className="icon"></div>
                      </div>
                      <div className="cart_decsription">
                        Nuestro timesharing incluye opción de reventa o
                        intercambio, lo que podría hacer que la inversión sea
                        más líquida y atractiva
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accard">
          <div key={accordionData.id} className="accordion">
            {accordionData.map(({ title, content, images }) => (
              <Accardion title={title} content={content} images={images} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
