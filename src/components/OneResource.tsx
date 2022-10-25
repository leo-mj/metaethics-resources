import { Resource } from "../utils/interfaces";

interface IPropsOneResource {
  resource: Resource;
  setCurrentResource: React.Dispatch<React.SetStateAction<Resource | null>>;
}

export function OneResource({
  resource,
  setCurrentResource,
}: IPropsOneResource): JSX.Element {
  return (
    <div className="one-resource">
      <h2>{resource.title}</h2>
      <a href={resource.url}>{resource.url}</a>
      <h3>Abstract:</h3>
      <p>{resource.description}</p>
      <button onClick={() => setCurrentResource(null)}>Close</button>
    </div>
  );
}
