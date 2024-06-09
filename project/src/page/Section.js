import gif1 from "../assets/gif1.gif";

export default function Section() {
    return(
        <div className="flex p-24 text-white" style={{backgroundColor: '#003329'}}>
            <div className="w-1/2 mr-12">
                <img src={gif1} alt="GIF" className="w-full" />
            </div>
            <div className="w-1/2">
                <h2 className="mb-8 text-3xl">Parallax Scrolling Website</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has 
                    survived not only five centuries, but also the leap 
                    into electronic typesetting, remaining essentially 
                    unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                    
                </p>
            </div>
        </div>
    );
}