import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import WaterDropIcon from '@mui/icons-material/WaterDrop';
import './InfoBox.css';


export default function InfoBox({info}){
    const INIT_IMAGE="https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    
  const HOT_URL='https://images.unsplash.com/photo-1615537510721-bcb43bef66fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxIT1QlMjB3ZWF0aGVyfGVufDB8fDB8fHww'  ;
const COLD_URL="https://images.unsplash.com/photo-1610171689719-df4692b83e4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
const RAIN_URL='https://images.unsplash.com/photo-1429552054921-018e433d7d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';

    return(
        <div className="InfoBox">
            <h3>Weater Infomation - {info.humidity}</h3>
<div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL :info.temp > 15 ? HOT_URL : COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {info.city}
         {info.humidity > 80 ? <WaterDropIcon/> :info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>} */}
          
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'span'}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMax}&deg;C</p>
         <p>Max Temp = {info.tempMin}&deg;C</p>
         <p> The weather can be described as <i>{info.weather}</i> feels { info.feels_like}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}