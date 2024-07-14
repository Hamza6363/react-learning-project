import React, { useState, useEffect } from 'react';


function UseEffectPage() {
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        console.log('function call before return');


        return () => {
            console.log('function call after return');
        };
    }, [isSubscribed]);

    return (

        <div>
            <button onClick={() => setIsSubscribed(!isSubscribed)}>
                {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
            </button>
        </div>
    );
}

export default UseEffectPage;
