import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, KM, color, isNew }) => {
  return (
    <>
      <h1 className={styles.my_cars}>
        <p>Marca: {brand}</p>
        <p>Cor: {color}</p>
        <p>Quilometragem: {KM}</p>
        {isNew && <p>Esse carro é novo</p>}
      </h1>
    </>
  );
};

export default CarDetails;
