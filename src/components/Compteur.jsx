import React, { useState, useEffect } from "react";

const Countdown = () => {
    const [hours, setHours] = useState(35); // Définissez la valeur initiale des heures ici
    const [minutes, setMinutes] = useState(30); // Définissez la valeur initiale des minutes ici
    const [seconds, setSeconds] = useState(45); // Définissez la valeur initiale des secondes ici

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const totalMilliseconds =
                (hours * 60 * 60 + minutes * 60 + seconds - 1) * 1000;

            if (totalMilliseconds <= 0) {
                clearInterval(countdownInterval);
                console.log("Temps écoulé!");
                return;
            }

            const remainingSeconds = Math.floor((totalMilliseconds / 1000) % 60);
            const remainingMinutes = Math.floor((totalMilliseconds / 1000 / 60) % 60);
            const remainingHours = Math.floor(totalMilliseconds / 1000 / 60 / 60);

            setHours(remainingHours);
            setMinutes(remainingMinutes);
            setSeconds(remainingSeconds);
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [hours, minutes, seconds]);

    return (
        <div className=" items-center">
            <div className="flex items-center justify-evenly  w-[60vh]  ">
                <div className="flex flex-col items-center">
                    <div className="w-[100px] h-[100px] border-2 border-[#0080C8] rounded-full flex justify-center items-center ">
                        <p> {hours} </p>
                    </div>
                    <p className="text-[14px] text-[#151515] mt-4 "> Hours </p>
                </div>
                <p> : </p>
                <div className="flex flex-col items-center">
                    <div className="w-[100px] h-[100px] border-2 border-[#0080C8] rounded-full flex justify-center items-center ">
                        <p> {minutes} </p>
                    </div>
                    <p className="text-[14px] text-[#151515] mt-4 "> Minutes </p>
                </div>
                <p> : </p>

                <div className="flex flex-col items-center">
                    <div className="w-[100px] h-[100px] border-2 border-[#0080C8] rounded-full flex justify-center items-center ">
                        <p> {seconds} </p>
                    </div>
                    <p className="text-[14px] text-[#151515] mt-4 "> Seconds </p>
                </div>
            </div>
    

        </div>
    );
};

export default Countdown;
