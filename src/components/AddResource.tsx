import axios from "axios";
import { useState } from "react";
import { baseURL } from "../utils/baseURL";
import { Resource } from "../utils/interfaces";
import { loadResources } from "../utils/loadResources";

interface IPropsAddResource {
  setResources: React.Dispatch<React.SetStateAction<Resource[] | null>>;
}

export function AddResource({ setResources }: IPropsAddResource): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async () => {
    if (title === "" || url === "" || description === "") {
      alert("You need to fill in every input field");
      return;
    }
    const newResource = {
      title: title,
      url: url,
      description: description,
    };
    try {
      await axios.post(baseURL + "/addResource", newResource);
      setTitle("");
      setUrl("");
      setDescription("");
      loadResources(setResources);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Add new resource</h2>
      <div className="add-resource">
        Title:
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        URL:
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
        Description:
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
