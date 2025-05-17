type DeviceMockupProps = {
  type: "iphone" | "macbook"
}

export function DeviceMockup({ type }: DeviceMockupProps) {
  // Sample video URL - you'll replace this with your actual videos
  const videoUrl = "https://cdn.openai.com/chatgpt/analyze.mp4"

  if (type === "iphone") {
    return (
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
      <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 flex justify-center items-center bg-gray-800 rounded-full w-[26px] h-[26px]">
        <div className="w-[10px] h-[10px] bg-gray-600 rounded-full"></div>
      </div>
      <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[4px] flex justify-center items-center bg-gray-800 rounded-full w-[56px] h-[5px]"></div>
      </div>
    </div>
  )
}
