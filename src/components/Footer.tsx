import Style from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={`w-full p-6 mt-10 `}>
      <button className={Style.btn}>Button</button>
    </footer>
  );
};

export default Footer;
