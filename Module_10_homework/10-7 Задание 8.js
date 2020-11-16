let myLibrary = new Map([
  ["Moem", "Theater"],
  ["Steinbeck", "Chrysanthemums"],
  ["Orwell", "1984"],
  ["Dostoevsky", "Demons"]
]);
for (let author of myLibrary.keys()){
  console.log(`Писатель ${author} написал произведение ${myLibrary.get(author)}`);
}