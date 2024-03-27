import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className=" px-6 py-2 bg-gradient-to-b from-black z-20 w-full flex flex-col md:flex-row justify-between absolute  ">
      <img src={Logo} alt="" className="w-44" />
    </div>
  );
};
export default Header;
