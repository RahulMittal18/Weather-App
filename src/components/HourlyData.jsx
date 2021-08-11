

function HourlyData({item,index,hours,placeData}){

    console.log(placeData.forecast.forecastday[0].hour[0].time);

    return(
        <div className="hourdata">
            data{item}
            {placeData.forecast.forecastday[0].hour[0].time}
            
        </div>
    )
}

export default HourlyData