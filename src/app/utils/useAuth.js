//utils/useAuth.js
import { useRouter } from "next/navigation";
import { jwtVerify } from "jose";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const router = useRouter();
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (router.pathname !== "/pages/user/login") {
        // '/pages/user/login'以外のURLでの処理
        if (!token) {
          router.push("/pages/user/login");
        }
        try {
          const secretKey = new TextEncoder().encode("TastingNote");
          const decodedJwt = await jwtVerify(token, secretKey);
          setLoginUserEmail(decodedJwt.payload.email);
        } catch (error) {
          router.push("/pages/user/login");
        }
      }
    };
    checkToken();
  }, [router]);
  return loginUserEmail;
};
export default useAuth;
