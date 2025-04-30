import sanaga from '../assets/sanaga.jpg';
import maritime from '../assets/maritime.jpg';
import musee from '../assets/musée.jpg';

export const destinations = [
    {
        id: 1,
        title: "Musée maritime de Douala",
        description: "Le musée maritime de Douala, situé dans le quartier Bonanjo, est un étbalissemnt culturel Camerounais dédié à l'histoire maritime du cameroun, en particulier celle de sa côte littorale.",
        image: maritime,
        type: "large"
    },
    {
        id: 2,
        title: "Musée national de Yaoundé",
        description: "Le musée national de Yaoundé, situé dans l'ancien palais présidentiel, est un établissemnt culturel cameounais, incontournable pour ceux qui souhaitent découvrir l'histoire et la culture du Cameroun",
        image: musee,
        type: "small"
    },
    {
        id: 3,
        title: "Le pont de la Sanaga",
        description: "Le pont d'Ebebda est un ouvrage d'art important au Cameoun, à la fois pour son rôle dans les transports et pour son intérêt touristique",
        image: sanaga,
        type: "small"
    }
];