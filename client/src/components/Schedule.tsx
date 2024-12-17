
import './schedule.css';

import { BsClock } from "react-icons/bs";

const Schedule = () => {

    return (
        <section >
            <div className='schedule_container'>
                <div>
                    <span className="clock_icon"><BsClock /></span>
                </div>
                <div className='schedule_title'>
                    <h2>Horario</h2>
                </div>
                <div className='schedule_time'>
                    <p>Lun: Cerrado</p>
                    <p>Mar: 9am-5pm</p>
                    <p>Mier: 9am-5pms</p>
                    <p>Jue: 9am-5pm</p>
                    <p>Vier: 9am-5pm</p>
                    <p>Sáb: 9am-5pm</p>
                    <p>Dom: 9am-5pm</p>
                </div>
            </div>
        </section>
    );

}

export default Schedule;

 