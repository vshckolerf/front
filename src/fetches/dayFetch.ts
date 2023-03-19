interface ILesson {
    start: string;
    end: string;
}

export function dayFetch(order: number) {
  return new Promise<ILesson[]>((resolve, reject) => {
    fetch(import.meta.env.VITE_API_URL + `schedule/${order}`, {
      method: "get",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then((resp: Response) => {
      if (resp.ok) {
        resp.json().then((respObj) => {
          resolve(respObj);
        });
      } else {
        reject(resp);
      }
    });
  })

}