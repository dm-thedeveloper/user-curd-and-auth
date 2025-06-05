class APIResponse {
  constructor(message, data, statusCode) {
    this.message = message;
    this.data = data;
    this.statusCode = statusCode;
  }
}
export default APIResponse;