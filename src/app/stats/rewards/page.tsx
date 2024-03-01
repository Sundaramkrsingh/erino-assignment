import { Icons } from "@/components/icons"
import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="fixed w-[380px] overflow-hidden bg-fixed bg-[center_top_60px] overflow-y-scroll no-scrollbar text-primary px-5 pb-[10px] bg-no-repeat">
        <div className="h-[65px] flex items-center gap-2 text-black">
          <Link href="/stats">
            <Icons.leftArrow className="w-7 h-7" />
          </Link>
          <h1 className="font-medium text-lg">Rewards</h1>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center flex-col items-center p-5">
        <Icons.placeHolderAba />
        <div className="w-[230px] flex items-center justify-center flex-col">
          <p className="text-center text-[26px] text-black font-bold">
            Rewards are coming soon
          </p>
          <p className="text-center mt-[10px] text-sm">
            Be ready to earn exciting rewards
          </p>
        </div>
      </div>
    </>
  )
}

export default page
