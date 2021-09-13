module.exports = (phase) => {
    console.log('phase',phase);
    console.log('phaseProcess',process.env.ENVIRONMENT);
  return {
    env: {
      ENVIRONMENT: "dev",
    },
  };
};
