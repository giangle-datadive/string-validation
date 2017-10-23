export const notEmpty = (value) => {
  return !value.trim() === '';
};

export const isEmail = (value) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegex.test(value);
}

export const isPhoneNumber = (number, region = 'VN') => {
  const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
  try {
    const phoneNumber = phoneUtil.parse(number, region);

    return phoneUtil.isValidNumber(phoneNumber);
  }catch (e){
    return false;
  }
}

isPhoneNumber('+83914449090');
