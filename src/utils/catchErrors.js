const catchErrors = error => {
  let errorMsg;
  if (error.response && error.response.data) {
    errorMsg = error.response.data.error || error.response.data;
  } else {
    errorMsg = error.message || 'An error occurred';
  }
  return errorMsg;
};

export default catchErrors;
