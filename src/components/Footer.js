const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerRedes">
          <a href="index.html">
            <img src="/img/icon/inicio.png" alt="" /> Inicio
          </a>
          <a href="https://fb.me/mamitus.cba">
            <img src="/img/icon/facebook.png" alt="" />
            Facebook
          </a>
          <a href="https://www.instagram.com/mamitus.cba/">
            <img src="/img/icon/instagram.png" alt="" />
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
