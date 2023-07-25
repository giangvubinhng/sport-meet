import SearchInput from "@/components/search";
import { Button } from "@/components/ui/button";
import {PiSoccerBallFill} from 'react-icons/pi';
import {MdOutlineWhereToVote} from 'react-icons/md'
import {
    Dialog,
    DialogTrigger,
  } from "@/components/ui/dialog";
import AddDialog from "@/components/create-dialog";
import Link from "next/link";
interface SportOutline {
    id: string,
    title: string,
    address: string,
    peopleGoing: number,
    date: string,
    time: string
}
const mockData: SportOutline[] = [
    {
        id: "random1", 
        title: "Soccer through night", 
        address: "Hampton, VA", 
        peopleGoing: 20, 
        date: "July 20, 2023", 
        time: "5:30pm"
    },
    {
        id: "random2", 
        title: "Basketball through night", 
        address: "Norfolk, VA", 
        peopleGoing: 15, 
        date: "August 22, 2023", 
        time: "5:30pm"
    },
    {
        id: "random3", 
        title: "Football through night", 
        address: "Virginia Beach, VA", 
        peopleGoing: 30, 
        date: "October 22, 2023", 
        time: "5:30pm"
    },
]
function Events() {
    const renderItem = (event: SportOutline) => {
        return (
            <div className=" flex items-center space-x-4 rounded-md border p-4 my-10" key={event.id}>
                <PiSoccerBallFill size={30}/>
                <div className="flex-1 space-y-1">
                    <Link href={`/events/${event.id}`} className="text-sm font-medium leading-none transition duration-300">
                    {event.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                    {event.address}
                    </p>
                </div>

                <MdOutlineWhereToVote size={24}/>
                <h1>{event.peopleGoing} Going</h1>
                <h1>{event.date}</h1>
                <h1>{event.time}</h1>
            </div>

        )
    }
    return (
        <div>
            <div className="flex justify-center my-20">
            <SearchInput/>
            </div>
            <div className="flex justify-end max-w-7xl mx-auto mb-5">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant={"secondary"}>Create</Button>
                    </DialogTrigger>
                    <AddDialog/>
                </Dialog>

            </div>
            <div className="border-t max-w-7xl mx-auto">
                {mockData.map(renderItem)}
            </div>
        </div>
    )
}
export default Events;
