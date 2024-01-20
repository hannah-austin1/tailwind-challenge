interface IBeeProps {
  bodyStyles: string;
  wingStyles: string;
}
const Bee = ({ bodyStyles, wingStyles }: IBeeProps) => {
  console.log("code", bodyStyles, wingStyles);
  return (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path
        fill="black"
        d="M16,10.12c-3.31,0-6,2.69-6,6v8c0,3.31,2.69,6,6,6s6-2.69,6-6v-8c0-3.31-2.69-6-6-6Z"
      />
      <path
        fill="black"
        d="M30.66,19.33l-6.66-6.21v9.1c0,2.21,1.79,4,4,4s4-1.79,4-4c0-1.11-.49-2.17-1.34-2.89Z"
      />
      <path
        fill="black"
        d="M0,22.22c0,2.21,1.79,4,4,4s4-1.79,4-4V13.12L1.34,19.33c-.84,.73-1.33,1.78-1.34,2.89Z"
      />
      <path
        fill="black"
        d="M15,5.62c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5Z"
      />
      <path
        fill="black"
        d="M20.5,2.12c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5-1.57-3.5-3.5-3.5Z"
      />
      <rect
        id="_Transparent_Rectangle_"
        data-name=" Transparent Rectangle "
        className="fill-transparent"
        y=".12"
        width="32"
        height="32"
      />
      <path
        fill="white"
        d="M9.75,5.62c0-.97,.78-1.75,1.75-1.75s1.75,.78,1.75,1.75-.78,1.75-1.75,1.75c-.96-.01-1.74-.79-1.75-1.75Z"
      />
      <path
        fill="white"
        d="M20.5,7.37c-.97,0-1.75-.78-1.75-1.75s.78-1.75,1.75-1.75,1.75,.78,1.75,1.75c-.01,.96-.79,1.74-1.75,1.75Z"
      />
      <path
        className={wingStyles}
        d="M2.48,20.66h0l3.77-3.54v5.1c0,1.24-1.01,2.25-2.25,2.25s-2.25-1.01-2.25-2.25c0-.6,.27-1.17,.73-1.56Z"
      />
      <path
        className={wingStyles}
        d="M28,24.47c-1.24,0-2.25-1.01-2.25-2.25v-5.1l3.72,3.47h0c.45,.38,.72,.94,.73,1.53,.06,1.24-.91,2.29-2.15,2.35-.02,0-.04,0-.05,0Z"
      />
      <rect
        className={bodyStyles}
        x="11.75"
        y="17.99"
        width="8.5"
        height="4.25"
      />
      <path
        className={bodyStyles}
        d="M16,28.37c-2.34-.01-4.24-1.91-4.25-4.25v-.13h8.5v.13c-.01,2.34-1.91,4.24-4.25,4.25Z"
      />
      <path
        className={bodyStyles}
        d="M20.25,16.24H11.75v-.12c0-2.35,1.9-4.25,4.25-4.25s4.25,1.9,4.25,4.25v.12Z"
      />
    </svg>
  );
};

export default Bee;
