import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea,Button } from "@mui/material";
import { ShoppingCart} from "phosphor-react"
import "./ItemCard.css";



interface ItemCardProps {
  title: string;
  tagline: string;
  imageUrl: string;
  id:string;
}
var itemId;
function addToCart(id:any){
       console.log(id);
       itemId = id;
}
export function ItemCard({ title, tagline, imageUrl,id }: ItemCardProps) {
  return (
    <>
      <Card className="card" sx={{ width: 350, height: 350 }}>
        <CardActionArea  >
          <CardMedia
            className="card-media"
            component="img"
            height="200"
            image={imageUrl}
            sx={{ padding: "1em 1em 1em 1em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" className="title">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tagline}
            </Typography>
          </CardContent>
          <div className="addtoCart">    
                  <Button  variant="outlined" color="secondary" onClick={()=>addToCart({id})}><ShoppingCart size={20}/></Button></div>

        </CardActionArea>
      </Card>
    </>
  );
}

export default itemId;
