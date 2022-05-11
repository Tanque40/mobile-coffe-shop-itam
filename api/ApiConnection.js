const link = 'https://coffeshopitam.herokuapp.com/';
var request = new XMLHttpRequest();

export function logInApi(user, password) {
  var formData = new FormData();
  // Parameters: {"authenticity_token"=>"xzaY1fCiCfqGEiq4BLn1IOIK8WnBEJ7/pCgWtU+2uLO3vJdjZUNm4AyviBKsl5raLrhGqgZcqHy5WL7QNjRiAg==", "user"=>{"email"=>"Bruno@itamcoffe.mx", "password"=>"[FILTERED]", "remember_me"=>"0"}, "commit"=>"Log in"}

  formData.append('Parameters', {
    user: {
      email: user,
      password: password,
      remember_me: 0,
    },
  });

  request.open('POST', link + 'api/v1/users/sign_in');
  var data = (request.onload = () => {
    // Begin accessing JSON data here
    //data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
      data.forEach(movie => {
        console.log(movie);
      });
      return data;
    } else {
      console.log('error');
    }
  });

  request.send(formData);

  return data;
}
