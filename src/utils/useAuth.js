//utils/useAuth.js
import { useRouter } from "next/navigation";
import { jwtVerify } from "jose";
import { useState, useEffect } from "react";

const useAuth = () => {
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const router = useRouter();
  console.log(router.pathname);

  useEffect(() => {
    if (router.pathname !== "/pages/user/login") {
      const checkToken = async () => {
        const token = localStorage.getItem("token");
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
      };
      checkToken();
    }
  }, [router]);
  return loginUserEmail;
};
export default useAuth;
