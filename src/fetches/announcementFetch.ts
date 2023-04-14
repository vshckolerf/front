export default async function announcementFetch(announcement: string): Promise<string> | never {
    const resp: Response = await fetch(import.meta.env.VITE_API_URL + "notification", {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            announcement,
            time: new Date(),
        }),
    });

    if (resp.ok) {
        const respObj = await resp.json();

        return respObj.token as string;
    }

    throw resp;
}
