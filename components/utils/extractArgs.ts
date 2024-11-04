export default (args: Record<any, any>, argTypes: Record<any, any>) => {
  const extractedArgs: Record<any, any> = {};
  Object.keys(argTypes).forEach((key) => {
    extractedArgs[key] = args[key];
  });
  return extractedArgs;
};
