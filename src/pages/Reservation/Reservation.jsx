import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bill from "../../components/Bill/Bill";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import TripContext from "../../context/Context";
import styles from "./Reservation.module.css";
export default function Reservation() {
  const [passengers, setPassengers] = useState([]);
  const { currentTrip } = useContext(TripContext);
  const navigate = useNavigate();

  useEffect(() => {
	// navigate to home if relaod the page in /reservation URL
    if (currentTrip.destination == undefined) {
      navigate("/");
    }
  }, []);
  
  const addPassenger = (passenger) => {
    setPassengers(() => {
      const passengerList = [passenger, ...passengers];
      return [...passengerList];
    });
  };
  return (
    <main className={styles.reservation_container}>
      <div className={styles.dynamic_bg}>
        <img src={currentTrip.destination?.img_url} alt="destination" />
      </div>

      <ReservationForm addPassenger={addPassenger} />
      <Bill passengers={passengers} />
    </main>
  );
}
