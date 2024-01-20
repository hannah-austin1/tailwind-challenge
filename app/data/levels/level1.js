/* 
This component passes the classNames onto the paths of the bee svg image, similarly to below
Note Tailwind uses tree-shaking so dynamic styles is not fully possible. Try the following colours:
fill-white fill-green-300 fill-red-300 fill-yellow-300 fill-purple-300 
*/

const Bee = () => {
  return (
    <svg>
      {/* ...rest of svg code */}
      <rect
        // Add the body fill here
        className="fill-white"
        x="11.75"
        y="17.99"
        width="8.5"
        height="4.25"
      />
      <path
        // Add the wing fill here
        className="fill-white"
        d="M2.48,20.66h0l3.77-3.54v5.1c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25c0-.6,.27-1.17,.73-1.56Z"
      />
    </svg>
  );
};

export default Bee;
