import styles from "./Footer.module.css"; 

const Footer = () => {
  const teamMembers = [
    { name: "Alex R.", role: "CEO", img: "https://i.pravatar.cc/150?img=11" },
    { name: "Elena V.", role: "Lead Dev", img: "https://i.pravatar.cc/150?img=5" },
    { name: "Sora M.", role: "Designer", img: "https://i.pravatar.cc/150?img=3" }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Información corporativa y sucursales */}
        <div className={styles.footerSection}>
          <h4>Contacto y Sedes</h4>
          <p>Sede Central: Av. Neón 2077, CyberCity</p>
          <p>Email: contacto@neontech.io</p>
          <p>Teléfono: +54 (11) 4040-0000</p>
        </div>

        {/* Newsletter */}
        <div className={styles.footerSection}>
          <h4>Newsletter</h4>
          <p>Suscríbete para novedades y ofertas exclusivas.</p>
          <div className={styles.newsletterInput}>
            <input type="email" placeholder="Tu e-mail..." />
            <button>Enviar</button>
          </div>
        </div>

        {/* Tarjetas de integrantes */}
        <div className={styles.footerSection}>
          <h4>Nuestro Equipo</h4>
          <div className={styles.teamContainer}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <img src={member.img} alt={member.name} />
                <h5>{member.name}</h5>
                <span>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Propiedad intelectual y políticas */}
      <div className={styles.footerBottom}>
        <p>&copy; 2026 NEON TECH Inc. Todos los derechos reservados.</p>
        <p>Políticas de Privacidad | Términos de Servicio | Propiedad Intelectual</p>
      </div>
    </footer>
  );
};

export default Footer;