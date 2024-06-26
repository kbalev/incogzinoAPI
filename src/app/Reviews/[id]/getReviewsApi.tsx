export interface ReviewData {
    productId: string;
    image: string;
    reviewId: string;
    customer: string;
    productName: string;
    comment: string;
    
   
  }
  
  export default async function getReview(productId: string): Promise<ReviewData> {
  
    console.log("gets called")
          const res = await fetch( `http://api.josh.netbuildertraining.com/reviews/${productId}`)
          if (!res.ok) {
              throw new Error(`failed to fetch user ${productId}`)
          }
  
          return res.json() as Promise<ReviewData>
      }
  