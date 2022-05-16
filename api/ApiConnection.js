const API = 'https://coffeshopitam.herokuapp.com/api/v1/';

export const LogInAPI = async (user, password) => {
  const API_link = `${API}users/sign_in`;
  try {
    const response = await fetch(API_link, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user,
        password: password,
      }),
    });

    const json = await response.json();
    console.log(json);
    return json.user;
  } catch (error) {
    console.error(error);
  }
};

export const GetCategories = async token => {
  const API_link = `${API}categories`;
  try {
    const response = await fetch(API_link, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();
    console.log(json.categories);
    return json.categories;
  } catch (error) {
    console.error(error);
  }
};
