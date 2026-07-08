import axios from "axios";
import { env } from "./env";

export const api=axios.create({
    baseURL:env.API_URL,

    headers:{
        "constant-type":"application/json",
    },
    timeout:10000,
})