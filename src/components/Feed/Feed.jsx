import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../../client";
import { feedQuery, searchQuery } from "../../utils/data";
import MasonryLayout from "../MasonryLayout/MasonryLayout";
import Spinner from "../Spinner/Spinner";
const Feed = () => {
  const [Loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if (Loading)
    return <Spinner message="We are adding new ideas to your feed!" />;
  if (!pins?.length)
    return (
      <h2 className="flex justify-center items-center">No Pins available</h2>
    );
  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
