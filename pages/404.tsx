import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      router.push("/");
    };
  }, [router]);
};

export default NotFound;
