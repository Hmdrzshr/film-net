import api from "./api";

export default async function getApi(setLoading, link, setData) {
   try {
      setLoading(true);
      const response = await api.get(link);
      setLoading(false);
      setData(response.data);
   } catch (e) {
      setLoading(false);
   }
}
