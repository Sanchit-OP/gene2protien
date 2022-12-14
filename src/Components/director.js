import interview from '../Ui/interview.mp4';
function Director() {
    return (
        <div className=' bg-[#7cc576] hidden md:flex p-20'>
            <video width="600" height="650" controls className='rounded-xl mx-10 shadow-2xl ' >
                <source src={interview} type="video/mp4" />
            </video>
            <div className='leading-8 font-medium'>
                <h1 className='text-3xl font-bold mx-[30%] mb-10'>Director’s Appeal:</h1>
                "We look to you for your support in our journey to take India a step closer to self-sufficiency.  Boycott and Swadeshi were two slogans which drove the Indian freedom struggle, now we appeal to the Indian in you to carry forward these to S&T in the 21st century where we can show to the world that “Make in India” truly is successful."<br />
                <br/><div className='leading-6'>
                <div className='font-semibold'>
                Dr. Shradha Goenka<br /></div>
                <div className='italic '>
                Managing Director <br /></div></div>

            
            </div>
        </div>
    )
}
export default Director;