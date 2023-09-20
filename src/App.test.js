import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import MovieList from "./components/MovieList";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import SearchResults from "./pages/SearchResults/SearchResults";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

describe("MovieList Component", () => {
  it("renders without errors", async () => {
    const axiosGet = jest.spyOn(axios, "get");
    axiosGet.mockResolvedValue({
      data: {
        results: [
          {
            id: 1,
            poster_path: "/sample.jpg",
            name: "Sample Movie",
          },
        ],
      },
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieList title="Sample Title" fetchUrl="/sample-url" />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Sample Title")).toBeInTheDocument();
    });
    axiosGet.mockRestore();
  });
});

jest.mock("axios");
describe("MovieDetails Component", () => {
  it("renders without errors", async () => {
    const useSelectorMock = jest.fn();
    useSelectorMock.mockReturnValue(346698);

    axios.get.mockResolvedValue({
      data: {
        title: "Sample Movie",
      },
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieDetails />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      // Use a flexible text matcher to find the text
      expect(screen.getByText(/Sample Movie/i)).toBeInTheDocument();
    });

    useSelectorMock.mockRestore();
  });
});

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("SearchResults Component", () => {
  it("renders movie titles from searchResults", async () => {
    const mockSearchResults = [
      {
        id: 1,
        title: "Movie 1",
      },
      {
        id: 2,
        title: "Movie 2",
      },
    ];
    useSelector.mockReturnValue({
      searchInput: "Sample Query",
      searchResults: mockSearchResults,
      loading: false,
    });

    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchResults />
        </Provider>
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Movie 1")).toBeInTheDocument();
    });
  });
});
