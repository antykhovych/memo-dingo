/**
 * Колода карт. Класс отвечает за создание и тасование карт. Содержит список изображений карт.
 */
class Deck {
    #cardsImages = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png" , "8.png", "9.png", "10.png" , "11.png", "12.png", "13.png" , "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "21.png" ];

    constructor() {
        this.cards = [];
        this.#cardsImages.forEach(image => {
            this.cards.push(new Card(image));
            this.cards.push(new Card(image));
        });
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard(card) {
        let index = this.cards.findIndex(item => item.imagePath == card.imagePath);
        if (index != -1) {
            this.cards.splice(index, 1);
            card.disconectFromDOM();
        }
    }
}