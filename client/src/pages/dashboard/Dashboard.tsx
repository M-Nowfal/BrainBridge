import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { setUser } from "@/store/slices/user-slice";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const Dashboard = () => {

  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const navigator: NavigateFunction = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const storedUserString = localStorage.getItem("user");
        let storedUserObj: { id?: string } | null = null;
        if (storedUserString) {
          try {
            storedUserObj = JSON.parse(storedUserString);
          } catch {
            storedUserObj = null;
          }
        }
        if (!user.id && storedUserObj?.id) {
          dispatch(setUser({ ...user, id: storedUserObj.id }));
        }
        const userid = user.id || storedUserObj?.id;
        if (!userid) return navigator("/auth/login");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${userid}`);
        if (res.status === 200) {
          dispatch(setUser(res.data.user));
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      } catch (err: unknown) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="border mt-20 w-5/6">
      <p className="wrap-break-word">
        {JSON.stringify(user)}
      </p>
    </div>
  );
}

export default Dashboard;
