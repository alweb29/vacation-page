import { Outlet } from "react-router-dom";

function Root(){

    return(
        <Outlet>
            <h1>layout</h1>
        </Outlet>
    )
}

export default Root;