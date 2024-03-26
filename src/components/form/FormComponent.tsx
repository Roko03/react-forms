import styles from "./FormComponent.module.scss";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const orderSchema = z.object({
  email: z.string().email({
    message: "Unijeli ste pogrešan e-mail",
  }),
  name: z.string().min(1, { message: "Unesite ime" }),
  country: z.string().min(1, { message: "Unesite državu" }),
  address: z.string().min(1, { message: "Unesite adresu" }),
  type: z.enum(["cash", "card"], {
    errorMap: () => ({ message: "Moraš odabrati način plačanja" }),
  }),
  checkbox: z.literal(true, {
    errorMap: () => ({ message: "Moraš prihvatiti uvjete narudžbe" }),
  }),
});

type TOrderSchema = z.infer<typeof orderSchema>;

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TOrderSchema>({ resolver: zodResolver(orderSchema) });

  const onSubmit = (data: TOrderSchema) => {
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
        {errors.email && (
          <p className={styles.form__error}>{`${errors.email.message}`}</p>
        )}
      </div>
      <div className={styles.form__box}>
        <h3>Adresa</h3>
        <input type="text" {...register("name")} placeholder="Ime" />
        {errors.name && (
          <p className={styles.form__error}>{`${errors.name.message}`}</p>
        )}
        <select {...register("country")}>
          <option value="croatia">Hrvatska</option>
          <option value="bih">Bosna i Hercegovina</option>
          <option value="serbia">Srbija</option>
          <option value="slovenia">Slovenija</option>
        </select>
        <input type="text" {...register("address")} placeholder="Adresa" />
        {errors.address && (
          <p className={styles.form__error}>{`${errors.address.message}`}</p>
        )}
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
        {errors.type && (
          <p className={styles.form__error}>{`${errors.type.message}`}</p>
        )}
      </div>
      <div className={styles.form__box}>
        <div className={styles.form__box__label}>
          <input type="checkbox" {...register("checkbox")} id="checkbox" />
          <label htmlFor={"checkbox"}>Prihvaćam uvjete narudžbe</label>
        </div>
        {errors.checkbox && (
          <p className={styles.form__error}>{`${errors.checkbox.message}`}</p>
        )}
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
