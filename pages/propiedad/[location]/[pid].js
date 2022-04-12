import React, { useState } from "react";
import Head from "next/head";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import {
  Content,
  ContainerDown,
  TabsProperty,
  Tab,
  ButtonIcon,
  ContentForm,
  ContentRight,
  GeneralCard,
  Card,
} from "../../../styles/styleProperty";
import IconHeartHfy from "../../../assets/svg/heart.svg";
import SectionCarouselInfo from "../../../sections/sectionCarouselHz";
import SectionFeatures from "../../../sections/sectionFeatures";
import PrincipalContent from "../../../sections/principalContent";
import SectionLocation from "../../../sections/sectionLocation";
import SectionAmenities from "../../../sections/sectionAmenities";

// export const getStaticPaths = async () => {
//     return {};
// };
const parseUrlHomify = (str, id) => {
  const normalize = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const deleteComas = normalize.replace(/,/gi, "");
  const addGuion = deleteComas.replace(/ /gi, "-");
  const formatUrl = `https://www.homify.ai/propiedad/${addGuion}/${id}`;
  return formatUrl;
};

const letterInitialName = (name) => {
  let nameInitial = "";
  if (isEmpty(name) === false) {
    nameInitial = name[0].toUpperCase();
  }
  return nameInitial;
};

const parseDescription = (str) => {
  let stringShort = "";
  if (isNil(str) === false && isEmpty(str) === false) {
    if (str.length > 155) {
      stringShort = str.substr(0, 155) + "...";
    } else {
      stringShort = str;
    }
  }
  return stringShort;
};

const dataTabsProperty = [
  {
    id: "1",
    text: "Características",
  },
  {
    id: "2",
    text: "Ubicación",
  },
  {
    id: "3",
    text: "Amenidades",
  },
];

const Property = ({ data }) => {
  const { metaTags, rest } = data;
  const [tabSelect, setTabSelect] = useState("1");

  return (
    <>
      <Head>
        <title>{rest.identifier}</title>
        <meta name="description" content={parseDescription(rest.description)} />
        <meta property="og:image" content={rest.documentMainPic} />
        {metaTags &&
          Object.entries(metaTags).map((entry) => (
            <meta property={entry[0]} content={entry[1]} />
          ))}
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content={rest.documentMainPic}
        />
      </Head>
      <PrincipalContent openModal={(visible) => {}} visibleFooter={false}>
        <div
          style={{
            height: "70px",
          }}
        ></div>
        <Content>
          <ContentForm owner>
            <div className="header-title">
              <h1 style={{ fontSize: "1.17em" }}>Detalle de inmueble</h1>
              {/* <ButtonIcon>
                <IconHeartHfy fill="transparent" stroke="#ff0282" />
              </ButtonIcon> */}
            </div>
            <div>
              <SectionCarouselInfo
                apartmentImages={
                  isNil(rest) === false &&
                  isNil(rest.apartmentDocuments) === false
                    ? rest.apartmentDocuments
                    : []
                }
                dataDetail={rest}
              />
              <ContainerDown>
                <TabsProperty>
                  {dataTabsProperty.map((row) => {
                    return (
                      <Tab
                        selected={tabSelect === row.id}
                        onClick={() => {
                          setTabSelect(row.id);
                        }}
                      >
                        <h1>{row.text}</h1>
                        <hr />
                      </Tab>
                    );
                  })}
                </TabsProperty>
                {tabSelect === "1" && (
                  <SectionFeatures publicProperty dataDetail={rest} />
                )}
                {tabSelect === "2" && <SectionLocation dataDetail={rest} />}
                {tabSelect === "3" && <SectionAmenities dataDetail={rest} />}
              </ContainerDown>
            </div>
          </ContentForm>
          <ContentRight>
            {/* <GeneralCard>
              <div className="header-title">
                <h1>Datos de contacto</h1>
              </div>
              <div className="content-card">
                <Card>
                  <div className="card-user">
                    <div className="top-info">
                      <div className="icon-info-circle">
                        <div>
                          <span>{letterInitialName(rest.contactName)}</span>
                        </div>
                      </div>
                      <div className="name-info">
                        <h3>{rest.contactName}</h3>
                        <span>{rest.contactPhoneNumberFormat}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </GeneralCard> */}
            <GeneralCard>
              <div className="header-title">
                <h1>Publicación</h1>
              </div>
              <div className="content-card">
                <Card>
                  <div className="card-user">
                    <h1 className="title-publication">{rest.title}</h1>
                    <br />
                    <p>
                      <div
                        className="description-publication"
                        dangerouslySetInnerHTML={{
                          __html:
                            isNil(rest.description) === false
                              ? rest.description.replace(/\n/g, "<br />")
                              : "",
                        }}
                      />
                    </p>
                  </div>
                </Card>
              </div>
            </GeneralCard>
          </ContentRight>
        </Content>
      </PrincipalContent>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    "https://api.homify.ai/api/property/getPropertyById",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idProperty: null,
        idApartment: null,
        identifier: params.pid,
        idCustomer: null,
        idSystemUser: null,
        idLoginHistory: null,
        offset: "-06:00",
      }),
    }
  );
  const responsePictures = await fetch(
    "https://api.homify.ai/api/property/getPropertyPictures",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idProperty: null,
        idApartment: null,
        identifier: params.pid,
        idCustomer: null,
        idSystemUser: null,
        idLoginHistory: null,
        offset: "-06:00",
      }),
    }
  );
  const responseAmenities = await fetch(
    "https://api.homify.ai/api/property/getAmenitiesByProperty",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idProperty: null,
        idApartment: null,
        identifier: params.pid,
        idCustomer: null,
        idSystemUser: null,
        idLoginHistory: null,
        offset: "-06:00",
      }),
    }
  );

  const responseResult = await response.json();
  const responseResultPictures = await responsePictures.json();
  const responseResultAmenities = await responseAmenities.json();

  const responseRest =
    isEmpty(responseResult.response) === false &&
    isNil(responseResult.response[0]) === false &&
    isNil(responseResult.response[0][0]) === false &&
    isEmpty(responseResult.response[0][0]) === false
      ? responseResult.response[0][0]
      : {};
  const responseRestPictures =
    isEmpty(responseResultPictures.response) === false &&
    isNil(responseResultPictures.response[0]) === false
      ? responseResultPictures.response[0]
      : [];
  const responseRestAmenities1 =
    isEmpty(responseResultAmenities.response) === false &&
    isNil(responseResultAmenities.response[0]) === false
      ? responseResultAmenities.response[0]
      : [];
  const responseRestAmenities2 =
    isEmpty(responseResultAmenities.response) === false &&
    isNil(responseResultAmenities.response[1]) === false
      ? responseResultAmenities.response[1]
      : [];
  const replaceAddress =
    isEmpty(responseRest) === false &&
    isNil(responseRest.shortAddress) === false &&
    isEmpty(responseRest.shortAddress) === false
      ? responseRest.shortAddress
      : "propiedad-homify";

  const formatUrl = parseUrlHomify(replaceAddress, responseRest.identifier);
  const metaTags = {
    "og:title": isEmpty(responseRest) === false ? responseRest.title : "",
    "og:description":
      isEmpty(responseRest) === false
        ? parseDescription(responseRest.description)
        : "",
    "og:image:type": "image/jpeg",
    "og:url": isEmpty(responseRest) === false ? formatUrl : "",
    "og:type": "website",
    "og:site_name": "Homify",
    "og:country-name": "México",
    "og:locale": "es_MX",
  };
  return {
    props: {
      data: {
        metaTags,
        rest: {
          ...responseRest,
          propertyAmenities: responseRestAmenities1,
          propertyGeneralCharacteristics: responseRestAmenities2,
          apartmentDocuments: responseRestPictures,
        },
      },
    },
  };
}

export default Property;
