type GetClassNameParams = Array<
| Record<string, boolean>
| string
| undefined
>;

export const getClassName = (...classNames: GetClassNameParams) => {
  const result: string[] = [];

  for (let i = 0; i < classNames.length; i++) {
    const currentClassName = classNames[i];

    if (typeof currentClassName === 'object') {
      for (const className in currentClassName) {
        if (currentClassName[className]) {
          result.push(className);
        }
      }
    }

    if (typeof currentClassName === 'string') {
      result.push(currentClassName);
    }
  }

  return result.join(' ');
};
