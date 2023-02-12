import React from 'react'
import "./Timeline.css"
// import "./TimelineJs.js"
const Timeline = () => {
    return (
        <div id='timeline'>
            <div className="timelineHeader section-padding" style={{ textAlign: "center" }}>
                <h1 className=' main-title-font'  >Event Timeline</h1>
                <hr className='line-padding m-auto' />
            </div>
            <div id="nayma-timeline" class="nayma-container">
                <div class="nayma-timeline-block">
                    <div class="nayma-timeline-img timelinePopup">
                    </div>
                    <div class="nayma-timeline-content timelineContent" >
                        <h2>Speaker and Talks</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                    </div>
                </div>
                <div class="nayma-timeline-block">
                    <div class="nayma-timeline-img timelinePopup">
                    </div>
                    <div class="nayma-timeline-content timelineContent">
                        <h2>Pitches</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                    </div>
                </div>
                <div class="nayma-timeline-block">
                    <div class="nayma-timeline-img timelinePopup">
                    </div>
                    <div class="nayma-timeline-content timelineContent">
                        <h2>StartUp</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
                    </div>
                </div>
                <div class="nayma-timeline-block">
                    <div class="nayma-timeline-img timelinePopup">
                    </div>
                    <div class="nayma-timeline-content timelineContent">
                        <h2>Sekcja 04</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
                    </div>
                </div>
                <div class="nayma-timeline-block">
                    <div class="nayma-timeline-img timelinePopup">
                    </div>
                    <div class="nayma-timeline-content timelineContent">
                        <h2>Sekcja 05</h2>
                        <p>This is the content of the last section</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Timeline
