export interface INavbarLink {
    id: number;
    name: string
    perm: number
    url: string
}

export default function navbarLinksFetch() {
    return new Promise<INavbarLink[]>((resolve, reject) => {
        fetch(import.meta.env.VITE_API_URL + `navlinks`, {
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