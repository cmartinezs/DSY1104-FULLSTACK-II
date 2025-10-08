import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import { Container, Nav, Navbar } from "react-bootstrap";
import DataGrid from "./components/DataGrid";

function App() {


    const users = [
        { id: 1, name: "Alice", age: 30 },
        { id: 2, name: "Bob", age: 25 },
        { id: 3, name: "Charlie", age: 35 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 32 },
    ];

    const cars = [
        { id: 1, brand: "Toyota", model: "Camry", year: 2020 },
        { id: 2, brand: "Honda", model: "Accord", year: 2019 },
        { id: 3, brand: "Ford", model: "Mustang", year: 2021 },
        { id: 4, brand: "Chevrolet", model: "Malibu", year: 2018 },
        { id: 5, brand: "Nissan", model: "Altima", year: 2022 },
    ];  

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <HelloWorld message="Hello 1" />
      <HelloWorld message="Hello 2" />
      <HelloWorld message="Hello 3" />
      <Counter />
      <DataGrid data={users} />
    </div>
  );
}

export default App;
