/// <reference types="vite/client" />

type Order = {
    email: string;
    contact: Contact;
    type: 'cash' | 'card';
}

type Contact = {
    name: string;
    country: string;
    address: string;
}