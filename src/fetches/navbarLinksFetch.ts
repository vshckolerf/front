export interface INavbarLink {
    id: number;
    name: string
    perm: number
    url: string
}

export default async function navbarLinksFetch() {
    const resp = await fetch(import.meta.env.VITE_API_URL + "navlinks", {
        method: "get",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    if (resp.ok)
        return resp.json();
    else 
        throw new Error("API Error GET /navlinks")
}