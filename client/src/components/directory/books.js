const books = [
    {
        "index": 1,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "stores": [
            {
                "index": 1,
                "name": "Bookworm Haven",
                "address": "123 Main Street, Lahore, Punjab, Pakistan",
                "stars": 4.5,
                "price": 15.99
            },
            {
                "index": 2,
                "name": "Reader's Paradise",
                "address": "456 Oak Avenue, Karachi, Sindh, Pakistan",
                "stars": 4.2,
                "price": 14.50
            },
            {
                "index": 3,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 16.99
            }
        ],
        "src": require("../../assets/images/books-imgs/alchemist.jpeg")
    },
    {
        "index": 2,
        "title": "Sapiens",
        "author": "Yuval Noah Harari",
        "stores": [
            {
                "index": 4,
                "name": "Knowledge Emporium",
                "address": "789 Elm Street, Islamabad, Islamabad Capital Territory, Pakistan",
                "stars": 4.7,
                "price": 18.99
            },
            {
                "index": 5,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 17.50
            }
        ],
        "src": require("../../assets/images/books-imgs/sapiens.jpeg")
    },
    {
        "index": 3,
        "title": "Beartown",
        "author": "Fredrik Backman",
        "stores": [
            {
                "index": 6,
                "name": "The Bookshelf",
                "address": "321 Pine Street, Lahore, Punjab, Pakistan",
                "stars": 4.3,
                "price": 16.50
            },
            {
                "index": 7,
                "name": "City Books",
                "address": "567 Maple Avenue, Karachi, Sindh, Pakistan",
                "stars": 4.1,
                "price": 15.75
            },
            {
                "index": 8,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 18.25
            }
        ],
        "src": require("../../assets/images/books-imgs/beartown.jpeg")
    },
    {
        "index": 4,
        "title": "Us Against You",
        "author": "Fredrik Backman",
        "stores": [
            {
                "index": 9,
                "name": "Town Reads",
                "address": "987 Cedar Street, Islamabad, Islamabad Capital Territory, Pakistan",
                "stars": 4.4,
                "price": 17.25
            },
            {
                "index": 10,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 18.00
            }
        ],
        "src": require("../../assets/images/books-imgs/us-against-you.jpeg")
    },
    {
        "index": 5,
        "title": "The Winners",
        "author": "Danielle Steel",
        "stores": [
            {
                "index": 11,
                "name": "Literary Corner",
                "address": "741 Oak Street, Lahore, Punjab, Pakistan",
                "stars": 4.2,
                "price": 16.75
            },
            {
                "index": 12,
                "name": "Book Oasis",
                "address": "852 Pine Avenue, Karachi, Sindh, Pakistan",
                "stars": 4.5,
                "price": 17.99
            },
            {
                "index": 13,
                "name": "Novel Nook",
                "address": "369 Elm Street, Islamabad, Islamabad Capital Territory, Pakistan",
                "stars": 4.3,
                "price": 16.25
            },
            {
                "index": 14,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 18.50
            }
        ],
        "src": require("../../assets/images/books-imgs/the-winners.jpeg")
    },
    {
        "index": 6,
        "title": "Atomic Habits",
        "author": "James Clear",
        "stores": [
            {
                "index": 15,
                "name": "Habit Haven",
                "address": "159 Maple Avenue, Lahore, Punjab, Pakistan",
                "stars": 4.6,
                "price": 17.50
            },
            {
                "index": 16,
                "name": "Mindful Books",
                "address": "753 Cedar Street, Karachi, Sindh, Pakistan",
                "stars": 4.4,
                "price": 16.99
            },
            {
                "index": 17,
                "name": "The Wellness Store",
                "address": "852 Elm Street, Islamabad, Islamabad Capital Territory, Pakistan",
                "stars": 4.7,
                "price": 18.25
            },
            {
                "index": 18,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 19.00
            }
        ],
        "src": require("../../assets/images/books-imgs/atomic-habits.jpeg")
    },
    {
        "index": 7,
        "title": "Start With Why",
        "author": "Simon Sinek",
        "stores": [
            {
                "index": 19,
                "name": "Purposeful Reads",
                "address": "357 Pine Avenue, Lahore, Punjab, Pakistan",
                "stars": 4.4,
                "price": 16.99
            },
            {
                "index": 20,
                "name": "Visionary Books",
                "address": "951 Oak Street, Karachi, Sindh, Pakistan",
                "stars": 4.3,
                "price": 15.50
            },
            {
                "index": 21,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 17.75
            }
        ],
        "src": require("../../assets/images/books-imgs/start-with-why.png")
    },
    {
        "index": 8,
        "title": "Reasons to Stay Alive",
        "author": "Matt Haig",
        "stores": [
            {
                "index": 22,
                "name": "Hopeful Haven",
                "address": "852 Cedar Street, Lahore, Punjab, Pakistan",
                "stars": 4.3,
                "price": 15.99
            },
            {
                "index": 23,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 16.50
            }
        ],
        "src": require("../../assets/images/books-imgs/Reasons to Stay Alive.png")
    },
    {
        "index": 9,
        "title": "The Forty Rules of Love",
        "author": "Elif Shafak",
        "stores": [
            {
                "index": 24,
                "name": "Rumi's Corner",
                "address": "963 Oak Avenue, Lahore, Punjab, Pakistan",
                "stars": 4.5,
                "price": 17.25
            },
            {
                "index": 25,
                "name": "Book Emporium",
                "address": "789 Cedar Street, Karachi, Sindh, Pakistan",
                "stars": 4.2,
                "price": 16.50
            },
            {
                "index": 26,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 18.75
            }
        ],
        "src": require("../../assets/images/books-imgs/Forty Rules of Love.jpeg")
    },
    {
        "index": 10,
        "title": "The Bell Jar",
        "author": "Sylvia Plath",
        "stores": [
            {
                "index": 27,
                "name": "Poetry Haven",
                "address": "357 Pine Avenue, Lahore, Punjab, Pakistan",
                "stars": 4.3,
                "price": 16.99
            },
            {
                "index": 28,
                "name": "Classic Books",
                "address": "951 Oak Street, Karachi, Sindh, Pakistan",
                "stars": 4.1,
                "price": 15.50
            },
            {
                "index": 29,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 17.75
            }
        ],
        "src": require("../../assets/images/books-imgs/The Bell Jar.jpeg")
    },
    {
        "index": 11,
        "title": "The Theory of Everything",
        "author": "Stephen Hawking",
        "stores": [
            {
                "index": 30,
                "name": "Science Haven",
                "address": "789 Pine Avenue, Lahore, Punjab, Pakistan",
                "stars": 4.4,
                "price": 16.50
            },
            {
                "index": 31,
                "name": "Book Emporium",
                "address": "852 Oak Street, Karachi, Sindh, Pakistan",
                "stars": 4.5,
                "price": 17.99
            },
            {
                "index": 32,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 19.00
            }
        ],
        "src": require("../../assets/images/books-imgs/The Theory of Everything.jpeg")
    },
    {
        "index": 12,
        "title": "The Murder of History",
        "author": "K.K. Aziz",
        "stores": [
            {
                "index": 33,
                "name": "History Corner",
                "address": "159 Cedar Avenue, Lahore, Punjab, Pakistan",
                "stars": 4.3,
                "price": 15.99
            },
            {
                "index": 34,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 16.50
            }
        ],
        "src": require("../../assets/images/books-imgs/The Murder of History.jpeg")
    },
    {
        "index": 13,
        "title": "The Time Traveler's Wife",
        "author": "Audrey Niffenegger",
        "stores": [
            {
                "index": 35,
                "name": "Timeless Reads",
                "address": "852 Maple Street, Lahore, Punjab, Pakistan",
                "stars": 4.2,
                "price": 16.75
            },
            {
                "index": 36,
                "name": "Book Emporium",
                "address": "741 Pine Avenue, Karachi, Sindh, Pakistan",
                "stars": 4.5,
                "price": 17.99
            },
            {
                "index": 37,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 18.25
            }
        ],
        "src": require("../../assets/images/books-imgs/The Time Traveler's Wife.jpeg")
    },
    {
        "index": 14,
        "title": "A Wrinkle in Time",
        "author": "Madeleine L'Engle",
        "stores": [
            {
                "index": 38,
                "name": "Timeless Reads",
                "address": "852 Maple Street, Lahore, Punjab, Pakistan",
                "stars": 4.2,
                "price": 16.75
            },
            {
                "index": 39,
                "name": "Book Emporium",
                "address": "741 Pine Avenue, Karachi, Sindh, Pakistan",
                "stars": 4.5,
                "price": 17.99
            },
            {
                "index": 40,
                "name": "Book Oasis",
                "address": "Block F, Eden Valley, Faisalabad",
                "stars": 4.6,
                "price": 18.25
            }
        ],
        "src": require("../../assets/images/books-imgs/a-wrinkle-in-time.jpeg")
    }
];

export default books;


// Step 1: Extract all stores from books
const allStores = books.flatMap(book => book.stores);

// Step 2: Remove duplicate stores
export const uniqueStores = allStores.reduce((acc, store) => {
    const index = acc.findIndex(s => s.name === store.name && s.address === store.address);
    if (index === -1) {
        acc.push(store);
    }
    return acc;
}, []);
