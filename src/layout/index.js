import Router from "../router";
import { BrowserRouter } from "react-router-dom";
import { getAction } from "@/axios";
import { useEffect, useState } from "react";
const App = () => {
  // 登录认证
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // 路由权限
  useEffect(() => {
    // const getData = async () => {
    //   const rs = await getAction("http://47.93.4.29:81/test/");
    //   console.log(rs);
    // };
    // getData();
    setTimeout(() => {
      setMenu([
        {
          name: "root",
        },
      ]);
      setIsLoading(false);
    }, 500);
  }, []);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <>
      <BrowserRouter>
        <Router menu={menu} />
      </BrowserRouter>
    </>
  );
};
export default App;
