import { z } from "zod";

export const formSchemas = {
  validNumber: z
    .string()
    .regex(/^(100(\.0+)?|\d{1,2}(\.\d)?)$/, "provide numbers 1.0 - 100"),
  numberOnly: z.string().regex(/^\d+$/, "enter a valid number"),
};

export const API = `https://backend-5zfp.onrender.com/`;

export const NIGERIAN_STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT Abuja",
];
