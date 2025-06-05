class APIError extends Error {
  constructor(message, stausCode) {
    super(message);
    this.name = this.constructor.name;
    this.stausCode = stausCode;
  }
}

export default APIError;