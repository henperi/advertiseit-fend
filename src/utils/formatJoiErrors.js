import { camel2title } from './textHelpers';

export const formatJoiErrors = (errors) => {
  const { details } = errors;
  const detailsArray = [];
  const detailsObject = {};

  if (details) {
    details.map((detail) => {
      const { message, path } = detail;

      if (!detailsObject[path]) {
        detailsObject[path] = camel2title(message.replace(/"/gi, ''));
      }

      return detailsArray.push({
        message: camel2title(message.replace(/"/gi, '')),
        key: path[0],
      });
    });

    return { detailsArray, detailsObject };
  }
  return {
    detailsArray: errors.toString(),
    detailsObject: errors.toString(),
  };
};
