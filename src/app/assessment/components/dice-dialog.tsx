import Button from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { useChat } from "@/store/chat-provider"
import Dice from "./dice"
import { useState } from "react"

const DiceDialog = ({
  children,
  className,
  questionnaire,
}: {
  children: React.ReactNode
  className: string
  questionnaire: number
}) => {
  const {
    chat: { activeQuestionnaire, currentStage },
  } = useChat()((state) => state)

  const [val, setVal] = useState()

  const disable =
    currentStage === "pre-q" && activeQuestionnaire === questionnaire

  return (
    <Dialog>
      <DialogTrigger
        disabled={!disable}
        className={cn("w-full p-0", className)}
      >
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="flex items-center justify-center mb-5">
          <Dice setDiceVal={setVal} />
        </div>
        <div className="flex justify-center items-center gap-1 mt-12">
          <p className="text-dark-charcoal text-center">
            Your score will be multiplied by
          </p>
          <div className="rounded-[5px] bg-magic-mint font-medium h-[20px] flex justify-center items-center p-[2px]">
            x<span>{val}</span>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button label="Continue" className="bg-black w-full" />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DiceDialog
