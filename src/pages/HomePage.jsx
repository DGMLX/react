

export const HomePage = () =>{

    return(
        <>
                <main>
            <section className="section1 container-fluid">
                <div className="contenedor-textos-section1 d-flex justify-content-center align-items-center">
                <div className="row texto-section1 mt-5 a ">
                        <div className="col-10 w-100 mb-3">
                            <h2 className="text-white text-center fs-1">Desarrollo web</h2>
                        </div>
                        <div className="col-10 w-100">
                            <p className="text-white text-center fs-5">Da a conocer tus servicios y productos, desarrollamos el sitio web para tu negocio con dominio y hosting gratis por un año.</p>
                        </div>
                        <div className="w-100 d-flex justify-content-center mt-3">
                            <a className="btn-section1 enlace estilo-intersection" href="#proyectos" id="intersection1">Ver proyectos</a>
                        </div>
                </div>
                
    </div>
            </section>


            <section className="section-price container mt-5 d-md-none estilo-intersection" id="intersection2">
                <div className="text-center m-auto contenedor-price ">
                    <h2 className="mt-3 mb-3">Desarrollo de sitio web</h2>
                    <h3 className="mt-3 mb-3 price">$80.000</h3>
                    <ul className="contenedor-lista">
                        <li><i className="bi bi-caret-right-fill"></i>Dominio .cl gratis 1 año</li>
                        <li><i className="bi bi-caret-right-fill"></i>Hosting gratis 1 año</li>
                        <li><i className="bi bi-caret-right-fill"></i>Diseño Responsive</li>
                        <li><i className="bi bi-caret-right-fill"></i>Correos corporativos</li>
                        <li><i className="bi bi-caret-right-fill"></i>Ubicación mapa Google Maps</li>
                        <li><i className="bi bi-caret-right-fill"></i>Galeria de imágenes</li>
                        <li><i className="bi bi-caret-right-fill"></i>Formulario de contacto</li>
                        <li><i className="bi bi-caret-right-fill"></i>Botones de redes sociales</li>
                        <li><i className="bi bi-caret-right-fill"></i>Animaciones CSS</li>
                        <li><i className="bi bi-caret-right-fill"></i>Certificado de seguridad SSL gratis</li>
                    </ul>
                </div>

            </section>


            <section className="section2 mt-5 container">
                <h1 className="text-center container mb-5">Desarrollamos tu sitio web profesional a la medida</h1>
                <div className="d-flex justify-content-around align-items-center" >
                    <div className="col-12 col-md-7">
                    
                        <p className="text-center w-75 m-auto fs-5">Hacemos realidad tu sueño de tener el sitio web de tu negocio. Tener una página web para tu empresa crea muchas ventajas de comunicación de tu trabajo hacia tus clientes, además de generar confianza en los usuarios. <br/>
                        Actualmente el mundo se informa y busca servicios por Internet, te ofrecemos nuestros servicios de desarrollo web y creamos tu sitio web profesional a la medida.
                        </p>
                        <div className="w-100 d-flex justify-content-center mt-5 estilo-intersection" id="intersection12">
                        <a className="text-center btn-section2 enlace" href="contacto.html">Contáctanos</a>
                        </div>
                    </div>

                    <div className="section-price container col-4 d-none d-md-block">
                        <div className="text-center m-auto contenedor-price estilo-intersection " id="intersection3">
                            <h2 className="mt-3 mb-3">Desarrollo de sitio web</h2>
                            <h3 className="mt-3 mb-3 price">$80.000</h3>
                            <ul className="contenedor-lista">
                                <li><i className="bi bi-caret-right-fill"></i>Dominio .cl gratis 1 año</li>
                                <li><i className="bi bi-caret-right-fill"></i>Hosting gratis 1 año</li>
                                <li><i className="bi bi-caret-right-fill"></i>Diseño Responsive</li>
                                <li><i className="bi bi-caret-right-fill"></i>Correos corporativos</li>
                                <li><i className="bi bi-caret-right-fill"></i>Ubicación mapa Google Maps</li>
                                <li><i className="bi bi-caret-right-fill"></i>Galeria de imágenes</li>
                                <li><i className="bi bi-caret-right-fill"></i>Formulario de contacto</li>
                                <li><i className="bi bi-caret-right-fill"></i>Botones de redes sociales</li>
                                <li><i className="bi bi-caret-right-fill"></i>Animaciones CSS</li>
                                <li><i className="bi bi-caret-right-fill"></i>Certificado de seguridad SSL gratis</li>
                            </ul>
                        </div>
                
                </div>
            </div>
            </section>

            <hr/>

            <section className="section3 mt-5">
                    <div className=" d-flex justify-content-center flex-wrap">
                        <img src="/img/imgpng1.png" className="imgpng col-12 estilo-intersectionSlider" alt="" id="intersection4"/>
                        <h3 className="mt-3 text-center col-12">Personal capaticado</h3>
                        <p className="text-center">Contamos con un equipo de desarrolladores web capacitados y con experiencia en creación de sitios webs.</p>
                    </div>

                    <div className="d-flex justify-content-center flex-wrap mt-3">
                        <img src="/img/imgpng2.png" className="imgpng col-12 estilo-intersectionSlider" alt="" id="intersection5"/>
                        <h3 className="mt-3 text-center col-12">Control del código raíz de tu sitio web</h3>
                        <p className="text-center">Desarrollamos tu página con los lenguajes de la web desde cero, lo que nos permite tener control y acceso del código para modificaciones de cualquier elemento si es necesario.

                        </p>
                    </div>

                    <div className=" d-flex justify-content-center flex-wrap">
                        <img src="/img/imgpng3.png" className="imgpng col-12 estilo-intersectionSlider" alt="" id="intersection6"/>
                        <h3 className="mt-3 text-center col-12">Sitio web adaptado para todo tipo de pantallas</h3>
                        <p className="text-center">Tener una página web responsive es fundamental hoy en día, ya que si no contamos con un diseño web que se pueda adaptar a la gran mayoría de dispositivos y a los diferentes tamaños de pantalla, estariamos perdiendo usuarios.</p>
                    </div>

                    <div className="w-100 d-flex justify-content-center mt-4">
                        <a className="text-center btn-section2 enlace estilo-intersection" id="intersection7" href="servicios.html">Conoce nuestros servicios</a>
                        </div>

            </section>

            <section className="section4 mt-5" id="proyectos">
                <h2 className="text-center mb-3">Proyectos Realizados</h2>
                <div>
                    <div className="col-12 mb-5">
                        <a href="https://arriendodecamionesplumagyg.cl/" target="_blank" className="enlace-proyectos">
                            <div className="proyecto-izajes d-flex justify-content-center align-items-center intersection-vertical" id="intersection8">
                                <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                            </div>
                        </a>
                        <h2 className="text-center mt-2">Izajes y transportes G&G</h2>
                        <p className="mt-3 text-center">Sitio web realizado para Izajes y transportes G&G, empresa dedicada a servicios de izajes, arriendo de camiones pluma y transportes de carga dentro de la región de Valparaíso y con translado de equipos a distintas regiones de Chile.</p>
                        
                    </div>
                    <div className="col-12 mt-5 mb-5">
                        <a href="https://aridosquintaregion.cl/" target="_blank" className="enlace-proyectos">
                            <div className="proyecto-aridos d-flex justify-content-center align-items-center intersection-vertical" id="intersection9">
                                <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                            </div>
                        </a>
                        <h2 className="text-center mt-2">Aridos Muñoz</h2>
                        <p className="mt-3 text-center">Sitio web realizado para Aridos Muñoz, empresa familiar dedicada a la venta y transporte de aridos, además de realizar servicios de transporte de cargas, fletes varios y retiros de escombros</p>
                        
                    </div>

                    <div className="col-12 mt-5 mb-5">
                        <a href="https://dgmlx.github.io/soporteComputacional/" target="_blank" className="enlace-proyectos">
                            <div className="proyecto-soporte d-flex justify-content-center align-items-center intersection-vertical" id="intersection10">
                                <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                            </div>
                        </a>
                        <h2 className="text-center mt-2">Servicio y soporte computacional</h2>
                        <p className="mt-3 text-center">Proyecto de plantilla para negocio de soporte técnico en computación. Optimización y mantención de equipos para mejorar el rendimiento, servicios de reparaciones, limpiezas, cambios de componentes e instalaciones de programas computacionales.</p>
                        
                    </div>

                    

                    <div className="w-100 d-flex justify-content-center mt-4 estilo-intersection" id="intersection11">
                        <a className="text-center btn-section2 enlace" href="proyectos.html">Ver más proyectos</a>
                    </div>

                </div>

            </section>
            
            <section className="section5 mt-5 fondo-blanco">
                <div className="container">
                    <h1 className="text-center pt-5 mb-5">No dudes en consultar</h1>
                    <div className="row d-flex justify-content-center justify-content-lg-around">
                        
                        <div className="col-12 col-lg-5 mb-5">
                            <form action="conexion.php" method="post" className="form">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-white fs-5">Nombre</label>
                                <input type="text" className="form-control" 
                                name="name"
                                placeholder="Ingresa tu nombre"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label text-white fs-5">Correo electrónico</label>
                                <input type="email" className="form-control" name="email" placeholder="correo@correo.com"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label text-white fs-5">Mensaje</label>
                                <textarea className="form-control" name="message" rows="3" ></textarea>
                            </div>
                            <div className="w-100 d-flex justify-content-center mt-5">
                                <button className=" btn-section1 enlace fs-5" type="submit" name="submit">Enviar</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    
                    </div>
                
            </section>
            
        </main>
        </>

    )
}