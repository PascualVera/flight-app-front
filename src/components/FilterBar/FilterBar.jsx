import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./FilterBar.module.css";
import plane_icon from "../../assets/plane_icon.png";
import Form from "react-bootstrap/Form";
import { getPlacesAll } from "../../services/DataFetching";
import { useEffect, useState, useRef } from "react";
import { getTrips } from "../../services/DataFetching";

export default function FilterBar(props) {
  const [places, setPlaces] = useState(null);
  const [originPlaces, setOriginPlaces] = useState(null);
  const [destinationPlaces, setDestinationPlaces] = useState(null);
  const originSelect = useRef(null);
  const destinationSelect = useRef(null);

  useEffect(() => {
    getPlacesAll().then((data) => {
      setPlaces(data);

      setOriginPlaces(
        data.map((place, index) => (
          <option key={index} value={place.name}>
            {place.name}
          </option>
        ))
      );

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
    if (
      originSelect.current.value === destinationSelect.current.value &&
      originSelect.current.value !== "" &&
      destinationSelect.current.value !== ""
    ) {
      originSelect.current.value = "";
      destinationSelect.current.value = "";
    }
    setOriginPlaces(
      places
        .filter((place) => place.name != destinationSelect.current.value)
        .map((place, index) => {
          return place.name == originSelect.current.value ? (
            <option key={index} value={place.name} selected>
              {place.name}
            </option>
          ) : (
            <option key={index} value={place.name}>
              {place.name}
            </option>
          );
        })
    );
    setDestinationPlaces(
      places
        .filter((place) => place.name != originSelect.current.value)
        .map((place, index) => {
          return place.name == destinationSelect.current.value ? (
            <option key={index} value={place.name} selected>
              {place.name}
            </option>
          ) : (
            <option key={index} value={place.name}>
              {place.name}
            </option>
          );
        })
    );
  };

  const originSelectOnChange = (value) => {
    exchangeCities();

    const originSelectedValue = originSelect.current.value;
    const destinationSelectedValue = destinationSelect.current.value;
    if (originSelectedValue) {
      if (!destinationSelectedValue) {
        getTrips(`origin/${originSelectedValue}`).then((data) => {
          props.updateTrips(data);
        });
      } else {
        getTrips(
          `itinerary/from/${originSelectedValue}/to/${destinationSelectedValue}`
        ).then((data) => {
          props.updateTrips(data);
        });
      }
    }
  };

  const destinationSelectOnChange = (value) => {
    exchangeCities();

    const originSelectedValue = originSelect.current.value;
    const destinationSelectedValue = destinationSelect.current.value;
    if (destinationSelectedValue) {
      if (!originSelectedValue) {
        getTrips(`destination/${destinationSelectedValue}`).then((data) => {
          props.updateTrips(data);
        });
      } else {
        getTrips(
          `itinerary/from/${originSelectedValue}/to/${destinationSelectedValue}`
        ).then((data) => {
          props.updateTrips(data);
        });
      }
    }
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
              style={{ width: "150px" }}
              defaultValue=""
            >
              <option value=""></option>
              {originPlaces}
            </Form.Select>
          </div>
          <div className={`${styles.select} ps-3`}>
            <label htmlFor="">Destination:</label>
            <Form.Select
              ref={destinationSelect}
              name="destination"
              onChange={destinationSelectOnChange}
              style={{ width: "150px" }}
              defaultValue=""
            >
              <option value=""></option>
              {destinationPlaces}
            </Form.Select>
          </div>
          {/* </Form> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
