import { MemoryRouter } from "react-router-dom"
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import Welcome from "./components/Welcome.jsx";
import AllTheBooks from "./components/AllTheBooks.jsx"
import books from "./data/horror.json"
import CommentArea from "./components/CommentArea.jsx"
import MyNav from "./components/MyNav.jsx"
import { fireEvent } from "@testing-library/react"
import ThemeContextProvider from "./context/ThemeContextProvider.jsx"


//test1
describe("Welcome tests", () => {
  it("renders Welcome component", () => {
    render(<Welcome />);
    expect(screen.getByText(/epicbook/i)).toBeInTheDocument();
  });
});

//test2
it("renders correct number of book cards", () => {
  render(
    <MemoryRouter>
      <AllTheBooks
        filteredBooks={books}
        selected={null}
        setSelected={() => { }}
      />
    </MemoryRouter>
  )

  const cards = screen.getAllByTestId("book-card")

  expect(cards.length).toBe(books.length)
})


//test 3
it("renders CommentArea correctly", () => {
  render(
    <MemoryRouter>
      <CommentArea selected={null} />
    </MemoryRouter>
  )

  expect(screen.getByText(/seleziona un libro/i)).toBeInTheDocument()
})

//test 4
it("calls setFilteredBooks when typing in navbar search", () => {
  const mockSetFilteredBooks = jest.fn()

  render(
    <MemoryRouter>
      <ThemeContextProvider>
        <MyNav setFilteredBooks={mockSetFilteredBooks} />
      </ThemeContextProvider>
    </MemoryRouter>
  )

  const searchInput = screen.getByPlaceholderText(/cerca/i)

  fireEvent.keyUp(searchInput, { target: { value: "har" } })

  expect(mockSetFilteredBooks).toHaveBeenCalled()
})

//test5
it("changes border color when a book is clicked", () => {
  let selected = null

  const setSelected = (asin) => {
    selected = asin
  }

  const { rerender } = render(
    <MemoryRouter>
      <AllTheBooks
        filteredBooks={books}
        selected={selected}
        setSelected={setSelected}
      />
    </MemoryRouter>
  )

  const firstCard = screen.getAllByTestId("book-card")[0]
  const firstImage = screen.getAllByTestId("book-image")[0]

  fireEvent.click(firstImage)

  rerender(
    <MemoryRouter>
      <AllTheBooks
        filteredBooks={books}
        selected={selected}
        setSelected={setSelected}
      />
    </MemoryRouter>
  )

  expect(firstCard).toHaveStyle("border: 3px solid red")
})

//test6
it("resets first book border when clicking a second book", () => {
  let selected = null

  const setSelected = (asin) => {
    selected = asin
  }

  const { rerender } = render(
    <MemoryRouter>
      <AllTheBooks
        filteredBooks={books}
        selected={selected}
        setSelected={setSelected}
      />
    </MemoryRouter>
  )

  const images = screen.getAllByTestId("book-image")

  fireEvent.click(images[0])

  rerender(
    <MemoryRouter>
      <AllTheBooks
        filteredBooks={books}
        selected={selected}
        setSelected={setSelected}
      />
    </MemoryRouter>
  )

  fireEvent.click(images[1])

  rerender(
    <MemoryRouter>
      <AllTheBooks
        filteredBooks={books}
        selected={selected}
        setSelected={setSelected}
      />
    </MemoryRouter>
  )

  const cards = screen.getAllByTestId("book-card")

  expect(cards[0]).not.toHaveStyle("border: 3px solid red")
  expect(cards[1]).toHaveStyle("border: 3px solid red")
})

//test7
it("does not render SingleComment at page load", () => {
  render(
    <MemoryRouter>
      <CommentArea selected={null} />
    </MemoryRouter>
  )

  const comments = screen.queryAllByTestId("single-comment")
  expect(comments.length).toBe(0)
})


//test 8
it("loads comments in the DOM when a book is selected", async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve([
          {
            _id: "1",
            comment: "Bellissimo libro",
            rate: "5",
            elementId: books[0].asin,
          },
        ]),
    })
  )

  render(
    <MemoryRouter>
      <CommentArea selected={books[0].asin} />
    </MemoryRouter>
  )

  const comment = await screen.findByText(/bellissimo libro/i)
  expect(comment).toBeInTheDocument()
})