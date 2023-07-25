const AnEvent = ({ params }: { params: { slug: string } }) => {
    return <div>
        Hello world {params.slug}
    </div>

}

export default AnEvent;