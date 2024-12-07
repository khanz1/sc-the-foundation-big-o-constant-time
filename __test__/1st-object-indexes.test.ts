const generateRandomString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('');
};

const testHashTablePerformance = () => {
  const hashTable = new Map<string, number>();
  const totalItems = 1_000_000;

  console.log("Generating and inserting 1,000,000 random key-value pairs...");
  const startInsert = performance.now();

  // Insert 1,000,000 random items
  for (let i = 0; i < totalItems; i++) {
    const key = generateRandomString(10);
    const value = Math.floor(Math.random() * totalItems);
    hashTable.set(key, value);
  }

  const endInsert = performance.now();
  console.log(`Insertion Time: ${(endInsert - startInsert).toFixed(3)} ms`);

  const keys = Array.from(hashTable.keys());
  const randomKey = keys[Math.floor(Math.random() * totalItems)];
  const startRetrieve = performance.now();

  hashTable.get(randomKey);

  const endRetrieve = performance.now();
  console.log(`Retrieval key ${randomKey} - Time: ${(endRetrieve - startRetrieve).toFixed(3)} ms`);
};

testHashTablePerformance();