const API = 'https://coffeshopitam.herokuapp.com/api/v1/';

export const LogInAPI = (user, password) => {
  return new Promise((resolve, reject) => {
    var formData = new FormData();
    formData.append('email', user);
    formData.append('password', password);

    const xhttp = new XMLHttpRequest();
    console.log(formData);
    xhttp.open('POST', API + 'users/sign_in', true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error: ', API + 'users/sign_in'));
      }
    };

    xhttp.send(`email=${user}&password=${password}`);
  });
};
