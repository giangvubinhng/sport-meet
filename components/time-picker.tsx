const hours = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const minutes = Array.from({length: 60}, (_, i) => i.toString().padStart(2, '0'));

function TimePicker(){
    
    return (
        <div className="inline-flex text-lg">
            <select name="" id="hours" className="px-2 outline-none appearance-none bg-transparent">
                {hours.map((h: string) => <option key={h} value={h}>{h}</option>)}
            </select>
            <span className="px-2">:</span>
            <select name="" id="" className="px-2 outline-none appearance-none bg-transparent">
                {minutes.map((min: string) => <option key={min} value={min}>{min}</option>)}
            </select>
            <select name="" id="" className="px-2 outline-none appearance-none bg-transparent">
            <option value="AM">AM</option>
            <option value="PM">PM</option>
            </select>
        </div>
    )

}
export default TimePicker;