import * as Joi from 'joi-browser';
import { formatJoiErrors } from '../../utils/formatJoiErrors';

const validateSignupData = async (signupData) => {
  try {
    const signupDataSchema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required(),
      firstName: Joi.string()
        .min(3)
        .max(15)
        .required(),
      lastName: Joi.string()
        .min(3)
        .max(15)
        .required(),
      phone: Joi.string()
        .length(11)
        .required(),
      accountType: Joi.string()
        .valid('Customer', 'Merchant')
        .required(),
    });
    // @ts-ignore
    await signupDataSchema.validate(signupData, {
      abortEarly: false,
    });

    return null;
  } catch (errors) {
    return {
      errors: formatJoiErrors(errors),
    };
  }
};

export { validateSignupData };
