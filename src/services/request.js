import { delay } from '../utils/common';

export const request = async ({ path }) => {
  await delay(300);
  var reader = new FileReader();
  return resolve(reader.readAsText(`./mock/${path}.json`, "UTF-8"));
};

export const fakeRequest = async (res) => {
  await delay(600);
  return res;
};

export default request;
