const getState = ({getStore, setStore}) => {
    return {
        store: {
            likesGuardados: [],
            personajesGuardados: [],
            vehiculosguardados: [],
            planetasguardados: [],
            vehiculosguardados: [],
            viewPersonajes: [],
            viewPlanets: [],
            viewVehicles: []
        },
        actions: {

            // Estas son las funciones que se encargan de traer desde la API los nombres de los
            // personajes en la pantalla principal

            buscarPersonajes: () => {
                fetch("https://www.swapi.tech/api/people/").then(res => res.json()).then(data => setStore({personajesGuardados: data.results})).catch(err => console.error(err))
            },


            buscarPlanetas: () => {
                fetch("https://www.swapi.tech/api/planets/").then(res => res.json()).then(data => setStore({planetasguardados: data.results})).catch(err => console.error(err))
            },


            buscarVehiculos: () => {
                fetch("https://www.swapi.tech/api/vehicles/").then(res => res.json()).then(data => setStore({vehiculosguardados: data.results})).catch(err => console.error(err))
            },


            // Estas funciones son las que se encargan de traer desde la API todos los datos hacia las
            // visualizaciones específicas de cada personaje, vehículo o planeta

            functCharacter: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id).then(res => res.json()).then(data => setStore({viewPersonajes: data.result})).catch(err => console.error(err))
            },


            functPlanetas: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id).then(res => res.json()).then(data => setStore({viewPlanets: data.result})).catch(err => console.error(err))

            },

            functVehicle: (id) => {
                fetch("https://www.swapi.tech/api/vehicles/" + id).then(res => res.json()).then(data => setStore({viewVehicles: data.result})).catch(err => console.error(err))
            },

            // Estas dos funciones son las que se encargan de controlar los likes
            // en la pantalla principal

            giveMeLikes: likes => {
                const store = getStore();
                setStore({
                    likesGuardados: [
                        ... store.likesGuardados,
                        likes
                    ]
                });
            },

            dotLikeItAnymore: like => {
                const store = getStore();
                setStore({
                    likesGuardados: store.likesGuardados.filter((elemento) => elemento !== like)
                })
                console.log("hola")
            },


			//Esto no es significativo
            changeColor: (index, color) => { // get the store
                const store = getStore();

                // we have to loop the entire demo array to look for the respective index
                // and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) 
                        elm.background = color;
                    

                    return elm;
                });

                // reset the global store
                setStore({demo: demo});
            }
        }
    };
};

export default getState;
