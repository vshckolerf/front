interface ILesson {
  start: string;
  end: string;
}

export async function dayFetch(order: number): Promise<ILesson[]> | never {
  const resp: Response = await fetch(
    import.meta.env.VITE_API_URL + `schedule/${order}`,
    {
      method: "get",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    },
  );

  if (resp.ok) {
    const respObj = await resp.json();

    return respObj;
  }
  throw resp;
}
