

export const NosotrosPage = () =>{

    return(
        <>
            <main>
        <div className=" container mt-5">
            <h1 className="text-center mb-4">Sobre nosotros</h1>
            <p className="text-center">Somos un equipo en constante capacitación especializado en las tecnologías de la web, lo cual nos permite ofrecer nuestros servicios de creación de sitios y aplicaciones web de forma confiable y segura.<br/>
            Desarrollamos vuestras futuras tecnologías por medio de codificación, lo que nos permite tener acceso total a futuras modificaciones y mantenciones. Si tienes alguna pregunta, no dudes en consultarnos por medio de nuestra sección de contacto, via mail o por redes sociales.</p>

            <div className="w-100 d-flex justify-content-center mt-5 mb-5">
                <a className="text-center btn-section2 enlace" href="contacto.html">Contáctanos</a>
            </div>
        </div>
        <div className="text-center mb-5">
            <img src="/img/img-nosotros.png" className="w-75" alt=""/>
        </div>
    </main>
        </>

    )
}