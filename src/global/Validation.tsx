export const emailValidation = (email: string) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email) === false) {
    return false;
  } else {
    return true;
  }
};
export const validFirsName = (text: any) => {
  var re = /([A-z])+(.?[a-zA-Z])*('?[a-zA-Z])*/;
  return re.test(text);
};
export const number = /^[0-9]+$/;
export const Name = /^[a-zA-Z]+$/;
export const regions = /^[a-zA-Z\s]+$/;
export const pincodes = /^[0-9]+$/;

export const accholder = /[a-zA-Z\s]+$/;

export const ifsc = /^[a-zA-Z0-9\s]+$/;

export const Pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

export const upi = /^[\w.-]+@[\w.-]+$/;

export const link =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
