const GptSearchBar = () => {
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form action="" className="w-full md:w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="What would you like to watch today ?"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          Searh
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
