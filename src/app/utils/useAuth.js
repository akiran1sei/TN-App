//utils/useAuth.js
import { useRouter } from "next/navigation";
import { jwtVerify } from "jose";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [hasNavigated, setHasNavigated] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (!token || hasNavigated) {
        router.push("/pages/user/login");
        setHasNavigated(true);
      }
      try {
        const secretKey = new TextEncoder().encode("TastingNote");
        const decodedJwt = await jwtVerify(token, secretKey);
        setLoginUserEmail(decodedJwt.payload.email);
      } catch (error) {
        if (hasNavigated) {
          router.push("/pages/user/login");
          setHasNavigated(true);
        }
      }
    };
    checkToken();
  }, [router]);
  return loginUserEmail;
};
export default useAuth;
