'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {


    useEffect(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker
            .register('/service-worker.js')
            .then(() => {
              console.log('Service Worker registrado correctamente');
            })
            .catch((error) => {
              console.error('Error al registrar el Service Worker:', error);
            });
        }
      }, []);

    return (
        <main className={styles.principal}>
            <section className={styles.main}>
                <div className={styles.boxUp}>
                    <div className={styles.div}>
                        <img className={styles.img} src="https://i.pinimg.com/236x/70/71/71/707171e258b8e7a4f875d19aa8ca31ea.jpg" alt="" />
                    </div>
                    <div className={styles.div}>
                        <h1 className={styles.h1}>Uriel Marquez Cruz</h1>
                    </div>
                </div>
                <div>
                    <a className={styles.a} href="#info">Ver más</a>
                </div>
            </section>

            <section className={styles.info} id="info" >
                <article className={styles.boxbig}>
                    <div className={styles.box}>
                        <h2>Informacion Personal</h2>
                        <p>Actualmente cursando la ingeniería en Desarrollo y Gestión de Software, soy una
                            persona apasionada por el aprendizaje continuo, ingresando en cursos y obteniendo
                            certificaciones en el área de Desarrollo Web para mejorar mis competencias.</p>
                    </div>

                    <div className={styles.box}>
                        <h2>EXPERIENCIA LABORAL MÁS RECIENTE</h2>
                        <h3>Desarrollador Web en Socorro Romero Sánchez</h3>
                        <br />
                        Mayo 2023 - Agosto 2023 [Tehuacán, Puebla]
                        <br />
                        Responsabilidades
                        <ul>
                            <li>
                                Diseñar la interfaz del sitio web utilizando Figma, garantizando una interfaz de
                                usuario atractiva.
                            </li>
                            <li>
                                Desarrollar el sitio web utilizando tecnologías como HTML, CSS, y JavaScript.
                            </li>
                            <li>
                                Implementar un sistema de inicio de sesión con PHP para el personal de
                                Recursos Humanos, permitiéndoles acceso a un CRUD de vacantes, lo cual
                                les permitió agregar y eliminar vacantes que se reflejaban en el sitio principal
                                de Socorro Romero Sánchez.
                            </li>
                            <li>
                                Integrar la API de EmailJs para facilitar la comunicación directa entre los
                                usuarios y la empresa
                            </li>
                        </ul>
                    </div>

                    <div className={styles.box}>
                        <h2>CERTIFICACIONES</h2>
                        <div>
                            <h3>Introducción al desarrollo de front-end</h3>
                            <p>Meta</p>
                            <p>Expedición: Julio - 2024</p>
                            <a
                                className={styles.a1}
                                href="https://www.coursera.org/account/accomplishments/verify/NTLAF42VMVRP"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Coursera
                            </a>
                        </div>
                    </div>


                    <div className={styles.box}>
                        <h2>PROYECTOS</h2>
                        <p>

                            Reestructuración de sito web para Socorro Romero Sánchez
                            <a className={styles.a1} href="https://www.gruposrs.com/" target="_blank">Socorro Romero Sanchez</a>
                        </p>
                    </div>

                </article>
            </section>


        </main>
    )
}


