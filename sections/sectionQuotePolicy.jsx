import React, { useState } from "react";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";
import styled from "styled-components";

const GeneralSection = styled.section`
  padding: 4em 7em;
  margin-top: 3%;
  @media screen and (max-width: 1370px) {
    padding: 4em 1rem;
  }
  @media screen and (max-width: 520px) {
    padding: 4em 10px;
  }
`;

const TitleSection = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
  color: #4e4b66;
  margin: 0px;
  span {
    color: #ff0282;
  }
  @media screen and (max-width: 520px) {
    font-size: 35px;
  }
`;

const TitleSectionAmount = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 54px;
  line-height: 40px;
  color: #4e4b66;
  margin-bottom: 40px;
  span {
    color: #ff0282;
  }
`;

const TotalPercentAmount = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  color: #4e4b66;
  text-align: center;
  margin-bottom: 0px;
  span {
    color: #ff0282;
  }
`;

const TotalPercent = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 40px;
  color: #ff0282;
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: center;
`;

const SubTitleSection = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 64px;
  color: #4e4b66;
  margin: 0px;

  @media screen and (max-width: 520px) {
    font-size: 35px;
  }
`;

const AlignTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DivRange = styled.div`
  width: 60%;
  padding: 0px 2rem;
  @media screen and (max-width: 570px) {
    padding: 0px 1rem;
    width: 90%;
  }

  @media screen and (max-width: 420px) {
    padding: 0px 10px;
    width: 98%;
  }
`;

const InputRange = styled.input``;

const SectionCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 6em;
`;

const CardPolicy = styled.div`
  width: 282px;
  min-height: 310px;
  background: #ffffff;
  box-shadow: 0px 1px 8px 6px #ebebf1;
  border-radius: 16px;
  position: relative;
  margin-top: 4em;

  button {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    border: 1px solid #ff0282;
    box-sizing: border-box;
    border-radius: 16px;
    background: #ffffff;
    color: #ff0282;
    width: 80%;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  &:hover {
    button {
      background: #ff0282;
      color: #fff;
    }
  }

  @media screen and (max-width: 590px) {
    margin-bottom: ${(props) => (props.mostPopular ? "16em" : "0px")};
  }
`;

const CardPolicyMorePopular = styled.div`
  width: 282px;
  background: #ffffff;
  box-shadow: 0px 1px 8px 6px #ebebf1;
  border-radius: 16px;
  position: absolute;
  z-index: 1;
`;

const TargetPolicyMorePopular = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  background: #ff0282;
  border-radius: 16px;
  position: absolute;
  top: -40px;
  z-index: 0;
  display: flex;
  justify-content: center;
  padding: 5px 0px;
  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: 0.75px;
    color: #ffffff;
  }
`;

const TitleCard = styled.h1`
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.75px;
  color: #4e4b66;
  position: relative;
  margin-bottom: 0px;
  span {
    color: #ff0282;
  }
`;

const NotAval = styled.span`
  margin: 0px;
  font-family: Poppins;
  font-size: 12px;
  position: absolute;
  width: 100%;
  text-align: center;
  color: #ff0282;
`;

const RowInformation = styled.p`
  padding: 0px 20px;
  display: flex;
  span {
    margin-left: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #4e4b66;
  }
`;

const ContentInformation = styled.div`
  height: 335px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SectionQuotePolicy = ({ dataPolicy, onSelectPolicy }) => {
  const initialStates = {
    idProspectType: 1,
    givenName: "",
    lastName: "",
    mothersMaidenName: "",
    phoneNumber: "",
    emailAddress: "",
    budgeAmount: 0,
    idPolicy: "",
    realState: "",
  };

  const [dataForm, setDataForm] = useState(initialStates);

  const parseFormatCurrency = (money, fraction, maxFraction) => {
    let resultNumber = "";
    if (isNil(money) === false) {
      const formatMoneyJson = {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: fraction,
        maximumFractionDigits: maxFraction || 20,
      };
      const locale = "en-US";
      const moneyFormat = new Intl.NumberFormat(locale, formatMoneyJson);
      resultNumber = moneyFormat.format(money);
    }
    return resultNumber;
  };

  return (
    <GeneralSection>
      <AlignTitle>
        <TitleSection>
          Cotizador <span>Homify</span>
        </TitleSection>
        <SubTitleSection>¿Cuál es el monto de tu renta?</SubTitleSection>
      </AlignTitle>
      <AlignTitle style={{ margin: "4em 0px" }}>
        <TitleSectionAmount>
          {parseFormatCurrency(dataForm.budgeAmount)}
        </TitleSectionAmount>
        <DivRange>
          <InputRange
            value={dataForm.budgeAmount}
            style={{ width: "100%" }}
            type="range"
            step="100"
            min="10000"
            max="150000"
            onChange={(e) => {
              setDataForm({
                ...dataForm,
                budgeAmount: e.target.value,
              });
            }}
          />
        </DivRange>
      </AlignTitle>
      <SectionCards>
        {isEmpty(dataPolicy) === false &&
          dataPolicy.map((rowMap) => {
            const namePolicy =
              isNil(rowMap.style) === false && isEmpty(rowMap.style) === false
                ? JSON.parse(rowMap.style)
                : {};
            const contentPolicy =
              isNil(rowMap.contentCard) === false &&
              isEmpty(rowMap.contentCard) === false
                ? JSON.parse(rowMap.contentCard)
                : [];

            let content = <div />;
            if (rowMap.isMostPopular === false) {
              content = (
                <CardPolicy>
                  <div>
                    <TitleCard>
                      {namePolicy.text1} <br />
                      <span>{namePolicy.text2}</span>
                    </TitleCard>
                    {rowMap.requiresEndorsement === false &&
                      rowMap.idPolicy ===
                        "54C9414E-3B8E-42B5-8F80-940F2641F888" && (
                        <NotAval>(No se necesita aval)</NotAval>
                      )}
                  </div>
                  {isNil(dataForm.budgeAmount) === false &&
                  rowMap.minimunAmount >
                    dataForm.budgeAmount * rowMap.percentBase ? (
                    <TotalPercentAmount>
                      {isNil(dataForm.budgeAmount) === false &&
                      isNil(dataForm.budgeAmount) === false
                        ? parseFormatCurrency(rowMap.minimunAmount, 2, 2)
                        : "$0.00"}
                    </TotalPercentAmount>
                  ) : (
                    <TotalPercentAmount>
                      {isNil(dataForm.budgeAmount) === false &&
                      isNil(dataForm.budgeAmount) === false
                        ? parseFormatCurrency(
                            dataForm.budgeAmount * rowMap.percentBase,
                            2,
                            2
                          )
                        : "$0.00"}
                    </TotalPercentAmount>
                  )}
                  <TotalPercent>{rowMap.percentBase * 100}%</TotalPercent>
                  <ContentInformation>
                    {isEmpty(contentPolicy) === false &&
                      contentPolicy.map((text) => {
                        return (
                          <RowInformation>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="17"
                                viewBox="0 0 15 17"
                                fill="none"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M12.9348 3.05633C13.2807 3.17745 13.5119 3.50362 13.5119 3.87016V9.23212C13.5119 10.7307 12.9672 12.1613 12.0054 13.2696C11.5216 13.8277 10.9097 14.2624 10.2597 14.6139L7.44298 16.1355L4.62148 14.6131C3.97073 14.2616 3.35798 13.8277 2.87348 13.2688C1.91081 12.1605 1.36456 10.7292 1.36456 9.22895V3.87016C1.36456 3.50362 1.59573 3.17745 1.94169 3.05633L7.15244 1.2252C7.33769 1.16028 7.53956 1.16028 7.72402 1.2252L12.9348 3.05633Z"
                                  stroke="#FF0282"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M5.38037 8.4347L6.8782 9.93333L9.96412 6.84741"
                                  stroke="#FF0282"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </div>
                            <span>{text}</span>
                          </RowInformation>
                        );
                      })}
                  </ContentInformation>
                  <div
                    style={{
                      display: "flex",
                      height: 50,
                      padding: "10px 0px",
                      justifyContent: "center",
                      marginBottom: 5,
                      background: "#fff",
                      borderRadius: 16,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        onSelectPolicy({
                          ...rowMap,
                          budgeAmount: dataForm.budgeAmount,
                        });
                      }}
                    >
                      Seleccionar Póliza
                    </button>
                  </div>
                </CardPolicy>
              );
            } else if (rowMap.isMostPopular === true) {
              content = (
                <CardPolicy mostPopular={true}>
                  <CardPolicyMorePopular>
                    <div>
                      <TitleCard>
                        {namePolicy.text1} <br />
                        <span>{namePolicy.text2}</span>
                        <br />
                      </TitleCard>
                      {rowMap.requiresEndorsement === true && (
                        <NotAval>(Se necesita aval)</NotAval>
                      )}
                      {rowMap.requiresEndorsement === false &&
                        rowMap.idPolicy ===
                          "54C9414E-3B8E-42B5-8F80-940F2641F888" && (
                          <NotAval>(No se necesita aval)</NotAval>
                        )}
                    </div>
                    {isNil(dataForm.budgeAmount) === false &&
                    rowMap.minimunAmount >
                      dataForm.budgeAmount * rowMap.percentBase ? (
                      <TotalPercentAmount>
                        {isNil(dataForm.budgeAmount) === false &&
                        isNil(dataForm.budgeAmount) === false
                          ? parseFormatCurrency(rowMap.minimunAmount, 2, 2)
                          : "$0.00"}
                      </TotalPercentAmount>
                    ) : (
                      <TotalPercentAmount>
                        {isNil(dataForm.budgeAmount) === false &&
                        isNil(dataForm.budgeAmount) === false
                          ? parseFormatCurrency(
                              dataForm.budgeAmount * rowMap.percentBase,
                              2,
                              2
                            )
                          : "$0.00"}
                      </TotalPercentAmount>
                    )}

                    <TotalPercent>{rowMap.percentBase * 100}%</TotalPercent>
                    <ContentInformation>
                      {isEmpty(contentPolicy) === false &&
                        contentPolicy.map((text) => {
                          return (
                            <RowInformation>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="17"
                                  viewBox="0 0 15 17"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.9348 3.05633C13.2807 3.17745 13.5119 3.50362 13.5119 3.87016V9.23212C13.5119 10.7307 12.9672 12.1613 12.0054 13.2696C11.5216 13.8277 10.9097 14.2624 10.2597 14.6139L7.44298 16.1355L4.62148 14.6131C3.97073 14.2616 3.35798 13.8277 2.87348 13.2688C1.91081 12.1605 1.36456 10.7292 1.36456 9.22895V3.87016C1.36456 3.50362 1.59573 3.17745 1.94169 3.05633L7.15244 1.2252C7.33769 1.16028 7.53956 1.16028 7.72402 1.2252L12.9348 3.05633Z"
                                    stroke="#FF0282"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M5.38037 8.4347L6.8782 9.93333L9.96412 6.84741"
                                    stroke="#FF0282"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <span>{text}</span>
                            </RowInformation>
                          );
                        })}
                    </ContentInformation>
                    <div
                      style={{
                        display: "flex",
                        height: 50,
                        padding: "10px 0px",
                        justifyContent: "center",
                        marginBottom: 5,
                        background: "#fff",
                        borderRadius: 16,
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          onSelectPolicy({
                            ...rowMap,
                            budgeAmount: dataForm.budgeAmount,
                          });
                        }}
                      >
                        Seleccionar Póliza
                      </button>
                    </div>
                  </CardPolicyMorePopular>
                  <TargetPolicyMorePopular>
                    <span>Más popular</span>
                  </TargetPolicyMorePopular>
                </CardPolicy>
              );
            }
            return content;
          })}
        {/* <CardPolicy>
          <div>
            <TitleCard>
              Póliza <br />
              <span>Pro</span>
            </TitleCard>
          </div>
          <TotalPercentAmount>$3500</TotalPercentAmount>
          <TotalPercent>35%</TotalPercent>
          <ContentInformation>
            {informationPolicyPro.map((text) => {
              return (
                <RowInformation>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.9348 3.05633C13.2807 3.17745 13.5119 3.50362 13.5119 3.87016V9.23212C13.5119 10.7307 12.9672 12.1613 12.0054 13.2696C11.5216 13.8277 10.9097 14.2624 10.2597 14.6139L7.44298 16.1355L4.62148 14.6131C3.97073 14.2616 3.35798 13.8277 2.87348 13.2688C1.91081 12.1605 1.36456 10.7292 1.36456 9.22895V3.87016C1.36456 3.50362 1.59573 3.17745 1.94169 3.05633L7.15244 1.2252C7.33769 1.16028 7.53956 1.16028 7.72402 1.2252L12.9348 3.05633Z"
                        stroke="#FF0282"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.38037 8.4347L6.8782 9.93333L9.96412 6.84741"
                        stroke="#FF0282"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{text}</span>
                </RowInformation>
              );
            })}
          </ContentInformation>
          <div
            style={{
              display: "flex",
              height: 50,
              padding: "10px 0px",
              justifyContent: "center",
              marginBottom: 5,
              background: "#fff",
            }}
          >
            <button>Seleccionar Póliza</button>
          </div>
        </CardPolicy>
        <CardPolicy>
          <CardPolicyMorePopular>
            <div>
              <TitleCard>
                Póliza <br />
                <span>Segura</span>
                <br />
              </TitleCard>
            </div>
            <TotalPercentAmount>$6000</TotalPercentAmount>
            <TotalPercent>60%</TotalPercent>
            <ContentInformation>
              {informationPolicy2.map((text) => {
                return (
                  <RowInformation>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="17"
                        viewBox="0 0 15 17"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.9348 3.05633C13.2807 3.17745 13.5119 3.50362 13.5119 3.87016V9.23212C13.5119 10.7307 12.9672 12.1613 12.0054 13.2696C11.5216 13.8277 10.9097 14.2624 10.2597 14.6139L7.44298 16.1355L4.62148 14.6131C3.97073 14.2616 3.35798 13.8277 2.87348 13.2688C1.91081 12.1605 1.36456 10.7292 1.36456 9.22895V3.87016C1.36456 3.50362 1.59573 3.17745 1.94169 3.05633L7.15244 1.2252C7.33769 1.16028 7.53956 1.16028 7.72402 1.2252L12.9348 3.05633Z"
                          stroke="#FF0282"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.38037 8.4347L6.8782 9.93333L9.96412 6.84741"
                          stroke="#FF0282"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </RowInformation>
                );
              })}
            </ContentInformation>
            <div
              style={{
                display: "flex",
                height: 50,
                padding: "10px 0px",
                justifyContent: "center",
                marginBottom: 5,
                background: "#fff",
              }}
            >
              <button>Seleccionar Póliza</button>
            </div>
          </CardPolicyMorePopular>
          <TargetPolicyMorePopular>
            <span>Más popular</span>
          </TargetPolicyMorePopular>
        </CardPolicy>
        <CardPolicy>
          <div>
            <TitleCard>
              Póliza <br />
              <span>Segura 2</span>
              <br />
            </TitleCard>
            <NotAval>(No se necesita aval)</NotAval>
          </div>
          <TotalPercentAmount>$6000</TotalPercentAmount>
          <TotalPercent>60%</TotalPercent>
          <ContentInformation>
            {informationPolicy2.map((text) => {
              return (
                <RowInformation>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.9348 3.05633C13.2807 3.17745 13.5119 3.50362 13.5119 3.87016V9.23212C13.5119 10.7307 12.9672 12.1613 12.0054 13.2696C11.5216 13.8277 10.9097 14.2624 10.2597 14.6139L7.44298 16.1355L4.62148 14.6131C3.97073 14.2616 3.35798 13.8277 2.87348 13.2688C1.91081 12.1605 1.36456 10.7292 1.36456 9.22895V3.87016C1.36456 3.50362 1.59573 3.17745 1.94169 3.05633L7.15244 1.2252C7.33769 1.16028 7.53956 1.16028 7.72402 1.2252L12.9348 3.05633Z"
                        stroke="#FF0282"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.38037 8.4347L6.8782 9.93333L9.96412 6.84741"
                        stroke="#FF0282"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{text}</span>
                </RowInformation>
              );
            })}
          </ContentInformation>
          <div
            style={{
              display: "flex",
              height: 50,
              padding: "10px 0px",
              justifyContent: "center",
              marginBottom: 5,
              background: "#fff",
            }}
          >
            <button>Seleccionar Póliza</button>
          </div>
        </CardPolicy>
      */}
      </SectionCards>
    </GeneralSection>
  );
};

export default SectionQuotePolicy;
