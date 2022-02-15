const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerRedes">
          <a href="index.html">
            <img src="../img/iconos/inicio.png" alt="" /> Inicio
          </a>
          <a href="https://fb.me/mamitus.cba">
            <img src="../img/iconos/facebook.png" alt="" />
            Facebook
          </a>
          <a href="https://www.instagram.com/mamitus.cba/">
            <img src="../img/iconos/instagram.png" alt="" />
            Instagram
          </a>
        </div>

        <div className="footerContact">
          <p>Telefono: </p>
          <p>Correo Electronico: </p>
          <p>Dirreccion: </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
