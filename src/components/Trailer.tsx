"use client";

export default function Trailer() {
    return (
    <>
        <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/UGc5Tzz19UY" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        </dialog>
    </>
    )
}