export const api = {
    gifts : {
        get : async () => {
            const data = await fetch('/api/gift',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return data.json();
        }
    },
    randomGifts : {
        get : async () => {
            const data = await fetch('/api/randomGifts',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            return data.json();
        }
    }
    
}
