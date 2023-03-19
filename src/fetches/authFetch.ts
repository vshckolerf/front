export function authFetch(email: string, password: string) {
  return new Promise<string>((resolve, reject) => {
    fetch(import.meta.env.VITE_API_URL + "auth/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((resp: Response) => {
      if (resp.ok) {
        resp.json().then((respObj) => {
          resolve(respObj.token as string);
        });
      } else {
        reject(resp);
      }
    });
  })

}