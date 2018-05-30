const validate = (data, errors) => {
  const errs = errors;

  Object.keys(errs).map((property) => {
    if (data[property] === '') {
      errs[property].status = true;
      errs[property].helperText = 'This field cannot be empty';
    }
    return property;
  });

  return errs;
};

export default validate;
