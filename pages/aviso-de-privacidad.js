import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PrincipalContent from "../sections/principalContent";
import CustomModal from "../components/modal";
import FormRegister from "../components/formRegister";

const ArticleSection = styled.article`
  margin: 0px 30em;
  font-family: Poppins;
  @media screen and (max-width: 1655px) {
    margin: 0px 20em;
  }
  @media screen and (max-width: 1340px) {
    margin: 0px 10em;
  }
  @media screen and (max-width: 970px) {
    margin: 0px 5em;
  }
  @media screen and (max-width: 470px) {
    margin: 0px 1em;
  }
`;

const TitleSection = styled.section`
  font-size: 70px;
  line-height: 1.3em;
  color: #ff0282;
  @media screen and (max-width: 970px) {
    font-size: 50px;
  }
  @media screen and (max-width: 470px) {
    font-size: 30px;
  }
`;

const AvisoDePrivacidad = ({ dataPolicy }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  return (
    <PrincipalContent
      openModal={(visible) => {
        setIsVisibleModal(visible);
      }}
    >
      <CustomModal
        isVisible={isVisibleModal}
        onClose={() => {
          setIsVisibleModal(false);
        }}
        title="Compártenos tus datos"
      >
        <FormRegister
          onClose={(visible) => {
            setIsVisibleModal(visible);
          }}
          dataPolicy={dataPolicy}
          userType={null}
          policyType={null}
          amountPolicy={null}
        />
      </CustomModal>
      <div style={{ marginBottom: "5rem" }}>
        <ArticleSection>
          <section title="Aviso de privacidad">
            <div style={{ textAlign: "center" }}>
              <TitleSection>Aviso de privacidad</TitleSection>
            </div>
            <div style={{ fontSize: 16 }}>
              <p>
                <strong>“Rental Paymens” S.A.P.I. DE C.V.</strong>
              </p>

              <p>
                Por medio del presente, se hace constar{" "}
                <strong>“RENTAL PAYMENS”, S.A.P.I. DE C.V.</strong>, es
                responsable de recabar sus datos personales, así como del uso
                que se le dé a los mismos y de su protección, siendo su
                domicilio en Avenida Porfirio Díaz número 32, Colonia
                Insurgentes San Borja, Alcaldía Benito Juárez, Código Postal,
                03100, Ciudad de México.
              </p>

              <p>
                &nbsp;La información personal que Usted vierte y es contenida en
                esta solicitud será utilizada única y exclusivamente para la
                elaboración de contrato de arrendamiento y póliza jurídica que
                el cliente suscribe.
              </p>

              <p>
                &nbsp;Los datos personales recabados en esta solicitud son
                considerados como sensibles en términos del artículo{" "}
                <strong>3</strong> fracción quinta y novena de la Ley Federal de
                Protección de Datos Personales en posesión de los Particulares
                vigente.
              </p>

              <p>
                &nbsp;La veracidad de la información proporcionada por el
                solicitante es responsabilidad de quien suscribió dicha
                solicitud, por lo que libera de toda responsabilidad a{" "}
                <strong>“RENTAL PAYMENS”, S.A.P.I. DE C.V.</strong>, de
                cualquier responsabilidad al respecto.
              </p>

              <p>
                Usted tiene derecho de acceder, rectificar, limitar el uso o
                divulgación y cancelar sus datos personales, así como de
                oponerse al tratamiento de los mismos o revocar el
                consentimiento, lo anterior, a través de enviar un correo
                electrónico a la siguiente dirección:{" "}
                <strong>ropando@homify.ai</strong> quien será el encargado de
                llevar cabo el trámite solicitado.
              </p>

              <p>
                <strong>“RENTAL PAYMENS”, S.A.P.I. DE C.V.</strong>, no cederá
                los datos de los contratantes a terceros salvo solicitud previa
                y consentimiento expreso del titular, y en los supuestos
                contemplados por el artículo <strong>37</strong> de la Ley
                Federal de Protección de Datos Personales en posesión de los
                Particulares vigente.
              </p>

              <p>
                Usted tiene derecho a ejercitar sus derechos denominados{" "}
                <strong>“ARCO”</strong>, de acuerdo con lo siguiente:
              </p>

              <p>
                <strong>Acceso:</strong> Usted podrá elegir la manera de
                comunicarse, ya sea vía telefónica o mediante escrito directo, a
                los teléfonos o al domicilio, para efectos de que{" "}
                <strong>“RENTAL PAYMENS”, S.A.P.I. DE C.V.</strong>, le
                proporcione los Datos Personales relacionados con Usted, y que
                se encuentren en su posesión, de conformidad con la Ley.
              </p>

              <p>
                <strong>Rectificación:</strong> Usted podrá solicitar por
                escrito a <strong>“RENTAL PAYMENS”, S.A.P.I. DE C.V.</strong>,
                que cualquiera de sus Datos Personales, sean corregidos o
                modificados, según corresponda, de conformidad con la Ley.
              </p>

              <p>
                &nbsp;<strong>Cancelación:</strong> Usted podrá solicitar por
                escrito a <strong>“RENTAL PAYMENS”, S.A.P.I. DE C.V.</strong>,
                que se cancelen o den de baja sus Datos Personales, siempre y
                cuando exista una causa que justifique dicha acción y no tenga
                Usted obligaciones pendientes de cubrir de conformidad con la
                Ley.
              </p>

              <p>
                <strong>Oposición:</strong> En caso de que Usted no tenga
                relación u obligación legal alguna con{" "}
                <strong>“RENTAL PAYMENS”, S.A.P.I. DE C.V.</strong>, y decida no
                contratar para sí ninguno de los servicios que ésta le ofrece,
                puede hacer uso de este derecho, no compartiendo dato alguno.
              </p>
            </div>
          </section>
        </ArticleSection>
      </div>
    </PrincipalContent>
  );
};

AvisoDePrivacidad.getInitialProps = async (ctx) => {
  const response = await fetch(
    "https://api.homify.ai/api/catalogs/getAllPolicies",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idCustomer: null,
        idCustomerTenant: null,
        idSystemUser: null,
        idLoginHistory: null,
        type: 3,
        idProspectType: 2,
      }),
    }
  );
  const responseResult = await response.json();
  return { dataPolicy: responseResult.response };
};

export default AvisoDePrivacidad;
