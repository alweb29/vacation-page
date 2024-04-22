function CalendarTile({className, text}){
    console.log(className, text)
    return(
        <div className={className}>
                {text}
        </div>
    );
}

export default CalendarTile;