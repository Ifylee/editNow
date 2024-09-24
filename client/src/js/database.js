import { openDB } from 'idb';

// Initializes the database with a specified name and version
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
       // Check if the object store 'jate' already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store 'jate' with an auto-incrementing key path
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Logic to add content to the database
export const putDb = async (content) => {
  console.log(`Put to the db!`);
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: 1, value: content});
  const result = await request;

  console.log(`- data put into db`, result);

};  

//logic for a method that gets all the content from the database
  export const getDb = async () => {
    console.log(`GET from the db!`);
    const jateDB = await openDB('jate', 1);
    const tx = jateDB.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(1);
    const result = await request;

    // Check if any data was retrieved
    if (result) {
      console.log(`- data retrieved from the db`, result.value);
    } else {
      console.log(`- no data found in the db`);
    }

     // Return the value of the retrieved result
    return result?.value;
    };

// Initialize the database
initdb();
