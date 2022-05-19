import { CloseButton } from "../CloseButton/CloseButton";

import bugImageURL from '../../assets/bug.svg'
import { useState } from "react";

import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSucessStep";

import ideaImageURL from '../../assets/idea.svg'
import thoughtImageURL from '../../assets/thought.svg'



export const feedbackTypes = {
   BUG: {
      title: 'Problema',
      img: {
         source: bugImageURL,
         alt: 'Imagem de um inseto'
      }
   },
   IDEA: {
      title: 'Ideia',
      img: {
         source: ideaImageURL,
         alt: 'Imagem de uma lâmpada'
      }
   },
   OTHER: {
      title: 'Outro',
      img: {
         source: thoughtImageURL,
         alt: 'Imagem de um balão de pensamento'
      },
   },
};

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
   const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
   const [feedbackSent, setFeedbackSent] = useState(false)

   function handleSetFeedbackTypeNull() {
      setFeedbackType(null)
      setFeedbackSent(false)
   }

   return (
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
         {feedbackSent ? (
            <FeedbackSucessStep
               onFeedbackRestartRequested={handleSetFeedbackTypeNull}
            />
         ): (
            <>
               {!feedbackType ? (
                  <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
               ) : (
                  <FeedbackContentStep
                     onFeedbackSent={() => {setFeedbackSent(true)}}
                     feedbackType={feedbackType}
                     onFeedbackRestartRequested={handleSetFeedbackTypeNull}
                  />
               )}
            </>
         )}

         <footer className="text-xs text-neutral-400">
            Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
         </footer>
      </div>
   )
}