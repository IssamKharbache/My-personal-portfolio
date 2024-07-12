import { motion } from "framer-motion";
import Socials from "../Socials";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { useRef, useState } from "react";
import { toast } from "sonner";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  //sending email function
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          setLoading(false);
          setIsSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.success("Something went wrong try again later");
          setLoading(false);
          setIsSent(false);
        }
      );
  };

  return (
    <motion.div
      variants={variants}
      className="contact"
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={variants} className="textContainer">
        <motion.h1 variants={variants}>Let's get in touch</motion.h1>
        <motion.div variants={variants} className="item">
          <p>
            Please fill out the form to get in touch.
            <br />I will reply within 24h
          </p>
          <Socials />
        </motion.div>
      </motion.div>
      <motion.div variants={variants} className="formContainer">
        {isSent ? (
          <div className="sent">
            <img src="/smiley.webp" alt="" />
            <p>I revieved your message will reply within 24h</p>
            <button>
              <a href="#home">Homepage</a>
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" placeholder="Full name" required name="name" />
            <input
              type="email"
              placeholder="Email address"
              required
              name="email"
            />
            <textarea placeholder="Message" required rows={8} />
            {loading ? (
              <span className="loader"></span>
            ) : (
              <button>Send message</button>
            )}
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
