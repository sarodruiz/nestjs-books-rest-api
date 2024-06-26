import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    private books = [
        {
            "id": 1,
            "title": "The Hound of the Baskervilles",
            "author": "Arthur Conan Doyle",
            "year": 1902,
            "genre": "novel"
        },
        {
            "id": 2,
            "title": "Harry Potter and the Philosopher's Stone",
            "author": "J. K. Rowling",
            "year": 1997,
            "genre": "fantasy"
        },
        {
            "id": 3,
            "title": "The Fellowship of the Ring",
            "author": "J. R. R. Tolkien",
            "year": 1954,
            "genre": "fantasy"
        },
        {
            "id": 4,
            "title": "The Name of the Wind",
            "author": "Patrick Rothfuss",
            "year": 2007,
            "genre": "fantasy"
        },
        {
            "id": 5,
            "title": "A Game of Thrones",
            "author": "George R. R. Martin",
            "year": 1996,
            "genre": "fantasy"
        },
        {
            "id": 6,
            "title": "The Shining",
            "author": "Stephen King",
            "year": 1977,
            "genre": "fiction"
        }
    ];

    findAll(genre?: string) {
        if (genre) {
            const queryResult = this.books.filter(book => book.genre === genre);
            if (queryResult.length === 0) {
                throw new NotFoundException('Book genre not found');
            }
            return queryResult;
        }
        return this.books;
    }

    findOne(id: number) {
        const book = this.books.find(book => book.id === id);
        if (!book) {
            throw new NotFoundException('Book not found');
        }
        return book;
    }

    create(book: CreateBookDto) {
        const booksByHighestId = [...this.books].sort((a,b) => b.id - a.id);
        const newBook = {
            id: booksByHighestId[0].id + 1,
            ...book
        }
        this.books.push(newBook);
        return newBook;
    }

    update(id: number, updatedBook: UpdateBookDto) {
        this.books = this.books.map(book => {
            if (book.id === id) {
                return { ...book, ...updatedBook }                
            }
            return book
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const deletedBook = this.findOne(id);
        this.books = this.books.filter(book => book.id !== id);
        return deletedBook;
    }
}
