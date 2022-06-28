export default (args, argTypes) => {
  const extractedArgs = {};
  Object.keys(argTypes).forEach((key) => {
    extractedArgs[key] = args[key];
  });
  return extractedArgs;
};
