import React from "react";
import stylesCustomersInfo from "../styles/cardsCustomers.module.scss";

const UserCommentSection = () => {
  return (
    <section className={stylesCustomersInfo.commentUser}>
      <p style={{ marginTop: "2%" }}>
        Que dicen de <span>nosotros...</span>
      </p>
      <label>Conoce las experiencias de nuestros usuarios</label>
      <section className={stylesCustomersInfo.cards}>
        <div title="usuarios">
          <section title="info-usuario-homify">
            <img src="/patricia.png" width={80} height={80} alt="usuario" />
            <div>
              <p>
                Patricia
                <br />
                Rivera
              </p>
              <label title="tipo-de-usuario" lang="es">
                Propietaria
              </label>
            </div>
          </section>
          <label title="comentario" lang="es">
            “Mejor aplicación para la gestión del alquiler. Para llevar la
            gestión de alquileres, tanto como propietario como inquilino.”
          </label>
        </div>
        <div title="usuarios">
          <section title="info-usuario-homify">
            <img src="/alfredo.png" width={80} height={80} alt="usuario" />
            <div>
              <p>
                Alfredo
                <br />
                Santos
              </p>
              <label title="tipo-de-usuario" lang="es">
                Asesor
              </label>
            </div>
          </section>
          <label title="comentario" lang="es">
            "App integral de gestión del alquiler. Completa aplicación para
            gestionar el alquiler de inicio a fin."
          </label>
        </div>
        <div title="usuarios">
          <section title="info-usuario-homify">
            <img src="/roberto.png" width={80} height={80} alt="usuario" />
            <div>
              <p>
                Roberto
                <br />
                Perez
              </p>
              <label title="tipo-de-usuario" lang="es">
                Inquilino
              </label>
            </div>
          </section>
          <label title="comentario" lang="es">
            “Muy fácil de utilizar, te hace desde la declaración de la renta,
            hasta informes. Totalmente recomendable”
          </label>
        </div>
      </section>
    </section>
  );
};
export default UserCommentSection;
