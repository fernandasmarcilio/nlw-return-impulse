import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./FormSteps/FeedbackTypeStep";
import { FeedbackContentStep } from "./FormSteps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./FormSteps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null);
  const [ feedbackSent, setFeedbackSent ] = useState<boolean>(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  function FeedbackSteps() {
    if(feedbackSent) {
      return (
        <FeedbackSuccessStep 
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )
    }

    if(!feedbackType) {
      return (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      )
    }

    return (
      <FeedbackContentStep
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        onFeedbackSent={() => setFeedbackSent(true)}
      />
    )
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      <FeedbackSteps />

      <footer className="text-xs text-neutral-400">
        Feito com ❤ por{" "}
        <a
          className="underline underline-offset-2 hover:text-neutral-200 transition-colors"
          href="https://github.com/fernandasmarcilio"
        >
          Fernanda Marcilio
        </a>
      </footer>
    </div>
  );
}
