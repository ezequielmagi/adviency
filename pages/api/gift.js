export default async function handler(req, res) {

   // const data = await fetch('https://eipiai.vercel.app/api/gifts', 
   // {
   //     method: 'GET',
   //     headers: {
   //         'Content-Type': 'application/json'
   //     }
   // });

   const gifts = [
      {
         "gift": "Funko Harry Potter",
         "quantity": 4,
         "img": "https://http2.mlstatic.com/D_NQ_NP_887637-MLA48532306800_122021-O.webp",
         "price": 5000,
         "to": "jereconjota"
      },
      {
         "gift": "Camiseta Lio Messi",
         "quantity": 1,
         "img": "https://assets.adidas.com/images/w_600,f_auto,q_auto/2c9a5c4a4eac470b8ecfaeca012c625d_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425.jpg",
         "price": 15000,
         "to": "Juan Roman Riquelme"
      },
      {
         "gift": "Totoro",
         "quantity": 2,
         "img": "https://files.cults3d.com/uploaders/14388486/illustration-file/2f27362c-2ef5-4c09-93d5-6fe0cb095e98/Totoro%20Family_2.jpg",
         "price": 700,
         "to": "Maria <3"
      }
   ];

   res.status(200).json(gifts);
}