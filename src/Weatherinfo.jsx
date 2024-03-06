import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Weatherinfo({ info }) {
    const int_img = "https://images.unsplash.com/photo-1525400934005-6017d3269264?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_img = "https://images.unsplash.com/photo-1520609798519-2e1e8c18df3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const dry_img = "https://media.istockphoto.com/id/1489781029/photo/clothes-hanging-to-dry-on-a-laundry-line.webp?s=2048x2048&w=is&k=20&c=3gk51n3JQjdecptV7vGjEAlOa41NeW3yLAOy24D5mGU=";
    return (
        <div>
            {/* <h1>{info.city}</h1> */}
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={rain_img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="span">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humi}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <b> {info.weather}</b> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}