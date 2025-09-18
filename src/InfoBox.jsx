import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({info}){
    const int_img_url = "https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <div className="InfoBox">
            <h3>Weather Info</h3>
            <Card style={{width:"500px"}} sx={{ maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image= {int_img_url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" 
                        component="div">{info.city}
                        </Typography>
                        <Typography variant="body2" 
                        sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temprature : {info.temp}&deg;C</p>
                        <p>Min Temp : {info.temp_min}&deg;C</p>
                        <p>Max Temp : {info.temp_max}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Feels Like : {info.feels_like}&deg;C</p>
                        <p>Description : {info.weather_description}</p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}