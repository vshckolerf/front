import {ILesson} from "../interfaces/ILesson";

export function setDay(order:number,lessons:ILesson[]|null,jwt:string){
    return new Promise<string>((resolve, reject)=>{
        fetch(import.meta.env.VITE_API_URL + `schedule/${order}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
            body: JSON.stringify(lessons),
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(error => reject(error));
    });

}