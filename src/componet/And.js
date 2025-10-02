import React from "react";

function And ({show}) {
    return (
        <div>
            {!show && <p style={{ color: "red"}}> Warning: Something is wrong!</p>}

        </div>
    );
}

export default And;