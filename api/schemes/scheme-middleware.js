const schemes = require('./scheme-model');

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  const { scheme_id } = req.params;
  schemes.findById(scheme_id)
    .then(data => {
      if (!data.scheme_name) {
        next({ status: 404, message: `scheme with scheme_id ${scheme_id} not found` });
      }
      else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { body } = req;
  if (Object.keys(body).length === 0 || body.scheme_name === null || typeof(body.scheme_name) !== 'string') {
    next({ status: 400, message: 'invalid scheme_name' });
  }
  else {
    next();
  }
};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const { body } = req;
  if (Object.keys(body).length === 0 || body.instructions === null || typeof(body.instructions) !== 'string' || body.step_number === null || typeof(body.step_number) !== 'number' || body.step_number < 1) {
    next({ status: 400, message: 'invalid step' });
  }
  else {
    next();
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
