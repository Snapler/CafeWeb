import styles from "../styles/Contact.module.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.wrapper}>
        <div className={styles.ContactBox}>
          <div className={styles.IconBox}>
            <Image
              src="/img/ColorPhone16.png"
              alt="phone"
              width={32}
              height={32}
            />
          </div>
          <h2>Phone </h2>
          <p>06-4351-9465</p>
          <p>029264025</p>
        </div>
        <div className={styles.ContactBox}>
          <div className={styles.IconBox}>
            <Image src="/img/email64.png" alt="phone" width={32} height={32} />
          </div>
          <h2>Email </h2>
          <p>Global205@contact.com </p>
          <p>Sermind-Cafe@contact.com</p>
        </div>
        <div className={styles.ContactBox}>
          <div className={styles.IconBox}>
            <Image
              src="/img/social_media64.png"
              alt="phone"
              width={32}
              height={32}
            />
          </div>
          <h2>Social </h2>
          <div className={styles.social}>
            <a
              href="https://www.youtube.com/watch?v=mZjWU0S1Bg4"
              target="_blank"
            >
              <p className={styles.desc}>Sermind Cafe </p>
            </a>
            <a
              href="https://scontent.fhdy1-1.fna.fbcdn.net/v/t1.18169-9/15823355_100479330459404_4954601754109984357_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFkD0ZDZD_SfwkBGtWQRfpGg1V7-L40vjyDVXv4vjS-PBU7G21GoNeLov_StLmBi1ndouXBYTMgjDNfw4Bb8Cxr&_nc_ohc=UnRPOdPaVvoAX8KwPXX&_nc_ht=scontent.fhdy1-1.fna&oh=00_AT-vgROk1J75RXBd3AHw43LAC0uLZGP_Zqw3Mo4avsYzSQ&oe=61F22BE3"
              target="_blank"
              className={styles.desc}
            >
              Sermind Cafe (Global205)
            </a>
          </div>
        </div>
      </div>
      <div className={styles.ContactContainer}>
        <div className={styles.MapLocation}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.09378614492377!2d100.4119884363461!3d13.86899023331832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e291a38ab83c01%3A0xe4b643906c185579!2z4Lia4Lij4Li04Lip4Lix4LiX4LmC4LiB4Lil4Lia4Lit4LilMjA1ICjguJvguKPguLDguYDguJfguKjguYTguJfguKIpIOC4iOC4s-C4geC4seC4lA!5e0!3m2!1sth!2sth!4v1641290512167!5m2!1sth!2sth"
            width="480"
            height="400"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.ContactTitle}>Get in Touch</h1>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className={styles.input}
            placeholder="Name"
            {...register("NameRequired", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          {/* include validation with required or other standard HTML validation rules */}
          <input
            id="email"
            type={"email"}
            className={styles.input}
            placeholder="Email"
            {...register("EmailRequired", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            id="phone"
            className={styles.input}
            placeholder="Phone"
            {...register("PhoneRequired", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
          <textarea
            id="textinput"
            className={styles.input}
            placeholder="Message"
            cols={"30"}
            rows={"5"}
            {...register("MessageRequired", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input className={styles.input} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
