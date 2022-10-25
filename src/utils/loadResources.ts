import axios from "axios";
import { baseURL } from "./baseURL";
import { Resource } from "./interfaces";

export async function loadResources(
  setResources: React.Dispatch<React.SetStateAction<Resource[] | null>>
): Promise<void> {
  try {
    const loadedResources: Resource[] = (
      await axios.get(baseURL + "/resources")
    ).data;
    console.log(loadedResources);
    setResources(loadedResources);
  } catch (error) {
    console.error(error);
  }
}
