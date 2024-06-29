const HeaderAccount: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <button
        aria-label="Signup Button"
        type="submit"
        className=" self-end py-2 px-4 text-paprika-salmon font-semibold rounded-lg hover:bg-paprika-light hover:text-white transition duration-200"
      >
        Sign Up
      </button>
      <button
        aria-label="Login Button"
        className="bg-[#FFE7E7] self-end py-2 px-4 text-paprika-salmon font-semibold rounded-3xl hover:bg-paprika-light hover:text-white transition duration-200"
      >
        Log In
      </button>
    </div>
  );
};

export default HeaderAccount;
