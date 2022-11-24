import interview from '../Ui/interview.mp4';
function AboutVideo() {
    return (
        <div className='mx-10 shadow-2xl xl:shadow-zinc-900  md:mx-[18.5%] ' style={{ borderRadius: 25 }}>
            <video width="800" height="650" autoPlay controls style={{ borderRadius: 25 }}>
                <source src={interview} type="video/mp4" />
            </video>
        </div>
    )
}
export default AboutVideo