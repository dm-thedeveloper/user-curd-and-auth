const asychandler = (fnx) => {
  return (req, res, next) => {
    Promise.resolve(fnx(req, res, next)).catch((error) => next(error));
  };
};

export default asychandler;
