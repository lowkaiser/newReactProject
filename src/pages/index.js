import Loadable from "react-loadable";
// 做 loading  加载
import Loading from "../components/loading"

export const Market = Loadable({
    loader:()=>import("./market"),
    loading:Loading
})
export const GoodsMoments = Loadable({
    loader:()=>import("./goodsMoments"),
    loading:Loading
})
export const Purchase = Loadable({
    loader:()=>import("./purchase"),
    loading:Loading
})
export const Shopping = Loadable({
    loader:()=>import("./shopping"),
    loading:Loading
})
export const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})
export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
export const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})