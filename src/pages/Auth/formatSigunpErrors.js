import { camel2title } from '../../utils/textHelpers';

export const formatSignupErrors = (errors) => {
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
  return { detailsArray: errors.toString(), detailsObject };
};
