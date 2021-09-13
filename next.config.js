const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  let ENVIRONMENT = "http://localhost:3001";
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.ENVIRONMENT === "prod";
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.ENVIRONMENT === "test";

  if (isDev) {
    ENVIRONMENT = "http://localhost:3001";
  } else if (isStaging) {
    ENVIRONMENT = "https://apitest.homify.ai";
  } else if (isProd) {
    ENVIRONMENT = "https://api.homify.ai";
  }
  console.log('ENVIRONMENT',ENVIRONMENT);
  return {
    env: {
      ENVIRONMENT,
    },
  };
};
