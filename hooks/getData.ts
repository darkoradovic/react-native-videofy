import { VideoProps } from "@/lib";
import { getAllPosts } from "@/lib/appwrite";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useGetData = (fn: any) => {
  const [data, setData] = useState<VideoProps[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fn();
      setData(res);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, refetch };
};

export default useGetData;
