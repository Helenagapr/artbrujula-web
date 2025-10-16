import { useState } from "react";
import styles from "./ChatComponent.module.scss";
import { DismissCircle24Filled } from "@fluentui/react-icons";
import logo from '../../assets/images/AF_logo_Brujula_HorizontalBlanco.png';

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        className={styles.whatsappButton}
        onClick={handleClick}
        aria-label="Chatear por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path
            d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.26-1.64A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.9 9.9 0 0 1-5.06-1.38l-.36-.21-3.72.98.99-3.63-.23-.37A9.9 9.9 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.65-.67 1.88-1.31.23-.65.23-1.2.16-1.31-.07-.1-.25-.16-.52-.3z"
            fill="currentColor"
          />
        </svg>
      </button>
      {open && (
        <div className={styles.container}>
          <div className={styles.header}>
            <img
              src={logo}
              alt="Art Brújula Logo"
              width={110}
              height={60}
            />

            <div
              className={styles.closeButton}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={() => setOpen(false)}
            >
              <DismissCircle24Filled
                style={{
                  color: hovered ? "rgba(0, 0, 0, 0.5)" : "#ffffffff",
                  fontSize: "40px",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                maxWidth: "60%",
                backgroundColor: "#dcf8c6", // color típico de mensaje enviado
                color: "#000",
                padding: "10px 14px",
                borderRadius: "16px 16px 16px 0px",
                alignSelf: "flex-end",
                margin: "8px 0",
                fontSize: "14px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              ¡Hola! Este es un mensaje de prueba.
            </div>
          </div>
        </div>
      )}
    </>
  );
  // const confirmed = window.confirm("¿Quieres iniciar un chat por WhatsApp?");
  // if (confirmed) {
  //   const phoneNumber = "34612345678";
  //   const message = "Hola, me gustaría más información";
  //   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  //   window.open(url, "_blank");
  // }
};

export default WhatsAppButton;
