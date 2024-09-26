import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT = 3000,
    EMAIL_USER,
    EMAIL_PASS,
} = process.env;