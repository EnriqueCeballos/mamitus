let is_ok = true;

const customFetch = (timeout, data) => {
  return new Promise((resolve, reject) => {
    debugger;
    setTimeout(() => {
      if (is_ok) {
        resolve(data);
      } else {
        reject("Peticion rechazada");
      }
    }, timeout);
  });
};
export default customFetch;
