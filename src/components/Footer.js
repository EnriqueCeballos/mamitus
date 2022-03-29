const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerRedes">
          <a href="index.html">
            <img
              src="https://cdn-icons-png.flaticon.com/512/20/20176.png"
              alt="Inicio"
            />
            Inicio
          </a>
          <a href="https://fb.me/mamitus.cba">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png"
              alt="Icono Facebook"
            />
            Facebook
          </a>
          <a href="https://www.instagram.com/mamitus.cba/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png"
              alt="Icono Instagram"
            />
            Instagram
          </a>
        </div>
        <div className="footerLogo">
          <a>MAMITUS</a>
        </div>
        <div className="footerContact">
          <h3>DATOS DE CONTACTO</h3>
          <p>Telefono: </p>
          <p>Correo Electronico: </p>
          <p>Dirreccion: </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
