import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./FilterBar.module.css";
import plane_icon from "../../assets/plane_icon.png";
import Form from "react-bootstrap/Form";
import { getPlacesAll } from "../../services/DataFetching";
import { useEffect, useState, useRef } from "react";

export default function FilterBar() {
  const [places, setPlaces] = useState(null);
  const [originPlaces, setOriginPlaces] = useState(null);
  const [destinationPlaces, setDestinationPlaces] = useState(null);
  const originSelect = useRef(null);
  const destinationSelect = useRef(null);

  useEffect(() => {
    getPlacesAll().then((data) => {
      setPlaces(data);

      setOriginPlaces(
        data
          // .filter((place) => place.name != destinationSelect.current.value)
          .map((place, index) => (
            // <option key={index} value={place.id}>
            <option key={index} value={place.name}>
              {place.name}
            </option>
          ))
      );

      // destinationPlaces.unshift({name: "-----"});

      setDestinationPlaces(
        data
          .filter((place) => place.name != originSelect.current.value)
          .map((place, index) => (
            <option key={index} value={place.name}>
              {place.name}
            </option>
          ))
      );
    });
  }, []);

  const exchangeCities = () => {
    setOriginPlaces(
      places
        .filter((place) => place.name != destinationSelect.current.value)
        .map((place, index) => (
          <option key={index} value={place.name}>
            {place.name}
          </option>
        ))
    );
    setDestinationPlaces(
      places
        .filter((place) => place.name != originSelect.current.value)
        .map((place, index) => (
          <option key={index} value={place.name}>
            {place.name}
          </option>
        ))
    );
  };

  const originSelectOnChange = (value) => {
    exchangeCities();
  };

  const destinationSelectOnChange = (value) => {
    exchangeCities();
  };

  return (
    <Navbar bg="dark" variant="dark" className="w-100" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={plane_icon}
            className="d-inline-block align-top me-3"
            style={{ width: "62px" }}
            alt="Plane logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <Form className={styles.form__tag}> */}
          <div className={`${styles.select} col-6`}>
            <label htmlFor="">Origin:</label>
            <Form.Select
              ref={originSelect}
              name="origin"
              onChange={originSelectOnChange}
              style={{width: "150px"}}
            >
              <option selected value=""></option>
              {originPlaces}
            </Form.Select>
          </div>
          <div className={`${styles.select} ps-3`}>
            <label htmlFor="">Destination:</label>
            <Form.Select
              ref={destinationSelect}
              name="destination"
              onChange={destinationSelectOnChange}
              style={{width: "150px"}}
            >
              <option selected value=""></option>
              {destinationPlaces}
            </Form.Select>
          </div>
          {/* </Form> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
