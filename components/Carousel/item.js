export const Item = ({ text, customer }) => {
  return (
    <div className="w-[80%] my-20 mx-auto">
      <div className="shadow-sm rounded md:shadow w-full mx-auto flex flex-col md:flex-row md:items-center">

        <div className="px-6 py-6 w-full max-w-2xl mx-auto">
          <span className="text-red-600 text-3xl">
            <i className="bi bi-quote"></i>
          </span>
          <p className="text-xl text-gray-900 tracking-wide mb-10">{text}</p>

          <span className="font-semibold text-xl text-gray-900 capitalize">
            {customer}
          </span>
        </div>
      </div>
    </div>
  );
};
