import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton/CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface feedbackContentStepProps {
   feedbackType: FeedbackType;
   onFeedbackRestartRequested: () => void;
   onFeedbackSent: () => void;

}

export function FeedbackContentStep({
      feedbackType,
      onFeedbackRestartRequested,
      onFeedbackSent
   }: feedbackContentStepProps) {
      const [screenshot, setScreenshot] = useState<string | null>(null)
      const [comment, setComment] = useState('');

      function handleSubmitFeedback(event: FormEvent) {
         event.preventDefault();
         console.log({
            screenshot,
            comment
         })
         onFeedbackSent();
      }
   
      const feedbackTypeInfo = feedbackTypes[feedbackType]

   return (
      <>
         <header>
            <button 
               type='button' 
               className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
               onClick={onFeedbackRestartRequested}
            >
               <ArrowLeft weight="bold" className="w-4 h-4"/>
            </button>
            <span 
               className="text-xl leading-6 flex items-center gap-2"
            >
               <img className="w-6 h-6" src={feedbackTypeInfo.img.source} alt={feedbackTypeInfo.img.alt} />
               {feedbackTypeInfo.title}
            </span>
            <CloseButton/>
         </header>

         <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
            <textarea 
               className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-default focus:outline-none focus:ring-brand-default focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
               placeholder="Conte com detalhes o que está acontecendo..."
               onChange={event => setComment(event.target.value)}
            />
            <footer className="flex gap-2 mt-2 ">

               <ScreenshotButton 
                  onScreenshotTook={setScreenshot}
                  screenshot={screenshot}
                  setScreenshot={setScreenshot}
               />

               <button
                  type="submit"
                  disabled={comment.length == 0}
                  className="p-2 bg-brand-default rounded-four border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-default transition-colors disabled:opacity-50 disabled:hover:bg-brand-default"
               >
                  Enviar feedback
               </button>
            </footer>
         </form>
      </>
   )
}