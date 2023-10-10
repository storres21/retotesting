import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

// por defecto, el componente muestra en el párrafo el valor "likes: 0"

test("Defaults to 0", () =>{
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
});

// cuando se hace clic en el botón Like, el número de likes se incremente en uno

test("Increment likes when Like button is clicked", () =>{
    render(<Like />);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
});

// cuando se hace clic en el botón Dislike, el número de likes se decrementa en uno

test("Decrement likes when Dislike button is clicked", () =>{
    render(<Like />);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
});