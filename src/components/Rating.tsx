export default function Rating({ review }: { review: number }) {
    const ratingPercentage = review * 10
    let ratingColor = ""

    if(ratingPercentage >= 75) {
        ratingColor = "text-green-600"
    } else if(ratingPercentage >= 40 && ratingPercentage < 75) {
        ratingColor = "text-yellow-600"
    } else {
        ratingColor = "text-red-600"
    }

    return (
        <>
            <div className={`radial-progress ${ratingColor}`} style={{"--value":ratingPercentage, "--size": "2.5rem"}}>{ratingPercentage}</div>
        </>
    )
}