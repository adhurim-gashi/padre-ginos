import { createContext } from "react";
/* “Create a context that by default gives me:
an empty cart and a dummy    function” */
export const CartContext = createContext([[], function () {}])