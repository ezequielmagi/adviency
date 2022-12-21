export default async function handler(req, res) {

    const randomGifts = [
        { gift:'Ajedrez' },
        { gift:'Funko GOT' },
        { gift:'Cerveza' },

        { gift:'Auriculares' },
        { gift:'Funda para el cel' },
        { gift:'Caja de bombones' },

        { gift:'Manga Dragon Ball' },
        { gift:'Camiseta de Boca' },
        { gift:'Camiseta de River' }
    ];
    
    res.status(200).json(randomGifts);

}
