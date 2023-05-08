import { useEffect } from "react";
import { useRef } from "react";

const Alert = () => {
  const alertText = useRef();
  const alertDiv = useRef();
  const aText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quibusdam natus consequuntur veniam labore atque.";

  const alertTextClear = () => {
    let initIndex = aText.length;
    const to = setInterval(() => {
      if (initIndex >= 0) {
        alertText.current.innerHTML = aText.slice(0, initIndex);
        initIndex--;
      } else {
        alertText.current.classList.add("hidden");
        alertDiv.current.classList.remove("top-3");
        clearInterval(to);
      }
    });
  };

  const alertTextAnim = (e) => {
    if (e.target.classList.contains("top-3")) {
      alertText.current.classList.remove("hidden");
      let initIndex = 0;
      const to = setInterval(() => {
        if (initIndex < aText.length) {
          alertText.current.innerHTML += aText[initIndex];
          initIndex++;
        } else {
          clearInterval(to);
          setTimeout(() => {
            alertTextClear();
          }, 2000);
        }
      });
    }
  };

  useEffect(() => {
    alertDiv.current.classList.add("top-3");
  }, []);

  return (
    <div
      className="absolute -top-20 left-3 transition-all duration-300"
      ref={alertDiv}
      onTransitionEnd={alertTextAnim}
    >
      <div className="bg-amber-950 flex items-center gap-3 px-3 py-1 rounded-full transition-all duration-300 w-full">
        <div>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-7 text-slate-300"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
            ></path>
          </svg>
        </div>
        <div className="text-slate-300 text-xs hidden" ref={alertText}></div>
      </div>
    </div>
  );
};

export default Alert;
