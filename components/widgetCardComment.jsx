import React from "react";

const WidgetCardComment = ({ name, lastName, userType, src, text }) => {
  return (
    <div title="usuarios">
      <section title="info-usuario-homify">
        <img src={src} width={80} height={80} alt="usuario" />
        <div>
          <p style={{ margin: 0 }}>
            {name}
            <br />
            {lastName}
          </p>
          <label title="tipo-de-usuario" lang="es">
            {userType}
          </label>
        </div>
      </section>
      <label title="comentario" lang="es">
        {text}
      </label>
    </div>
  );
};

export default WidgetCardComment;
