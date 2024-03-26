import styles from "./FormComponent.module.scss";
import { useForm } from "react-hook-form";

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<any>();

  const onSubmit = (data: any) => {
    reset();

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.form__box}>
        <h3>Kontakt</h3>
        <input
          type="email"
          {...register("email")}
          placeholder="Email adresa..."
        />
        {errors.email && <p>{`${errors.email.message}`}</p>}
      </div>
      <div className={styles.form__box}>
        <h3>Adresa</h3>
        <input type="text" {...register("name")} placeholder="Ime" />
        {errors.name && <p>{`${errors.name.message}`}</p>}
        <select {...register("country")}>
          <option value="croatia">Hrvatska</option>
          <option value="bih">Bosna i Hercegovina</option>
          <option value="serbia">Srbija</option>
          <option value="slovenia">Slovenija</option>
        </select>
        <input type="text" {...register("address")} placeholder="Adresa" />
        {errors.address && <p>{`${errors.address.message}`}</p>}
      </div>
      <div className={styles.form__box}>
        <h3>Način plaćanja</h3>
        <div className={styles.form__box__label}>
          <input
            type="radio"
            {...register("type")}
            value={"cash"}
            id={"cash"}
          />
          <label htmlFor={"cash"}>Pouzeće</label>
        </div>
        <div className={styles.form__box__label}>
          <input
            type="radio"
            {...register("type")}
            value={"card"}
            id={"card"}
          />
          <label htmlFor={"card"}>Kartica</label>
        </div>
        {errors.type && <p>{`${errors.type.message}`}</p>}
      </div>
      <div className={styles.form__box}>
        <div className={styles.form__box__label}>
          <input type="checkbox" {...register("checkbox")} id="checkbox" />
          <label htmlFor={"checkbox"}>Prihvaćam uvjete narudžbe</label>
        </div>
        {errors.checkbox && <p>{`${errors.checkbox.message}`}</p>}
      </div>
      <button
        className={styles.form__button}
        disabled={isSubmitting}
        onClick={handleSubmit(onSubmit)}
      >
        Naruči
      </button>
    </form>
  );
};

export default FormComponent;
