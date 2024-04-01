import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <>
      <div className="h-[10vh] w-[90%] m-auto rounded-lg text-center bg-white flex justify-center align-top gap-11">
        <img
          className="h-[7vh] w-[4vw] pt-3"
          src="../public/Vector.png"
          alt=""
        />
        <h2 className="text-black font-extrabold pt-3 text-2xl">
          Firebase Contact App
        </h2>
      </div>
      <div className="w-[90%] m-auto">
          <CiSearch/>
        <input
          className="h-[8vh] w-[30%]  bg-transparent border border-green-50 rounded-lg mt-[5vh]"
          type="text"
        />
      </div>
    </>
  );
}
export default Navbar;
