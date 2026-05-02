import { useParams } from "react-router";

const EpisodeById = () => {
  const { episodeId } = useParams();
  return <div>{episodeId}</div>;
};

export default EpisodeById;
