export const extractArgs = (args: Record<any, any>, argTypes: Record<any, any>) => {
  const extractedArgs: Record<any, any> = {};
  Object.keys(argTypes).forEach((key) => {
    extractedArgs[key] = args[key];
  });
  return extractedArgs;
};

export const extractOtherArgs = (args: Record<any, any>, argTypes: Record<any, any>) => {
  return Object.fromEntries(Object.entries(args).filter(([key]) => !(key in argTypes)));
};
