class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items.join(", ");
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  }
}

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.log(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.log(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.log(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]