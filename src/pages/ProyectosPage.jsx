
export const ProyectosPage = () =>{

    return(
        <>
            <main>
        <div className="mt-5">
            <h1 className="text-center">Nuestros proyectos</h1>
            <p className="mt-4 text-center">Te dejamos nuestro portafolio de proyectos en donde encontrarás los sitios y aplicaciones web que hemos realizado, no dudes en consultarnos para hacer crecer tu negocio. </p>
        </div>

        <div>
            <div className="col-12 mb-5">
                <a href="https://arriendodecamionesplumagyg.cl/" target="_blank" className="enlace-proyectos">
                    <div className="proyecto-izajes d-flex justify-content-center align-items-center intersection-vertical" id="intersection22">
                        <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                    </div>
                </a>
                <h2 className="text-center mt-2">Izajes y transportes G&G</h2>
                <p className="mt-3 text-center">Sitio web realizado para Izajes y transportes G&G, empresa dedicada a servicios de izajes, arriendo de camiones pluma y transportes de carga dentro de la región de Valparaíso y con translado de equipos a distintas regiones de Chile.</p>
            </div>

            <div className="col-12 mt-5 mb-5">
                <a href="https://aridosquintaregion.cl/" target="_blank" className="enlace-proyectos">
                    <div className="proyecto-aridos d-flex justify-content-center align-items-center intersection-vertical" id="intersection23">
                        <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                    </div>
                </a>
                <h2 className="text-center mt-2">Aridos Muñoz</h2>
                <p className="mt-3 text-center">Sitio web realizado para Aridos Muñoz, empresa familiar dedicada a la venta y transporte de aridos, además de realizar servicios de transporte de cargas, fletes varios y retiros de escombros</p>
                
            </div>

            <div className="col-12 mt-5 mb-5">
                <a href="https://dgmlx.github.io/soporteComputacional/" target="_blank" className="enlace-proyectos">
                    <div className="proyecto-soporte d-flex justify-content-center align-items-center intersection-vertical" id="intersection24">
                        <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                    </div>
                </a>
                <h2 className="text-center mt-2">Servicio y soporte computacional</h2>
                <p className="mt-3 text-center">Proyecto de plantilla para negocio de soporte técnico en computación. Optimización y mantención de equipos para mejorar el rendimiento, servicios de reparaciones, limpiezas, cambios de componentes e instalaciones de programas computacionales.</p>
                
            </div>

            <div className="col-12 mt-5 mb-5">
                <a href="https://dgmlx.github.io/administrador-gastos/" target="_blank" className="enlace-proyectos">
                    <div className="proyecto-presupuesto d-flex justify-content-center align-items-center intersection-vertical" id="intersection25">
                        <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                    </div>
                </a>
                <h2 className="text-center mt-2">Administrador de gastos</h2>
                <p className="mt-3 text-center">Proyecto de aplicación web que te permite calcular los gastos de forma dinámica, el cual a base de un presupuesto inicial que elige el usuario, va calculando el total de presupuesto según los gastos que se incluyan.</p>
                
            </div>

            {/*<div className="col-12 mt-5 mb-5">
                <a href="https://aridosquintaregion.cl/" target="_blank" className="enlace-proyectos">
                    <div className="proyecto-gasfiteria d-flex justify-content-center align-items-center">
                        <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                    </div>
                </a>
                <h2 className="text-center mt-2">Servicios de gasfitería</h2>
                <p className="mt-3 text-center">Sitio web realizado para Aridos Muñoz, empresa familiar dedicada a la venta y transporte de aridos, además de realizar servicios de transporte de cargas, fletes varios y retiros de escombros</p>
                
    </div>*/}

            <div className="col-12 mt-5 mb-5">
                <a href="https://dgmlx.github.io/cryptoProyect/" target="_blank" className="enlace-proyectos">
                    <div className="proyecto-crypto d-flex justify-content-center align-items-center intersection-vertical" id="intersection26">
                        <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                    </div>
                </a>
                <h2 className="text-center mt-2">Cotizador de criptomonedas</h2>
                <p className="mt-3 text-center">Aplicación web dinámica que permite cotizar diferentes criptomonedas según la moneda del país que se seleccione. Nos permite obtener el precio actual, el precio más alto del día,el precio más bajo del día y la variación de la criptomoneda seleccionada en las últimas 24 horas. </p>
                
            </div>

            <div className="col-12 mt-5 mb-5">
                <a href="https://dgmlx.github.io/proyectoVet/" target="_blank" className="enlace-proyectos">
                    <div className="proyecto-vet d-flex justify-content-center align-items-center intersection-vertical" id="intersection27">
                        <h2 className="visitar-web w-100 text-center pt-2 pb-2">VER SITIO WEB</h2>
                    </div>
                </a>
                <h2 className="text-center mt-2">Administrador de veterinaria</h2>
                <p className="mt-3 text-center">Aplicación web dinámica que permite administrar las mascotas que ingresan a una veterinaria, manteniendo una lista de pacientes con su respectiva información, teniendo la opción de editar y eliminar cada paciente.</p>
                
            </div>


        </div>
    </main>
        </>

    )
}