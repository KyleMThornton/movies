export default function Rating({ review }: { review: number }) {
    const ratingPercentage = review * 10

    return (
        <>
            <div className="radial-progress text-blue-600" style={{"--value":ratingPercentage, "--size": "2rem"}}>{ratingPercentage}</div>
        </>
    )
}