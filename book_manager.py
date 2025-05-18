import json
import os

def load_books(filename):
    """Load books from a JSON file."""
    if os.path.exists(filename):
        try:
            with open(filename, 'r', encoding='utf-8') as file:
                return json.load(file)
        except json.JSONDecodeError:
            print(f"Error: {filename} is not a valid JSON file.")
            return []
        except Exception as e:
            print(f"Error loading file: {e}")
            return []
    else:
        print(f"File {filename} does not exist. Starting with an empty collection.")
        return []
    
def save_books(books, filename):
    """Save books to a JSON file."""
    try:
        with open(filename, 'w', encoding='utf-8') as file:
            json.dump(books, file, indent=2, ensure_ascii=False)
        print(f"Books saved successfully to {filename}")
    except Exception as e:
        print(f"Error saving file: {e}")

def add_book(books):
    """Add a new book to the collection."""
    print("\n=== Add a New Book ===")
    
    book = {}
    book["voornaam"] = input("Author's first name (voornaam): ")
    book["achternaam"] = input("Author's last name (achternaam): ")
    book["titel"] = input("Book title (titel): ")
    book["beschrijving"] = input("Book description (beschrijving): ")
    book["Taal"] = input("Language code (Taal, e.g., 'D' for German, 'NL' for Dutch): ")
    
    books.append(book)
    print("Book added successfully!")
    return books

def display_books(books):
    """Display all books in the collection."""
    if not books:
        print("The book collection is empty.")
        return

    print("\n=== Current Book Collection ===")
    for i, book in enumerate(books, 1):
        print(f"\nBook {i}:")
        print(f"Author: {book.get('voornaam', '')} {book.get('achternaam', '')}")
        print(f"Title: {book.get('titel', '')}")
        print(f"Language: {book.get('Taal', '')}")
        print(f"Description: {book.get('beschrijving', '')[:100]}..." if len(book.get('beschrijving', '')) > 100 
              else f"Description: {book.get('beschrijving', '')}")

def main():
    filename = input("Enter the JSON file name (default: ../boekenlijst.json): ") or "boekenlijst.json"
    
    books = load_books(filename)
    
    # Display current books
    display_books(books)
    
    # Add a new book
    books = add_book(books)
    
    # Save updated collection
    save_books(books, filename)
    
    # Display updated collection
    print("\nUpdated book collection:")
    display_books(books)

if __name__ == "__main__":
    main()
