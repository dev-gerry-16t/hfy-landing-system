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

const TerminosYCondiciones = ({ dataPolicy }) => {
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
          <section title="Términos y Condiciones">
            <div style={{ textAlign: "center" }}>
              <TitleSection>Términos y Condiciones</TitleSection>
            </div>
            <div style={{ fontSize: 16 }}>
              <p>
                <strong>Términos y condiciones generales.</strong>
              </p>
              <p>
                Los datos requeridos son para uso comercial de Rental Payments
                S.A. de C.V. con dirección en Porfirio Diaz 32, Insurgentes San
                Borja, Benito Juárez, 03100, CDMX (referido como "Proveedor de
                servicios" en adelante) proporciona una plataforma (en lo
                sucesivo, "www.homify.ai", independientemente del tipo de acceso
                a través de la web o la aplicación) en app.homify.ai.
              </p>
              <p>
                Y como un software separado de una webapp, a través del cual los
                expertos presentan su trabajo a todos, los usuarios ingresan
                información con el fin de revisión y aprobación para la
                comercialización de pólizas de arrendamiento y/o otros productos
                que en su momento se requieran.
              </p>
              <p>
                Los presentes Requisitos de participación y Condiciones de uso
                rigen la prestación de los servicios de pólizas de arrendamiento
                por parte del Proveedor de servicios para los usuarios
                interesados.
              </p>
              <p>
                <strong>
                  Registro de participación, manejo de datos de acceso,
                  terminación de la participación.
                </strong>
              </p>
              <p>
                <strong>Elegibilidad de registro.</strong>
              </p>
              <p>
                El uso de los servicios disponibles en el portal homify.ai
                requiere su registro como interesado en los servicios del
                proveedor. No existe ningún derecho de participación. El
                Proveedor de Servicios tendrá derecho a rechazar las solicitudes
                sin dar razones.
              </p>
              <p>
                Solo puede registrarse como interesado si es mayor de edad,
                tiene capacidad de pago del servicio. O como empresario, un
                empresario constituye una persona física o jurídica o sociedad
                con capacidad jurídica que actúa ejecutando su actividad
                comercial o su ocupación a través del trabajo por cuenta propia
                en la realización de comercializar inmuebles para renta.
              </p>
              <p>
                <strong>Responsabilidad de los datos de acceso.</strong>
              </p>
              <p>
                Durante el proceso de registro, se le pedirá que proporcione un
                nombre de usuario y una contraseña. El nombre de usuario debe
                contener el nombre de la persona o empresa interesada en rentar
                un inmueble o bien ser el dueño de uno con la decisión de
                prestarlo bajo un contrato de arrendamiento Usted es responsable
                de asegurarse de que el nombre de usuario no viole los derechos
                de terceros, en particular los derechos sobre nombres o marcas
                registradas, y no sea inmoral.
              </p>
              <p>
                Debe mantener la confidencialidad de los datos de acceso,
                incluida la contraseña, y no debe hacerlos accesibles a terceros
                no autorizados.
              </p>
              <p>
                Además, usted es responsable de asegurarse de que su acceso al
                portal homify.ai y los servicios disponibles en el portal
                homify.ai sean utilizados exclusivamente por usted o por
                personas autorizadas por usted. Si teme que terceros no
                autorizados hayan adquirido o vayan a tener conocimiento de sus
                datos de acceso, se lo notificará de inmediato al Proveedor de
                Servicios.
              </p>
              <p>
                Usted será responsable de cualquier uso y / u otra actividad
                ejecutada como resultado del uso de sus datos de acceso, de
                conformidad con las disposiciones legales.
              </p>
              <p>
                <strong>Actualización de los datos de expertos.</strong>
              </p>
              <p>
                Estará obligado a mantener sus datos (incluida la información
                requerida y otra información de contacto) actualizados. Si hay
                un cambio en los datos que proporcionaste durante tu
                participación, debes corregir la información en el portal de
                homify.ai inmediatamente en tu configuración personal. Si no
                logra hacerlo, notifíquenos los cambios de datos inmediatamente
                por correo electrónico al info@homify.ai o al teléfono
                5565840419
              </p>
              <p>
                <strong>Terminación de la participación.</strong>
              </p>
              <p>
                A menos que se acuerde lo contrario entre las Partes, ambas
                Partes pueden rescindir el Acuerdo siempre y cuando se cumplan
                con lo estipulado en contrato.
              </p>
              <p>
                El Proveedor de Servicios tendrá derecho a eliminar
                irremediablemente todos y cada uno de los datos generados dentro
                del alcance de su participación al final de los 30 días
                naturales posteriores a la entrada en vigor de la terminación y
                al final de los posibles períodos de provisión de datos legales.
              </p>
              <p>
                El usuario deberá descargar y asegurar todos y cada uno de los
                datos almacenados para él en el portal de homify.ai antes de la
                entrada en vigor de la terminación: en caso de duda, en el
                momento de dar aviso. El Proveedor de Servicios no estará
                obligado a compilar un informe de base de datos ni a entregar
                datos al usuario después de la entrada en vigor de la rescisión.
              </p>
              <p>
                El contenido y alcance de los servicios se determinará de
                acuerdo con los respectivos acuerdos contractuales y, en caso
                contrario, de acuerdo con las funcionalidades actualmente
                disponibles en el portal homify.ai, respectivamente.
              </p>
              <p>
                La información asesoría o consultas sobre los servicios en el
                portal homify.ai, son sin costo, la utilización de pólizas u
                otros servicios del portal, llevaran un costo dependiendo el
                mismo, todos marcados en los contratos emitidos en el portal
                homify.ai
              </p>
              <p>
                <strong>Términos y condiciones de uso de datos.</strong>
              </p>
              <p>
                Homify.ai solo usara los datos personales de los usuarios, para
                fines de comercio y registro de clientes, homify.ai no
                compartirá dichos datos con otras empresas o bases de datos, ah
                no ser que el usuario lo apruebe o solicite.
              </p>
              <p>
                El usuario elige compartir sus datos con el portal homify.ai y/o
                apps del proveedor, sin ser obligado y con decisión propia al
                registrarse en los portales mencionados.
              </p>
              <p>
                El usuario deberá pagar los costos marcados en contratos para
                poder hacer uso de los servicios de pólizas de arrendamiento u
                otro servicio que el usuario elija y marque en contratos firmado
                en común acuerdo entre el usuario y el proveedor.
              </p>
            </div>
          </section>
        </ArticleSection>
      </div>
    </PrincipalContent>
  );
};

TerminosYCondiciones.getInitialProps = async (ctx) => {
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

export default TerminosYCondiciones;
