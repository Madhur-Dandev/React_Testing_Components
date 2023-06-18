import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Rerender = () => {
  const { data } = useParams();

  useMemo(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Link to="/render">Muktai</Link>
    </div>
  );
};

export default Rerender;
