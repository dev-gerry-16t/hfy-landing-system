module.exports = (phase) => {
    console.log('phase',phase);
  return {
    env: {
      ENVIRONMENT: "dev",
    },
  };
};
