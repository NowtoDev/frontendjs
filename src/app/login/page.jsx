import React from "react";
import Link from "next/link";

function login () {
    return(
        <>
        <section>
            <div className="container">
                <div className="log-cent">
                <div className="login-card">
                    <form className="sss">
                        <h2>Login</h2>
                    <h4>username</h4>
                    <input type="text"/>
                    <h4>password</h4>
                    <input type="password"/>
                    <br />
                    <Link href="/signup" className="regiss">Register?</Link><br />
                    <button type="submit">Login</button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default login