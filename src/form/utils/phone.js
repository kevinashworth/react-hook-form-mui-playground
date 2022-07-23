import isMobilePhone from "validator/es/lib/isMobilePhone";

export const isValidPhone = (value) => {
  if (!value) {
    return false;
  }
  const digits = value.replace(/\D/g, "");
  // because validator library approves 7-digit phone numbers and we want 10 digits
  if (digits.length < 10) {
    return false;
  }
  const result = isMobilePhone(digits + "", "en-US");
  return result;
};

// if valid US phone, outputs last 10 digits as +18015551212
export const phoneE164_formatter = (phone) => {
  if (!isValidPhone(phone)) {
    return phone;
  }
  const digits = phone.replace(/\D/g, "").slice(-10);
  const result = `+1${digits}`;
  return result;
};

// if valid US phone, outputs last 10 digits as (801) 555-1212
export const phone_formatter = (phone) => {
  if (!isValidPhone(phone)) {
    return phone;
  }
  const digits = phone.replace(/\D/g, "").slice(-10);
  const phoneRegex = /^([0-9]{3})([0-9]{3})([0-9]{4})$/;
  const match = phoneRegex.exec(digits);
  const formattedValue = `(${match[1]}) ${match[2]}-${match[3]}`;
  return formattedValue;
};
