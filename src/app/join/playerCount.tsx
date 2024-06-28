"use client";


const PlayerCount = ({ count, current }: { count: number; current: number }) => {
    // const minSize = 4;
    return (
        <div className={`flex`}>
            {Array.from({ length: current }, (cur: any, index: number) => (
                <div key={"Cicle" + index.toString()} className={`mr-1 rounded-full bg-secondaryYellow w-4	h-4`}>            
                </div>
            ))}
                        {Array.from({ length: count-current }, (cur: any, index: number) => (
                <div key={"Cicle" + index.toString()} className={`mr-1 rounded-full bg-systemGray w-4 h-4`}>            
                </div>
            ))}
        </div>
    )
}


export default PlayerCount;
