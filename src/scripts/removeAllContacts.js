import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => { 
    try {
    const deleteContacts = [];

    await writeContacts(deleteContacts);
    } catch (error) {
    console.log(error);
    }
};

removeAllContacts();