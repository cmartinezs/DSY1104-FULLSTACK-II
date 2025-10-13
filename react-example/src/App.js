import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import { Container, Nav, Navbar } from "react-bootstrap";
import DynamicDataGrid from "./components/DataGrid";

function App() {
  const users = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Diana", age: 28 },
    { id: 5, name: "Ethan", age: 32 },
    { id: 6, name: "Fiona", age: 27 },
    { id: 7, name: "George", age: 29 },
    { id: 8, name: "Hannah", age: 31 },
    { id: 9, name: "Ian", age: 26 },
    { id: 10, name: "Jane", age: 33 },
    { id: 11, name: "Kevin", age: 34 },
    { id: 12, name: "Laura", age: 24 },
    { id: 13, name: "Mike", age: 36 },
    { id: 14, name: "Nina", age: 23 },
    { id: 15, name: "Oscar", age: 37 },
  ];

  const cars = [
    { id: 1, brand: "Toyota", model: "Camry", year: 2020 },
    { id: 2, brand: "Honda", model: "Accord", year: 2019 },
    { id: 3, brand: "Ford", model: "Mustang", year: 2021 },
    { id: 4, brand: "Chevrolet", model: "Malibu", year: 2018 },
    { id: 5, brand: "Nissan", model: "Altima", year: 2022 },
    { id: 6, brand: "BMW", model: "3 Series", year: 2020 },
    { id: 7, brand: "Audi", model: "A4", year: 2019 },
    { id: 8, brand: "Mercedes-Benz", model: "C-Class", year: 2021 },
    { id: 9, brand: "Volkswagen", model: "Passat", year: 2018 },
    { id: 10, brand: "Hyundai", model: "Sonata", year: 2022 },
    { id: 11, brand: "Kia", model: "Optima", year: 2020 },
    { id: 12, brand: "Subaru", model: "Legacy", year: 2019 },
    { id: 13, brand: "Mazda", model: "6", year: 2021 },
    { id: 14, brand: "Lexus", model: "ES", year: 2018 },
    { id: 15, brand: "Jaguar", model: "XE", year: 2022 },
    { id: 16, brand: "Volvo", model: "S60", year: 2020 },
    { id: 17, brand: "Acura", model: "TLX", year: 2019 },
    { id: 18, brand: "Infiniti", model: "Q50", year: 2021 },
    { id: 19, brand: "Cadillac", model: "CT5", year: 2018 },
    { id: 20, brand: "Alfa Romeo", model: "Giulia", year: 2022 },
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
      <Container>
        <HelloWorld message="Hello 1" />
        <HelloWorld message="Hello 2" />
        <HelloWorld message="Hello 3" />
        <Counter />
        <DynamicDataGrid data={users} title="User Data" />
        <DynamicDataGrid data={cars} title="Car Data" />
      </Container>
    </div>
  );
}

export default App;
