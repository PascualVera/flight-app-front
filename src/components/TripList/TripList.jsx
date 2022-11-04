import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TripContext from "../../context/Context";
import styles from "./TripList.module.css";
export default function TripList({ trips }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);
  const navigate = useNavigate();
  const navigateToRegister = (trip) => {
    navigate("/reservation");
    setCurrentTrip(trip);
  };

  return (
    <section className={styles.trip_list}>
      {trips.length > 0 ? (
        trips.map((trip) => (
          <article key={trip.id} className={styles.trip_wrapper}>
            <figure className={styles.img_wrapper}>
              {<img src={trip.destination.img_url} alt="destination" />}
            </figure>
            <div className={styles.info_wrapper}>
              <p>Trip to {trip.destination.name}</p>
              <p>From {trip.origin.name} </p>
              <p>
                {trip.price}$ <sub>Baggage fee not included</sub>
              </p>
              <button
                className={styles.button}
                onClick={() => {
                  navigateToRegister(trip);
                }}
              >
                Book this trip
              </button>
            </div>
          </article>
        ))
      ) : (
        <h1 className="text-white mt-5">No data</h1>
      )}
      {}
    </section>
  );
}
