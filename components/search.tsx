import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function SearchInput() {

    return (
        <div className="flex max-w-lg items-center space-x-2">
        <div className="flex flex-row space-x-2">
            <Input type="input" placeholder="Event name" />
            <Input type="input" placeholder="Atlanta, GA" className="basis-1/3"/>
        </div>
        <Button type="submit">Search</Button>
        </div>
    )

}
export default SearchInput;