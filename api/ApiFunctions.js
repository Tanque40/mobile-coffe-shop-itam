import {LogInAPI} from './ApiConnection';

export const LogInApi = async (user, password) => {
  try {
    console.log(user, password);
    const data = await LogInAPI(user, password);
    return data;
  } catch (error) {
    console.error(error);
  }
};
