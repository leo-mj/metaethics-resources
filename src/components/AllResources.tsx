import { Resource } from "../utils/interfaces";

interface IPropsAllResources {
  resources: Resource[];
  setCurrentResource: React.Dispatch<React.SetStateAction<Resource | null>>;
}

export function AllResources({
  resources,
  setCurrentResource,
}: IPropsAllResources): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {resources &&
          resources.map((entry: Resource) => (
            <tr key={entry.id}>
              <td onClick={() => setCurrentResource(entry)}>{entry.title}</td>
              <td>
                <a href={entry.url}>{entry.url}</a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
