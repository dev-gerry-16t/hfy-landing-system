import React, { useState, useEffect, useRef } from "react";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";
import ReCAPTCHA from "react-google-recaptcha";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import CustomInput from "./customInput";
import WidgetUserType from "./widgetUserType";

const DivErrorApi = styled.div`
  background: #fff4ec;
  border-radius: 8px;
  color: #cf6e23;
  font-family: "Poppins";
  padding: 2px 10px;
  font-size: 14px;
  margin-top: 15px;
`;

const SelectStyle = styled.select`
  width: 100%;
  border: 1px solid #d6d8e7;
  box-sizing: border-box;
  border-radius: 8px;
  height: 30px;
  font-family: Poppins;
  font-weight: bold;
  padding: 5px 5px;
  margin-bottom: 5px;
  margin-top: 20px;
  background: transparent;
  &:focus {
    outline: #c6cdfc;
  }
  &::placeholder {
    font-weight: 100;
  }
`;

const DivPriceAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: baseline;
    h2 {
      margin-right: 5px;
    }
  }
`;

const InputStyle = styled.input`
  width: 127px;
  border: 1px solid #d6d8e7;
  box-sizing: border-box;
  border-radius: 8px;
  height: 30px;
  font-family: Poppins;
  font-weight: bold;
  padding: 10px 10px;
  text-align: right;

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: #c6cdfc;
  }
  &::placeholder {
    font-weight: 100;
  }
`;

const InputRange = styled.input``;

const LabelRent = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.75px;
  color: #4e4b66;
`;

const ButtonSend = styled.button`
  font-family: Poppins;
  color: #ffffff;
  background: #ff0282;
  border-radius: 16px;
  border: none;
  padding: 2px 20px;
  margin: 0px 5px;
  outline: none;
  cursor: pointer;
  width: 45%;
`;

const DivTwoInputs = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  position: relative;

  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`;

const DivCurrentRent = styled.div`
  padding: 0px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  @media screen and (max-width: 520px) {
    padding: 0px 0px;
  }
`;

const DivForm = styled.div`
  padding: 0px 2rem;
  @media screen and (max-width: 520px) {
    padding: 0px 0px;
  }
`;

const DivRange = styled.div`
  padding: 0px 2rem;
  @media screen and (max-width: 520px) {
    padding: 0px 1rem;
  }
`;

const DivPrincipal = styled.div`
  padding: 10px 20px;
  @media screen and (max-width: 520px) {
    padding: 0px 0px;
  }
`;

const FormRegister = ({
  onClose,
  dataPolicy,
  userType,
  policyType,
  amountPolicy,
}) => {
  let component = <div />;
  const initialErrors = {
    email: false,
    name: false,
    lastName: false,
    phoneNumber: false,
    fakeEmail: false,
  };
  const [dataErrors, setDataErrors] = useState(initialErrors);

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

  const initialStatesError = {
    error: false,
    message:
      "Parece que hubo un error al enviar tu información, intenta nuevamente o envianos un correo a contacto@homify.ai",
  };

  const [dataForm, setDataForm] = useState(initialStates);
  const [minumunPolicy, setTaxMinumunPolicy] = useState(0);
  const [taxPolicy, setTaxPolicy] = useState(0);
  const [tax, setTax] = useState(0);
  const [percentPayment, setPercentPayment] = useState(1);
  const [finishForm, setFinishForm] = useState(false);
  const [clickSend, setClickSend] = useState(false);
  const [errorApi, setErrorApi] = useState(initialStatesError);

  const recaptchaV3 = useRef(null);

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

  const validateInformation = (data) => {
    let dataNameValid = true;
    let dataLastNameValid = true;
    let dataPhoneNumberValid = true;
    let dataEmailAddressValid = true;
    let dataFakeEmailAddressValid = true;

    let dataError = dataErrors;

    if (isEmpty(data.givenName) === true) {
      dataNameValid = false;
      dataError = { ...dataError, name: true };
    }
    if (isEmpty(data.lastName) === true) {
      dataLastNameValid = false;
      dataError = { ...dataError, lastName: true };
    }
    if (isEmpty(data.phoneNumber) === true) {
      dataPhoneNumberValid = false;
      dataError = { ...dataError, phoneNumber: true };
    }
    if (isEmpty(data.emailAddress) === true) {
      dataEmailAddressValid = false;
      dataError = { ...dataError, email: true };
    }
    if (isEmpty(data.emailAddress) === false) {
      const regExp =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const validateEmail = regExp.test(data.emailAddress);
      dataFakeEmailAddressValid = validateEmail;
      dataError = { ...dataError, fakeEmail: !validateEmail };
    }
    setDataErrors(dataError);
    return (
      dataNameValid &&
      dataLastNameValid &&
      dataPhoneNumberValid &&
      dataEmailAddressValid &&
      dataFakeEmailAddressValid
    );
  };

  useEffect(() => {
    if (isEmpty(dataForm.idPolicy) === false) {
      const selectData = dataPolicy.find((row) => {
        return row.idPolicy === dataForm.idPolicy;
      });
      const totalPolicyTax = selectData.percentBase;
      const totalTax = selectData.taxBase;
      setTaxPolicy(totalPolicyTax);
      setTaxMinumunPolicy(selectData.minimunAmount);
      setTax(totalTax);
    }
  }, [dataForm.idPolicy]);

  useEffect(() => {
    if (isNil(policyType) === false) {
      setDataForm({
        ...dataForm,
        idPolicy: policyType,
        budgeAmount: amountPolicy,
      });
    }
  }, [policyType]);

  useEffect(() => {
    if (isNil(userType) === false) {
      setDataForm({ ...dataForm, idProspectType: userType });
    }
  }, [userType]);

  if (isNil(userType) === false && finishForm === false) {
    component = (
      <DivPrincipal>
        <div className={clickSend === true ? "loader-auth-spiner" : ""}></div>
        <DivForm>
          <CustomInput
            name="fname"
            autocomplete="given-name"
            value={dataForm.givenName}
            placeHolder="Nombre *"
            onChange={(value) => {
              setDataErrors({ ...dataErrors, name: false });
              setDataForm({ ...dataForm, givenName: value });
            }}
            error={dataErrors.name}
            warning={false}
            labelError={"Este campo es requerido"}
            icon={
              <svg
                width="16"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.5831C12.4912 12.5831 15.294 9.78059 15.294 6.29105H13.294C13.294 8.67558 11.387 10.5831 9 10.5831V12.5831ZM2.70601 6.29105C2.70601 9.78071 5.50996 12.5831 9 12.5831V10.5831C6.61384 10.5831 4.70601 8.67545 4.70601 6.29105H2.70601ZM9 0C5.5102 0 2.70601 2.80115 2.70601 6.29105H4.70601C4.70601 3.9069 6.61359 2 9 2V0ZM15.294 6.29105C15.294 2.80127 12.4909 0 9 0V2C11.3873 2 13.294 3.90678 13.294 6.29105H15.294ZM0 17.575C0 18.5046 0.322282 19.2999 0.902792 19.9333C1.46265 20.5442 2.22021 20.96 3.03957 21.2501C4.66496 21.8257 6.80688 22 9 22V20C6.8555 20 4.99742 19.8218 3.70721 19.3649C3.06877 19.1388 2.63963 18.8683 2.37725 18.582C2.13551 18.3182 2 18.0054 2 17.575H0ZM9 13.1739C6.82018 13.1739 4.67936 13.3417 3.0523 13.91C2.23226 14.1964 1.4719 14.6082 0.909161 15.2166C0.325125 15.848 0 16.6432 0 17.575H2C2 17.1462 2.13555 16.8361 2.37735 16.5747C2.64045 16.2902 3.0711 16.0219 3.71173 15.7981C5.00602 15.3461 6.86521 15.1739 9 15.1739V13.1739ZM18 17.599C18 16.6694 17.6778 15.8742 17.0974 15.2407C16.5376 14.6298 15.7801 14.214 14.9608 13.9238C13.3355 13.3482 11.1936 13.1739 9 13.1739V15.1739C11.145 15.1739 13.0031 15.3522 14.2931 15.8091C14.9315 16.0351 15.3605 16.3056 15.6228 16.5919C15.8645 16.8556 16 17.1685 16 17.599H18ZM9 22C11.1798 22 13.3206 21.8322 14.9477 21.264C15.7677 20.9776 16.5281 20.5657 17.0908 19.9574C17.6749 19.326 18 18.5307 18 17.599H16C16 18.0277 15.8645 18.3379 15.6226 18.5993C15.3595 18.8837 14.9289 19.1521 14.2883 19.3758C12.994 19.8278 11.1348 20 9 20V22Z"
                  fill="#4E4B66"
                />
              </svg>
            }
          />
          <DivTwoInputs>
            <CustomInput
              name="mname"
              autocomplete="additional-name"
              value={dataForm.lastName}
              placeHolder="Apellido Paterno *"
              onChange={(value) => {
                setDataErrors({ ...dataErrors, lastName: false });
                setDataForm({ ...dataForm, lastName: value });
              }}
              warning={false}
              error={dataErrors.lastName}
              labelError={"Este campo es requerido"}
              icon={
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.5831C12.4912 12.5831 15.294 9.78059 15.294 6.29105H13.294C13.294 8.67558 11.387 10.5831 9 10.5831V12.5831ZM2.70601 6.29105C2.70601 9.78071 5.50996 12.5831 9 12.5831V10.5831C6.61384 10.5831 4.70601 8.67545 4.70601 6.29105H2.70601ZM9 0C5.5102 0 2.70601 2.80115 2.70601 6.29105H4.70601C4.70601 3.9069 6.61359 2 9 2V0ZM15.294 6.29105C15.294 2.80127 12.4909 0 9 0V2C11.3873 2 13.294 3.90678 13.294 6.29105H15.294ZM0 17.575C0 18.5046 0.322282 19.2999 0.902792 19.9333C1.46265 20.5442 2.22021 20.96 3.03957 21.2501C4.66496 21.8257 6.80688 22 9 22V20C6.8555 20 4.99742 19.8218 3.70721 19.3649C3.06877 19.1388 2.63963 18.8683 2.37725 18.582C2.13551 18.3182 2 18.0054 2 17.575H0ZM9 13.1739C6.82018 13.1739 4.67936 13.3417 3.0523 13.91C2.23226 14.1964 1.4719 14.6082 0.909161 15.2166C0.325125 15.848 0 16.6432 0 17.575H2C2 17.1462 2.13555 16.8361 2.37735 16.5747C2.64045 16.2902 3.0711 16.0219 3.71173 15.7981C5.00602 15.3461 6.86521 15.1739 9 15.1739V13.1739ZM18 17.599C18 16.6694 17.6778 15.8742 17.0974 15.2407C16.5376 14.6298 15.7801 14.214 14.9608 13.9238C13.3355 13.3482 11.1936 13.1739 9 13.1739V15.1739C11.145 15.1739 13.0031 15.3522 14.2931 15.8091C14.9315 16.0351 15.3605 16.3056 15.6228 16.5919C15.8645 16.8556 16 17.1685 16 17.599H18ZM9 22C11.1798 22 13.3206 21.8322 14.9477 21.264C15.7677 20.9776 16.5281 20.5657 17.0908 19.9574C17.6749 19.326 18 18.5307 18 17.599H16C16 18.0277 15.8645 18.3379 15.6226 18.5993C15.3595 18.8837 14.9289 19.1521 14.2883 19.3758C12.994 19.8278 11.1348 20 9 20V22Z"
                    fill="#4E4B66"
                  />
                </svg>
              }
            />
            <CustomInput
              name="lname"
              autocomplete="family-name"
              value={dataForm.mothersMaidenName}
              placeHolder="Apellido Materno"
              onChange={(value) => {
                setDataForm({ ...dataForm, mothersMaidenName: value });
              }}
              icon={
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.5831C12.4912 12.5831 15.294 9.78059 15.294 6.29105H13.294C13.294 8.67558 11.387 10.5831 9 10.5831V12.5831ZM2.70601 6.29105C2.70601 9.78071 5.50996 12.5831 9 12.5831V10.5831C6.61384 10.5831 4.70601 8.67545 4.70601 6.29105H2.70601ZM9 0C5.5102 0 2.70601 2.80115 2.70601 6.29105H4.70601C4.70601 3.9069 6.61359 2 9 2V0ZM15.294 6.29105C15.294 2.80127 12.4909 0 9 0V2C11.3873 2 13.294 3.90678 13.294 6.29105H15.294ZM0 17.575C0 18.5046 0.322282 19.2999 0.902792 19.9333C1.46265 20.5442 2.22021 20.96 3.03957 21.2501C4.66496 21.8257 6.80688 22 9 22V20C6.8555 20 4.99742 19.8218 3.70721 19.3649C3.06877 19.1388 2.63963 18.8683 2.37725 18.582C2.13551 18.3182 2 18.0054 2 17.575H0ZM9 13.1739C6.82018 13.1739 4.67936 13.3417 3.0523 13.91C2.23226 14.1964 1.4719 14.6082 0.909161 15.2166C0.325125 15.848 0 16.6432 0 17.575H2C2 17.1462 2.13555 16.8361 2.37735 16.5747C2.64045 16.2902 3.0711 16.0219 3.71173 15.7981C5.00602 15.3461 6.86521 15.1739 9 15.1739V13.1739ZM18 17.599C18 16.6694 17.6778 15.8742 17.0974 15.2407C16.5376 14.6298 15.7801 14.214 14.9608 13.9238C13.3355 13.3482 11.1936 13.1739 9 13.1739V15.1739C11.145 15.1739 13.0031 15.3522 14.2931 15.8091C14.9315 16.0351 15.3605 16.3056 15.6228 16.5919C15.8645 16.8556 16 17.1685 16 17.599H18ZM9 22C11.1798 22 13.3206 21.8322 14.9477 21.264C15.7677 20.9776 16.5281 20.5657 17.0908 19.9574C17.6749 19.326 18 18.5307 18 17.599H16C16 18.0277 15.8645 18.3379 15.6226 18.5993C15.3595 18.8837 14.9289 19.1521 14.2883 19.3758C12.994 19.8278 11.1348 20 9 20V22Z"
                    fill="#4E4B66"
                  />
                </svg>
              }
            />
          </DivTwoInputs>
          <CustomInput
            name="mobile"
            autocomplete="tel"
            value={dataForm.phoneNumber}
            placeHolder="Teléfono *"
            type="number"
            error={dataErrors.phoneNumber}
            warning={false}
            labelError={"Este campo es requerido"}
            onChange={(value) => {
              setDataErrors({ ...dataErrors, phoneNumber: false });
              setDataForm({ ...dataForm, phoneNumber: value });
            }}
            icon={
              <svg
                width="18"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.99033 3.87254C2.30665 3.34878 4.0495 1.44376 5.29322 1.50127C5.665 1.53208 5.99364 1.75699 6.26067 2.01784C6.87379 2.61656 8.62897 4.88101 8.72859 5.35753C8.97096 6.52621 7.57833 7.1999 8.00454 8.37783C9.09112 11.0366 10.9634 12.9088 13.6233 13.9943C14.8003 14.4205 15.474 13.0279 16.6428 13.2713C17.1183 13.3709 19.3839 15.126 19.9826 15.7391C20.2425 16.0051 20.4684 16.3347 20.4992 16.7065C20.5454 18.0159 18.5222 19.7833 18.1278 20.0092C17.1974 20.6747 15.9834 20.6634 14.5035 19.9753C10.3739 18.2572 3.77426 11.7822 2.02422 7.49669C1.35461 6.02505 1.30839 4.80297 1.99033 3.87254Z"
                  stroke="#200E32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <CustomInput
            name="email"
            autocomplete="email"
            value={dataForm.emailAddress}
            placeHolder="Correo *"
            warning={dataErrors.fakeEmail}
            error={dataErrors.email}
            labelError={"Este campo es requerido"}
            labelWarning={"No es un correo válido"}
            type="email"
            onChange={(value) => {
              setDataErrors({ ...dataErrors, email: false, fakeEmail: false });
              setDataForm({ ...dataForm, emailAddress: value });
            }}
            icon={
              <svg
                width="18"
                height="22"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2678 6.56113L12.0024 9.9954C11.1952 10.6283 10.0636 10.6283 9.25641 9.9954L4.95435 6.56113"
                  stroke="#4E4B66"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.88787 1H15.3158C16.6752 1.01525 17.969 1.58993 18.896 2.5902C19.823 3.59048 20.3022 4.92903 20.222 6.29412V12.822C20.3022 14.1871 19.823 15.5256 18.896 16.5259C17.969 17.5262 16.6752 18.1009 15.3158 18.1161H5.88787C2.96796 18.1161 1 15.7407 1 12.822V6.29412C1 3.37545 2.96796 1 5.88787 1Z"
                  stroke="#4E4B66"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          {dataForm.idProspectType === 3 && (
            <CustomInput
              value={dataForm.realState}
              placeHolder="Inmobiliaria"
              onChange={(value) => {
                setDataForm({ ...dataForm, realState: value });
              }}
              icon={<div />}
            />
          )}
        </DivForm>
        {dataForm.idProspectType !== 3 && (
          <>
            <DivCurrentRent>
              <LabelRent>Monto de renta</LabelRent>
              <NumberFormat
                value={dataForm.budgeAmount}
                customInput={InputStyle}
                thousandSeparator=","
                decimalSeparator="."
                prefix={"$"}
                onValueChange={(values) => {
                  const { formattedValue, value, floatValue } = values;
                  setDataForm({
                    ...dataForm,
                    budgeAmount: floatValue,
                  });
                }}
              />
            </DivCurrentRent>
            <DivRange>
              <InputRange
                value={dataForm.budgeAmount}
                style={{ width: "100%" }}
                type="range"
                step="100"
                min="0"
                max="25000"
                onChange={(e) => {
                  setDataForm({
                    ...dataForm,
                    budgeAmount: e.target.value,
                  });
                }}
              />
            </DivRange>
            <DivForm>
              {dataForm.idProspectType === 2 && (
                <>
                  <SelectStyle
                    placeHolder="Póliza"
                    value={dataForm.idPolicy}
                    onChange={(e, a) => {
                      setDataForm({ ...dataForm, idPolicy: e.target.value });
                    }}
                  >
                    <option disabled selected value="">
                      -- Selecciona una póliza --{" "}
                    </option>
                    {dataPolicy.map((row) => {
                      return <option value={row.idPolicy}>{row.text}</option>;
                    })}
                  </SelectStyle>
                  {isEmpty(dataForm.idPolicy) === false &&
                    dataForm.budgeAmount > 0 && (
                      <DivPriceAmount>
                        <p>Costo por cobertura de Póliza</p>
                        {isNil(dataForm.budgeAmount) === false &&
                        minumunPolicy > dataForm.budgeAmount * taxPolicy ? (
                          <div>
                            <h2>
                              {isNil(dataForm.budgeAmount) === false &&
                              isNil(dataForm.budgeAmount) === false
                                ? parseFormatCurrency(minumunPolicy, 2, 2)
                                : "$0.00"}
                            </h2>
                            <strong>MXN</strong>
                            <span style={{ marginLeft: 5 }}>
                              {" "}
                              + IVA {tax * 100}%
                            </span>
                          </div>
                        ) : (
                          <div>
                            <h2>
                              {isNil(dataForm.budgeAmount) === false &&
                              isNil(dataForm.budgeAmount) === false
                                ? parseFormatCurrency(
                                    dataForm.budgeAmount * taxPolicy,
                                    2,
                                    2
                                  )
                                : "$0.00"}
                            </h2>
                            <strong>MXN</strong>
                            <span style={{ marginLeft: 5 }}>
                              {" "}
                              + IVA {tax * 100}%
                            </span>
                          </div>
                        )}
                      </DivPriceAmount>
                    )}
                </>
              )}
              {errorApi.error === true && (
                <DivErrorApi>{errorApi.message}</DivErrorApi>
              )}
            </DivForm>
          </>
        )}
        <div>
          <ReCAPTCHA
            sitekey="6LegXpMbAAAAANSPSPVL8QaYBb1g6zw7LzIF3WHg"
            onChange={(e) => {}}
            style={{ display: "inline-block" }}
            size="invisible"
            ref={recaptchaV3}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <ButtonSend
            onClick={async () => {
              let ENVIRONMENT = "http://localhost:3001";
              if (
                window.location.hostname === "homify.ai" ||
                window.location.hostname === "www.homify.ai"
              ) {
                ENVIRONMENT = "https://api.homify.ai";
              } else if (window.location.hostname === "localhost") {
                ENVIRONMENT = "http://localhost:3001";
              } else {
                ENVIRONMENT = "https://apitest.homify.ai";
              }
              const getCaptchaToken = await recaptchaV3.current.executeAsync();
              const next = await validateInformation(dataForm);
              if (next === true && clickSend === false) {
                setClickSend(true);
                const result = await fetch(
                  `${ENVIRONMENT}/api/leads/addLandingProspect`,
                  {
                    method: "POST",
                    body: JSON.stringify({
                      ...dataForm,
                      captchaToken: getCaptchaToken,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );
                const response = await result.json();
                if (response.response.stateCode === 200) {
                  setFinishForm(true);
                  setDataForm({ ...initialStates, idProspectType: userType });
                  setDataErrors(initialErrors);
                  window.fbq("track", "CompleteRegistration");
                  window.fbq("track", "Lead");
                } else {
                  setErrorApi({
                    error: true,
                    message:
                      isNil(response.response) === false &&
                      isNil(response.response.message) === false
                        ? response.response.message
                        : initialStatesError.message,
                  });
                  setTimeout(() => {
                    setErrorApi(initialStatesError);
                  }, 10000);
                }
                setClickSend(false);
              }
            }}
          >
            Enviar
          </ButtonSend>
        </div>
      </DivPrincipal>
    );
  } else {
    if (finishForm === false) {
      component = (
        <DivPrincipal>
          <div className={clickSend === true ? "loader-auth-spiner" : ""}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: 25,
            }}
          >
            <WidgetUserType
              value={dataForm.idProspectType}
              onClick={(value) => {
                setDataForm({ ...dataForm, idProspectType: value });
              }}
              user="Soy propietario"
              src="/Propietario.png"
              id={2}
            />
            <WidgetUserType
              value={dataForm.idProspectType}
              onClick={(value) => {
                setDataForm({ ...dataForm, idProspectType: value });
              }}
              user="Soy inquilino"
              src="/Inquilino.png"
              id={1}
            />
            <WidgetUserType
              value={dataForm.idProspectType}
              onClick={(value) => {
                setDataForm({ ...dataForm, idProspectType: value });
              }}
              user="Soy asesor"
              src="/Asesor.png"
              id={3}
            />
          </div>
          <DivForm>
            <CustomInput
              name="fname"
              autocomplete="given-name"
              value={dataForm.givenName}
              placeHolder="Nombre *"
              onChange={(value) => {
                setDataErrors({ ...dataErrors, name: false });
                setDataForm({ ...dataForm, givenName: value });
              }}
              error={dataErrors.name}
              warning={false}
              labelError={"Este campo es requerido"}
              icon={
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12.5831C12.4912 12.5831 15.294 9.78059 15.294 6.29105H13.294C13.294 8.67558 11.387 10.5831 9 10.5831V12.5831ZM2.70601 6.29105C2.70601 9.78071 5.50996 12.5831 9 12.5831V10.5831C6.61384 10.5831 4.70601 8.67545 4.70601 6.29105H2.70601ZM9 0C5.5102 0 2.70601 2.80115 2.70601 6.29105H4.70601C4.70601 3.9069 6.61359 2 9 2V0ZM15.294 6.29105C15.294 2.80127 12.4909 0 9 0V2C11.3873 2 13.294 3.90678 13.294 6.29105H15.294ZM0 17.575C0 18.5046 0.322282 19.2999 0.902792 19.9333C1.46265 20.5442 2.22021 20.96 3.03957 21.2501C4.66496 21.8257 6.80688 22 9 22V20C6.8555 20 4.99742 19.8218 3.70721 19.3649C3.06877 19.1388 2.63963 18.8683 2.37725 18.582C2.13551 18.3182 2 18.0054 2 17.575H0ZM9 13.1739C6.82018 13.1739 4.67936 13.3417 3.0523 13.91C2.23226 14.1964 1.4719 14.6082 0.909161 15.2166C0.325125 15.848 0 16.6432 0 17.575H2C2 17.1462 2.13555 16.8361 2.37735 16.5747C2.64045 16.2902 3.0711 16.0219 3.71173 15.7981C5.00602 15.3461 6.86521 15.1739 9 15.1739V13.1739ZM18 17.599C18 16.6694 17.6778 15.8742 17.0974 15.2407C16.5376 14.6298 15.7801 14.214 14.9608 13.9238C13.3355 13.3482 11.1936 13.1739 9 13.1739V15.1739C11.145 15.1739 13.0031 15.3522 14.2931 15.8091C14.9315 16.0351 15.3605 16.3056 15.6228 16.5919C15.8645 16.8556 16 17.1685 16 17.599H18ZM9 22C11.1798 22 13.3206 21.8322 14.9477 21.264C15.7677 20.9776 16.5281 20.5657 17.0908 19.9574C17.6749 19.326 18 18.5307 18 17.599H16C16 18.0277 15.8645 18.3379 15.6226 18.5993C15.3595 18.8837 14.9289 19.1521 14.2883 19.3758C12.994 19.8278 11.1348 20 9 20V22Z"
                    fill="#4E4B66"
                  />
                </svg>
              }
            />
            <DivTwoInputs>
              <CustomInput
                name="mname"
                autocomplete="additional-name"
                value={dataForm.lastName}
                placeHolder="Apellido Paterno *"
                onChange={(value) => {
                  setDataErrors({ ...dataErrors, lastName: false });
                  setDataForm({ ...dataForm, lastName: value });
                }}
                warning={false}
                error={dataErrors.lastName}
                labelError={"Este campo es requerido"}
                icon={
                  <svg
                    width="16"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.5831C12.4912 12.5831 15.294 9.78059 15.294 6.29105H13.294C13.294 8.67558 11.387 10.5831 9 10.5831V12.5831ZM2.70601 6.29105C2.70601 9.78071 5.50996 12.5831 9 12.5831V10.5831C6.61384 10.5831 4.70601 8.67545 4.70601 6.29105H2.70601ZM9 0C5.5102 0 2.70601 2.80115 2.70601 6.29105H4.70601C4.70601 3.9069 6.61359 2 9 2V0ZM15.294 6.29105C15.294 2.80127 12.4909 0 9 0V2C11.3873 2 13.294 3.90678 13.294 6.29105H15.294ZM0 17.575C0 18.5046 0.322282 19.2999 0.902792 19.9333C1.46265 20.5442 2.22021 20.96 3.03957 21.2501C4.66496 21.8257 6.80688 22 9 22V20C6.8555 20 4.99742 19.8218 3.70721 19.3649C3.06877 19.1388 2.63963 18.8683 2.37725 18.582C2.13551 18.3182 2 18.0054 2 17.575H0ZM9 13.1739C6.82018 13.1739 4.67936 13.3417 3.0523 13.91C2.23226 14.1964 1.4719 14.6082 0.909161 15.2166C0.325125 15.848 0 16.6432 0 17.575H2C2 17.1462 2.13555 16.8361 2.37735 16.5747C2.64045 16.2902 3.0711 16.0219 3.71173 15.7981C5.00602 15.3461 6.86521 15.1739 9 15.1739V13.1739ZM18 17.599C18 16.6694 17.6778 15.8742 17.0974 15.2407C16.5376 14.6298 15.7801 14.214 14.9608 13.9238C13.3355 13.3482 11.1936 13.1739 9 13.1739V15.1739C11.145 15.1739 13.0031 15.3522 14.2931 15.8091C14.9315 16.0351 15.3605 16.3056 15.6228 16.5919C15.8645 16.8556 16 17.1685 16 17.599H18ZM9 22C11.1798 22 13.3206 21.8322 14.9477 21.264C15.7677 20.9776 16.5281 20.5657 17.0908 19.9574C17.6749 19.326 18 18.5307 18 17.599H16C16 18.0277 15.8645 18.3379 15.6226 18.5993C15.3595 18.8837 14.9289 19.1521 14.2883 19.3758C12.994 19.8278 11.1348 20 9 20V22Z"
                      fill="#4E4B66"
                    />
                  </svg>
                }
              />
              <CustomInput
                name="lname"
                autocomplete="family-name"
                value={dataForm.mothersMaidenName}
                placeHolder="Apellido Materno"
                onChange={(value) => {
                  setDataForm({ ...dataForm, mothersMaidenName: value });
                }}
                icon={
                  <svg
                    width="16"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.5831C12.4912 12.5831 15.294 9.78059 15.294 6.29105H13.294C13.294 8.67558 11.387 10.5831 9 10.5831V12.5831ZM2.70601 6.29105C2.70601 9.78071 5.50996 12.5831 9 12.5831V10.5831C6.61384 10.5831 4.70601 8.67545 4.70601 6.29105H2.70601ZM9 0C5.5102 0 2.70601 2.80115 2.70601 6.29105H4.70601C4.70601 3.9069 6.61359 2 9 2V0ZM15.294 6.29105C15.294 2.80127 12.4909 0 9 0V2C11.3873 2 13.294 3.90678 13.294 6.29105H15.294ZM0 17.575C0 18.5046 0.322282 19.2999 0.902792 19.9333C1.46265 20.5442 2.22021 20.96 3.03957 21.2501C4.66496 21.8257 6.80688 22 9 22V20C6.8555 20 4.99742 19.8218 3.70721 19.3649C3.06877 19.1388 2.63963 18.8683 2.37725 18.582C2.13551 18.3182 2 18.0054 2 17.575H0ZM9 13.1739C6.82018 13.1739 4.67936 13.3417 3.0523 13.91C2.23226 14.1964 1.4719 14.6082 0.909161 15.2166C0.325125 15.848 0 16.6432 0 17.575H2C2 17.1462 2.13555 16.8361 2.37735 16.5747C2.64045 16.2902 3.0711 16.0219 3.71173 15.7981C5.00602 15.3461 6.86521 15.1739 9 15.1739V13.1739ZM18 17.599C18 16.6694 17.6778 15.8742 17.0974 15.2407C16.5376 14.6298 15.7801 14.214 14.9608 13.9238C13.3355 13.3482 11.1936 13.1739 9 13.1739V15.1739C11.145 15.1739 13.0031 15.3522 14.2931 15.8091C14.9315 16.0351 15.3605 16.3056 15.6228 16.5919C15.8645 16.8556 16 17.1685 16 17.599H18ZM9 22C11.1798 22 13.3206 21.8322 14.9477 21.264C15.7677 20.9776 16.5281 20.5657 17.0908 19.9574C17.6749 19.326 18 18.5307 18 17.599H16C16 18.0277 15.8645 18.3379 15.6226 18.5993C15.3595 18.8837 14.9289 19.1521 14.2883 19.3758C12.994 19.8278 11.1348 20 9 20V22Z"
                      fill="#4E4B66"
                    />
                  </svg>
                }
              />
            </DivTwoInputs>
            <CustomInput
              name="mobile"
              autocomplete="tel"
              value={dataForm.phoneNumber}
              placeHolder="Teléfono *"
              type="number"
              error={dataErrors.phoneNumber}
              warning={false}
              labelError={"Este campo es requerido"}
              onChange={(value) => {
                setDataErrors({ ...dataErrors, phoneNumber: false });
                setDataForm({ ...dataForm, phoneNumber: value });
              }}
              icon={
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.99033 3.87254C2.30665 3.34878 4.0495 1.44376 5.29322 1.50127C5.665 1.53208 5.99364 1.75699 6.26067 2.01784C6.87379 2.61656 8.62897 4.88101 8.72859 5.35753C8.97096 6.52621 7.57833 7.1999 8.00454 8.37783C9.09112 11.0366 10.9634 12.9088 13.6233 13.9943C14.8003 14.4205 15.474 13.0279 16.6428 13.2713C17.1183 13.3709 19.3839 15.126 19.9826 15.7391C20.2425 16.0051 20.4684 16.3347 20.4992 16.7065C20.5454 18.0159 18.5222 19.7833 18.1278 20.0092C17.1974 20.6747 15.9834 20.6634 14.5035 19.9753C10.3739 18.2572 3.77426 11.7822 2.02422 7.49669C1.35461 6.02505 1.30839 4.80297 1.99033 3.87254Z"
                    stroke="#200E32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            <CustomInput
              name="email"
              autocomplete="email"
              value={dataForm.emailAddress}
              placeHolder="Correo *"
              warning={dataErrors.fakeEmail}
              error={dataErrors.email}
              labelError={"Este campo es requerido"}
              labelWarning={"No es un correo válido"}
              type="email"
              onChange={(value) => {
                setDataErrors({
                  ...dataErrors,
                  email: false,
                  fakeEmail: false,
                });
                setDataForm({ ...dataForm, emailAddress: value });
              }}
              icon={
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2678 6.56113L12.0024 9.9954C11.1952 10.6283 10.0636 10.6283 9.25641 9.9954L4.95435 6.56113"
                    stroke="#4E4B66"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.88787 1H15.3158C16.6752 1.01525 17.969 1.58993 18.896 2.5902C19.823 3.59048 20.3022 4.92903 20.222 6.29412V12.822C20.3022 14.1871 19.823 15.5256 18.896 16.5259C17.969 17.5262 16.6752 18.1009 15.3158 18.1161H5.88787C2.96796 18.1161 1 15.7407 1 12.822V6.29412C1 3.37545 2.96796 1 5.88787 1Z"
                    stroke="#4E4B66"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
            {dataForm.idProspectType === 3 && (
              <CustomInput
                value={dataForm.realState}
                placeHolder="Inmobiliaria"
                onChange={(value) => {
                  setDataForm({ ...dataForm, realState: value });
                }}
                icon={<div />}
              />
            )}
          </DivForm>
          {dataForm.idProspectType !== 3 && (
            <>
              <DivCurrentRent>
                <LabelRent>Monto de renta</LabelRent>
                <NumberFormat
                  value={dataForm.budgeAmount}
                  customInput={InputStyle}
                  thousandSeparator=","
                  decimalSeparator="."
                  prefix={"$"}
                  onValueChange={(values) => {
                    const { formattedValue, value, floatValue } = values;
                    setDataForm({
                      ...dataForm,
                      budgeAmount: floatValue,
                    });
                  }}
                />
              </DivCurrentRent>
              <DivRange>
                <InputRange
                  value={dataForm.budgeAmount}
                  style={{ width: "100%" }}
                  type="range"
                  step="100"
                  min="0"
                  max="25000"
                  onChange={(e) => {
                    setDataForm({
                      ...dataForm,
                      budgeAmount: e.target.value,
                    });
                  }}
                />
              </DivRange>
              <DivForm>
                {dataForm.idProspectType === 2 && (
                  <>
                    <SelectStyle
                      placeHolder="Póliza"
                      value={dataForm.idPolicy}
                      onChange={(e, a) => {
                        setDataForm({ ...dataForm, idPolicy: e.target.value });
                      }}
                    >
                      <option disabled selected value="">
                        -- Selecciona una póliza --{" "}
                      </option>
                      {dataPolicy.map((row) => {
                        return <option value={row.idPolicy}>{row.text}</option>;
                      })}
                    </SelectStyle>
                    {isEmpty(dataForm.idPolicy) === false &&
                      dataForm.budgeAmount > 0 && (
                        <DivPriceAmount>
                          <p>Costo por cobertura de Póliza</p>
                          {isNil(dataForm.budgeAmount) === false &&
                          minumunPolicy > dataForm.budgeAmount * taxPolicy ? (
                            <div>
                              <h2>
                                {isNil(dataForm.budgeAmount) === false &&
                                isNil(dataForm.budgeAmount) === false
                                  ? parseFormatCurrency(minumunPolicy, 2, 2)
                                  : "$0.00"}
                              </h2>
                              <strong>MXN</strong>
                              <span style={{ marginLeft: 5 }}>
                                {" "}
                                + IVA {tax * 100}%
                              </span>
                            </div>
                          ) : (
                            <div>
                              <h2>
                                {isNil(dataForm.budgeAmount) === false &&
                                isNil(dataForm.budgeAmount) === false
                                  ? parseFormatCurrency(
                                      dataForm.budgeAmount * taxPolicy,
                                      2,
                                      2
                                    )
                                  : "$0.00"}
                              </h2>
                              <strong>MXN</strong>
                              <span style={{ marginLeft: 5 }}>
                                {" "}
                                + IVA {tax * 100}%
                              </span>
                            </div>
                          )}
                        </DivPriceAmount>
                      )}
                  </>
                )}
                {errorApi.error === true && (
                  <DivErrorApi>{errorApi.message}</DivErrorApi>
                )}
              </DivForm>
            </>
          )}
          <div>
            <ReCAPTCHA
              sitekey="6LegXpMbAAAAANSPSPVL8QaYBb1g6zw7LzIF3WHg"
              onChange={(e) => {}}
              style={{ display: "inline-block" }}
              size="invisible"
              ref={recaptchaV3}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <ButtonSend
              onClick={async () => {
                let ENVIRONMENT = "http://localhost:3001";
                if (
                  window.location.hostname === "homify.ai" ||
                  window.location.hostname === "www.homify.ai"
                ) {
                  ENVIRONMENT = "https://api.homify.ai";
                } else if (window.location.hostname === "localhost") {
                  ENVIRONMENT = "http://localhost:3001";
                } else {
                  ENVIRONMENT = "https://apitest.homify.ai";
                }
                const getCaptchaToken =
                  await recaptchaV3.current.executeAsync();
                const next = await validateInformation(dataForm);

                if (next === true && clickSend === false) {
                  setClickSend(true);
                  const result = await fetch(
                    `${ENVIRONMENT}/api/leads/addLandingProspect`,
                    {
                      method: "POST",
                      body: JSON.stringify({
                        ...dataForm,
                        captchaToken: getCaptchaToken,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  const response = await result.json();
                  if (response.response.stateCode === 200) {
                    setFinishForm(true);
                    setDataForm({ ...initialStates, idProspectType: userType });
                    setDataErrors(initialErrors);
                    window.fbq("track", "CompleteRegistration");
                    window.fbq("track", "Lead");
                  } else {
                    setErrorApi({
                      error: true,
                      message:
                        isNil(response.response) === false &&
                        isNil(response.response.message) === false
                          ? response.response.message
                          : initialStatesError.message,
                    });
                    setTimeout(() => {
                      setErrorApi(initialStatesError);
                    }, 10000);
                  }
                  setClickSend(false);
                }
              }}
            >
              Enviar
            </ButtonSend>
          </div>
        </DivPrincipal>
      );
    } else {
      component = (
        <DivPrincipal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontFamily: "Poppins",
            }}
          >
            <div style={{ margin: "20px 0px 30px 0px" }}>
              <img src="/SendInformation.png" alt="" />
            </div>
            <h1 style={{ fontSize: 24 }}>Hemos recibido tus datos</h1>
            <div>
              <span>
                Agradecemos tu interés, muy pronto <br />
                nos pondremos en contacto contigo.
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <ButtonSend
              onClick={async () => {
                onClose(false);
                setFinishForm(false);
              }}
            >
              Cerrar
            </ButtonSend>
          </div>
        </DivPrincipal>
      );
    }
  }

  return component;
};

export default FormRegister;
