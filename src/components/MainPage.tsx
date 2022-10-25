import { useEffect, useState } from "react";
import { Resource } from "../utils/interfaces";
import { loadResources } from "../utils/loadResources";
import { pageTitle } from "../utils/title";
import { AddResource } from "./AddResource";
import { AllResources } from "./AllResources";
import { OneResource } from "./OneResource";

export function MainPage(): JSX.Element {
  const [resources, setResources] = useState<null | Resource[]>(null);
  const [currentResource, setCurrentResource] = useState<null | Resource>(null);

  useEffect(() => {
    loadResources(setResources);
  }, []);

  return (
    <div className="main-page">
      <h1>{pageTitle()}</h1>
      {!resources && <p>Loading...</p>}
      {!currentResource && resources && (
        <AddResource setResources={setResources} />
      )}
      {!currentResource && resources && (
        <AllResources
          resources={resources}
          setCurrentResource={setCurrentResource}
        />
      )}
      {currentResource && resources && (
        <OneResource
          resource={currentResource}
          setCurrentResource={setCurrentResource}
        />
      )}
    </div>
  );
}
