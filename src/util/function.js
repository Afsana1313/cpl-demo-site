let data = [
  {
    email: "afsana@mail.com",
    phoneNumber: "012323233",
    pw: "1234"
  },
  {
    email: "zaman20@mail.com",
    phoneNumber: "012323233",
    pw: "asdfg"
  },
  {
    email: "nipa22@mail.com",
    phoneNumber: "012323233",
    pw: "qwerty"
  }
];
//API calls will be done here.
export const CheckAuthorization = (email, pw) => {
  /// alert(email);
  // alert(pw);
  let access = false;
  data?.forEach((i) => {
    if (i.email == email && i.pw == pw) access = true;
    console.log(access);
  });
  return access;
};
export const RegisterNewUser = (email, phone, pw) => {
  data.push(...data, { email, phone, pw });
  console.log(data);
  return true;
};
