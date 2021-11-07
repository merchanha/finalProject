import './footer.css'


function Footer() {
    return (
        <><div className="container-fluid footer-container">
            <div className="row justify-content-around footer-box">
                <div className="col-sm-12 col-md-5 pb-4">
                    <h1 className="h1footer my-0">Furniture Style</h1>
                    <h2>A life Style</h2>
                    <p className="footerp1">Somos un equipo de trabajo especializado en diseño y decoración de interiores, que abarca desde el desarrollo de proyectos, reformas y ejecución de obra, hasta el equipamiento y diseño de objetos.
                        Nuestro compromiso es nuestro diferencial.</p>
                </div>
                <div className="col-sm-12 col-md-5">
                    <h1 className="h1footer2 mb-3">Contacto</h1>
                    <span>xxxxxxxxxxxxxxxxx, Belgrano, Buenos Aires.</span>
                    <hr></hr>
                    <span><strong className="spanFooter">Tlf: </strong><a className="aFooter" href="+5491127836499"> +54 9 11 27836499</a></span>
                    <hr></hr>
                    <span><strong className="spanFooter">Mail: </strong><a className="aFooter" href="+5491127836499"> xxxxxxxxxxx</a></span>
                    <hr></hr>
                    <span><strong className="spanFooter">Web: </strong><a className="aFooter" href="+5491127836499"> xxxxxxxxxxxxx</a></span>
                    <hr></hr>
                </div>
            </div>
        </div><div className="container-fluid footer-container-2 p-0">
                <div className="row">
                    <div className="col">
                        <p>&#169; Copyrigth 2021 - HJE</p>
                    </div>
                </div>
            </div></>
    )
}

export default Footer