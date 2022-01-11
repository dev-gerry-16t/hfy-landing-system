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
        <meta property="og:site_name" content={rest.shortAddress}></meta>
        {metaTags &&
          Object.entries(metaTags).map((entry) => (
            <meta property={entry[0]} content={entry[1]} />
          ))}
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content={rest.documentMainPic}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <PrincipalContent openModal={(visible) => {}}>
        <Content>
          <ContentForm owner>
            <div className="header-title">
              <h1 style={{ fontSize: "1.17em" }}>Detalle de inmueble</h1>
              <ButtonIcon>
                <IconHeartHfy fill="transparent" stroke="#ff0282" />
              </ButtonIcon>
            </div>
            <div>
              <SectionCarouselInfo
                apartmentImages={
                  isNil(rest) === false &&
                  isNil(rest.apartmentDocuments) === false
                    ? JSON.parse(rest.apartmentDocuments)
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
  const responseResult = await response.json();
  const responseRest =
    isEmpty(responseResult.response) === false &&
    isNil(responseResult.response[0]) === false &&
    isNil(responseResult.response[0][0]) === false &&
    isEmpty(responseResult.response[0][0]) === false
      ? responseResult.response[0][0]
      : {};
  const replaceAddress =
    isEmpty(responseRest) === false &&
    isNil(responseRest.shortAddress) === false &&
    isEmpty(responseRest.shortAddress) === false
      ? responseRest.shortAddress
      : "propiedad-homify";
  const deleteComas = replaceAddress.replace(/,/gi, "");
  const addGuion = deleteComas.replace(/ /gi, "-");
  const metaTags = {
    "og:title": responseRest.title,
    "og:description": responseRest.title,
    "og:image:type": "image/jpeg",
    "og:url": `https://homify.ai/propiedad/${addGuion}/${responseRest.identifier}`,
    "og:type": "website",
  };
  return { props: { data: { metaTags, rest: responseRest } } };
}

export default Property;
