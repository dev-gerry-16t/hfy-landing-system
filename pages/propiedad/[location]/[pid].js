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

// export const getStaticPaths = async () => {
//     return {};
// };

const Property = ({ data }) => {
  const { metaTags, rest } = data;
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
      <Content>
        <ContentForm owner>
          <div className="header-title">
            <h1 style={{ fontSize: "1.17em" }}>Detalle de inmueble</h1>
            <ButtonIcon>
              {/* <IconHeart
                    backGround="transparent"
                    color="var(--color-primary)"
                  /> */}
              {/* <IconShare
                color="var(--color-primary)"
                backGround="var(--color-primary)"
              /> */}
            </ButtonIcon>
          </div>
        </ContentForm>
      </Content>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    "https://apitest.homify.ai/api/property/getPropertyById",
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
    "og:description": responseRest.description,
    "og:image:type": "image/jpeg",
    "og:url": `https://homify.ai/propiedad/${addGuion}/${responseRest.identifier}`,
    "og:type": "website",
  };
  return { props: { data: { metaTags, rest: responseRest } } };
}

export default Property;
