const apURL = 'https://jsonplaceholder.typicode.com/users';

export const obtenerUsuarios = async ()=>{
    try {
        const respujesta = await fetch(apURL);
        if(!respujesta.ok) throw Error("Error de red");
        return await respujesta.json();
    } catch (error) {
        console.error("Error al obtener los usuarios", error);
        return [];
    }
};
